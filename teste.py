from celery import shared_task
import os
import wget
import PyPDF2
import sys
from io import StringIO
import contextlib
import json

BASE_DIR = "/volumes/whatsapp_schudeler"
DOMAIN = "TESTE"


@contextlib.contextmanager
def stdoutIO(stdout=None):
    old = sys.stdout
    if stdout is None:
        stdout = StringIO()
    sys.stdout = stdout
    yield stdout
    sys.stdout = old


@shared_task
def mk_bill(args):
    file_name = f"{args[0]}.pdf"
    path = f"{BASE_DIR}/Documents/{file_name}"
    if not os.path.exists(path):
        pass
    link = f"{DOMAIN}/documents/{file_name}"
    print('{"file_name": "'+file_name+'", "link": "'+link+'"}')


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
    os.remove(f"{path}*")


def p(a, b):
    print(a+b)
    return a + b


print(mk_bill([4181476]))

with stdoutIO() as s:
    try:
        exec("mk_bill([4181476])")
    except:
        print("Something wrong with the code")
t = json.loads(s.getvalue())
print(t)
