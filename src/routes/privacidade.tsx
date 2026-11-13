import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose, meta } from "@/components/site/PageHeader";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: meta("Política de Privacidade | Evelin Silvana", "Como tratamos dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).") }),
  component: () => (
    <>
      <PageHeader eyebrow="LGPD — Lei nº 13.709/2018" title="Política de Privacidade" />
      <Prose>
        <p>Esta Política descreve como a {COMPANY.legalName}, inscrita no CNPJ {COMPANY.cnpj} ("Empresa"), controladora dos dados, trata informações pessoais de quem utiliza este site e nossos canais de atendimento.</p>
        <h2>1. Dados que podem ser coletados</h2>
        <ul>
          <li>Dados informados voluntariamente por você ao entrar em contato: nome, e-mail, telefone e conteúdo da mensagem.</li>
          <li>Dados necessários para atendimento e eventual venda, como endereço de entrega, quando fornecidos por você.</li>
        </ul>
        <p>Este site não utiliza cookies de rastreamento, pixels de publicidade ou ferramentas de análise de terceiros. O formulário de contato apenas abre seu aplicativo de e-mail; nenhum dado é armazenado pelo site.</p>
        <h2>2. Finalidade do tratamento</h2>
        <ul><li>Responder solicitações, dúvidas e pedidos de orçamento.</li><li>Viabilizar vendas e entregas solicitadas por você.</li><li>Cumprir obrigações legais e fiscais.</li></ul>
        <h2>3. Como os dados são utilizados</h2>
        <p>Os dados são usados exclusivamente para as finalidades acima, com base no consentimento, na execução de contrato ou no cumprimento de obrigação legal (art. 7º da LGPD), e mantidos apenas pelo tempo necessário.</p>
        <h2>4. Compartilhamento</h2>
        <p>Não vendemos dados pessoais. O compartilhamento pode ocorrer somente quando necessário à prestação do serviço (por exemplo, transportadoras ou meios de pagamento), por exigência legal ou por ordem de autoridade competente. As comunicações por e-mail e WhatsApp são processadas pelos respectivos provedores desses serviços.</p>
        <h2>5. Direitos dos titulares</h2>
        <p>Nos termos do art. 18 da LGPD, você pode solicitar: confirmação do tratamento; acesso; correção; anonimização, bloqueio ou eliminação; portabilidade; informação sobre compartilhamento; e revogação do consentimento. Também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).</p>
        <h2>6. Segurança</h2>
        <p>Adotamos medidas razoáveis para proteger os dados contra acesso não autorizado, perda ou uso indevido.</p>
        <h2>7. Contato para privacidade</h2>
        <p>E-mail: {COMPANY.email}<br />Telefone: {COMPANY.phone}</p>
        <h2>8. Atualizações</h2>
        <p>Esta Política pode ser atualizada. A versão vigente estará sempre publicada nesta página.</p>
      </Prose>
    </>
  ),
});
