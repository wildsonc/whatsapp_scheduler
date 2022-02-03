from celery import shared_task

import PyPDF2
import os


@shared_task
def encrypt_pdf(path, password) -> str:
    pdfFile = open(path, 'rb')
    pdfReader = PyPDF2.PdfFileReader(pdfFile)
    pdfWriter = PyPDF2.PdfFileWriter()
    for pageNum in range(pdfReader.numPages):
        pdfWriter.addPage(pdfReader.getPage(pageNum))
    pdfWriter.encrypt(password)
    newPath = path.replace('-pass.', '.')
    resultPdf = open(newPath, 'wb')
    pdfWriter.write(resultPdf)
    resultPdf.close()
    os.remove(path)
    return newPath.split('/')[-1]
