from django.conf import settings
from datetime import datetime
from .models import Token, MKUser

import requests


class MK:
    def __init__(self, user):
        self.host = f"{settings.MK_URL}/mk"
        self.user = MKUser.objects.get(name=user)

        self.get_token()

    def faturas_pendentes(self, cd_cliente) -> dict:
        link = self._get_link('WSMKFaturasPendentes', cd_cliente=cd_cliente)
        return requests.get(link).json()

    def segunda_via(self, cd_fatura) -> dict:
        link = self._get_link('WSMKSegundaViaCobranca', cd_fatura=cd_fatura)
        return requests.get(link).json()

    def consultar_fatura_cod_barras(self, barras) -> dict:
        link = self._get_link('WSMKConsultaBarras', barras=barras)
        return requests.get(link).json()

    def fatura_sms(self, cd_fatura) -> dict:
        link = self._get_link('WSMKLDViaSMS', cd_fatura=cd_fatura)
        return requests.get(link).json()

    def auto_desbloqueio(self, cd_conexao) -> dict:
        link = self._get_link('WSMKAutoDesbloqueio', cd_conexao=cd_conexao)
        return requests.get(link).json()

    def consultar_documento(self, doc) -> dict:
        link = self._get_link('WSMKConsultaDoc', doc=doc)
        return requests.get(link).json()

    def consultar_nome(self, nome) -> dict:
        link = self._get_link('WSMKConsultaNome', nome=nome)
        return requests.get(link).json()

    def validar_acesso_sac(self, user_sac, pass_sac) -> dict:
        link = self._get_link('WSMKMKUserSenhaSAC',
                              user_sac=user_sac, pass_sac=pass_sac)
        return requests.get(link).json()

    def conexoes(self, cd_cliente) -> dict:
        link = self._get_link('WSMKConexoesPorCliente', cd_cliente=cd_cliente)
        return requests.get(link).json()

    def contratos(self, cd_cliente) -> dict:
        link = self._get_link('WSMKContratosPorCliente', cd_cliente=cd_cliente)
        return requests.get(link).json()

    def classificacoes_atendimento(self) -> dict:
        link = self._get_link('WSMKListaClassificacoesAte')
        return requests.get(link).json()

    def listar_processos(self) -> dict:
        link = self._get_link('WSMKListaProcessos')
        return requests.get(link).json()

    def estrutura_enderecos(self) -> dict:
        link = self._get_link('WSMKListaEstruturaEnderecos')
        return requests.get(link).json()

    def get_token(self):
        now = datetime.now()
        q = Token.objects.filter(expire_at__gt=now).first()
        if q:
            self.token = q.token
        else:
            self._new_token()
        return self.token

    def _new_token(self):
        url = f'{self.host}/WSAutenticacao.rule?sys=MK0&token={self.user.token}&password={self.user.password}&cd_servico={self.user.cd_servico}'
        r = requests.get(url).json()
        if r['status'] == 'OK':
            expire = datetime.strptime(r['Expire'], '%d/%m/%Y %H:%M:%S')
            self.token = r['Token']
            Token.objects.create(
                expire_at=expire, token=self.token, name=self.user.name)

    def _get_link(self, endpoint: str, **kwargs) -> str:
        self.link = f'{self.host}/{endpoint}.rule?sys=MK0&token={self.token}'
        for k, v in kwargs.items():
            self.link += f"&{k}={v}"
        return self.link
