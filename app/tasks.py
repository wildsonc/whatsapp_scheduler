from psycopg2.extras import RealDictCursor
from celery import shared_task

from .models import Query, Database
from integrations.models import Dialog

import psycopg2
import PyPDF2
import os


def execute_query(query):
    q = Query.objects.get(id=query)
    with psycopg2.connect(q.database.connection) as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute(q.sql)
            return cursor.fetchall()


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


@shared_task
def mk_bill():
    pass
