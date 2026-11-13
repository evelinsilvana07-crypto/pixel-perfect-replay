import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose, meta } from "@/components/site/PageHeader";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/termos")({
  head: () => ({ meta: meta("Termos de Uso | Evelin Silvana", "Condições de utilização do site institucional de 68.324.469 EVELIN SILVANA MENDES FEITOSA.") }),
  component: () => (
    <>
      <PageHeader eyebrow="Condições gerais" title="Termos de Uso" />
      <Prose>
        <p>Ao acessar este site, você concorda com estes Termos de Uso, estabelecidos pela {COMPANY.legalName}, CNPJ {COMPANY.cnpj}.</p>
        <h2>1. Condições de utilização</h2>
        <p>Este site tem caráter institucional e informativo, apresentando a empresa, suas atividades e seus canais oficiais de atendimento.</p>
        <h2>2. Responsabilidades do usuário</h2>
        <ul><li>Utilizar o site de forma lícita e de boa-fé.</li><li>Fornecer informações verdadeiras ao entrar em contato.</li><li>Não tentar comprometer a segurança ou o funcionamento do site.</li></ul>
        <h2>3. Propriedade intelectual</h2>
        <p>Textos, identidade visual e demais conteúdos deste site pertencem à Empresa ou são utilizados com autorização. É proibida a reprodução sem autorização prévia. As imagens de produtos são meramente ilustrativas.</p>
        <h2>4. Limitação de responsabilidade</h2>
        <p>A Empresa se esforça para manter as informações corretas e atualizadas, mas não se responsabiliza por indisponibilidades temporárias, falhas técnicas ou por conteúdos de sites de terceiros eventualmente acessados por links.</p>
        <h2>5. Legislação aplicável</h2>
        <p>Estes Termos são regidos pelas leis brasileiras, incluindo o Código de Defesa do Consumidor, quando aplicável.</p>
        <h2>6. Contato</h2>
        <p>{COMPANY.legalName}<br />CNPJ: {COMPANY.cnpj}<br />E-mail: {COMPANY.email}<br />Telefone: {COMPANY.phone}<br />{COMPANY.city}</p>
      </Prose>
    </>
  ),
});
