from celery import shared_task
from django.conf import settings

from .mk import MK

import PyPDF2
import wget
import os


@shared_task(autoretry_for=(Exception,), retry_kwargs={'max_retries': 3, 'countdown': 30})
def mk_bill(args):
    file_name = f"{args[0]}.pdf"
    path = f"{settings.BASE_DIR}/download/{file_name}"
    if not os.path.exists(path):
        mk = MK('Scheduler')
        fatura = mk.segunda_via(args[0])
        if fatura['status'] == 'OK':
            path = path.replace('.', '-insecure.')
            wget.download(fatura['PathDownload'], path, None)
            encrypt_pdf(path, args[1])
    link = f"{settings.DOMAIN}/download/{file_name}"
    print('{"file_name": "'+file_name+'", "link": "'+link+'"}')
    return {"file_name": file_name, "link": link}


def encrypt_pdf(path, password) -> str:
    pdfFile = open(path, 'rb')
    pdfReader = PyPDF2.PdfFileReader(pdfFile)
    pdfWriter = PyPDF2.PdfFileWriter()
    for pageNum in range(pdfReader.numPages):
        pdfWriter.addPage(pdfReader.getPage(pageNum))
    pdfWriter.encrypt(password)
    newPath = path.replace('-insecure.', '.')
    resultPdf = open(newPath, 'wb')
    pdfWriter.write(resultPdf)
    resultPdf.close()
    try:
        os.remove(f"{path}")
    except:
        pass
