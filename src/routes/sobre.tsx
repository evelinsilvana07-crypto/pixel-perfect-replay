import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose, meta } from "@/components/site/PageHeader";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: meta("Sobre a empresa | Evelin Silvana", "Identidade empresarial, atividades e informações cadastrais de 68.324.469 EVELIN SILVANA MENDES FEITOSA.") }),
  component: Sobre,
});

const rows: [string, string][] = [
  ["Razão social", COMPANY.legalName],
  ["CNPJ", COMPANY.cnpj],
  ["Natureza empresarial", COMPANY.nature],
  ["Situação cadastral", COMPANY.status],
  ["Data de abertura", COMPANY.openedAt],
  ["Forma de atuação", COMPANY.channels],
  ["Localização", COMPANY.city],
  ["E-mail", COMPANY.email],
  ["Telefone / WhatsApp", COMPANY.phone],
];

function Sobre() {
  return (
    <>
      <PageHeader eyebrow="Sobre a empresa" title="Identidade empresarial" intro="Uma empresa brasileira de comércio varejista de produtos naturais, cosméticos e artigos de perfumaria." />
      <Prose>
        <h2>Quem somos</h2>
        <p>A {COMPANY.legalName} é um Microempreendedor Individual (MEI) sediado no Rio de Janeiro, dedicado ao comércio de produtos naturais, cosméticos e artigos de perfumaria.</p>
        <h2>Atividades comerciais</h2>
        <ul>
          <li><strong>Atividade principal:</strong> comerciante independente de produtos naturais (CNAE 4729-6/99).</li>
          <li><strong>Atividade secundária:</strong> comerciante independente de cosméticos e artigos de perfumaria (CNAE 4772-5/00).</li>
        </ul>
        <h2>Como atuamos</h2>
        <p>Nossa atuação acontece pela internet e por televenda, com atendimento direto ao cliente por e-mail, telefone e WhatsApp.</p>
        <h2>Compromisso</h2>
        <p>Trabalhamos com transparência sobre nossa identidade jurídica e canais de atendimento, buscando oferecer praticidade e uma experiência de compra confiável.</p>
        <h2>Informações cadastrais</h2>
        <dl className="mt-6 divide-y divide-border border-y border-border">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-3 sm:grid-cols-3">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="sm:col-span-2 font-medium text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </Prose>
    </>
  );
}
