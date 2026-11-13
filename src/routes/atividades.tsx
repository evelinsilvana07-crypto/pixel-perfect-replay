import { createFileRoute, Link } from "@tanstack/react-router";
import naturais from "@/assets/naturais.jpg";
import cosmeticos from "@/assets/cosmeticos.jpg";
import { Button } from "@/components/ui/button";
import { PageHeader, meta } from "@/components/site/PageHeader";

export const Route = createFileRoute("/atividades")({
  head: () => ({ meta: meta("Nossas atividades | Evelin Silvana", "Comércio de produtos naturais e alimentícios, cosméticos, perfumaria e higiene pessoal, pela internet e televenda.") }),
  component: Atividades,
});

const items = [
  { img: naturais, n: "01", t: "Produtos naturais e produtos alimentícios", cnae: "CNAE 4729-6/99 — Comércio varejista de produtos alimentícios em geral ou especializado em produtos alimentícios não especificados anteriormente.", d: "Atividade principal da empresa: comércio independente de produtos naturais, realizado pela internet e por televenda." },
  { img: cosmeticos, n: "02", t: "Cosméticos, perfumaria e higiene pessoal", cnae: "CNAE 4772-5/00 — Comércio varejista de cosméticos, produtos de perfumaria e de higiene pessoal.", d: "Atividade secundária da empresa: comércio independente de cosméticos e artigos de perfumaria, com atendimento direto ao cliente." },
];

function Atividades() {
  return (
    <>
      <PageHeader eyebrow="Nossas atividades" title="O que fazemos" intro="Duas categorias de atuação, registradas oficialmente no cadastro da empresa." />
      <div className="mx-auto max-w-6xl space-y-24 px-6 py-20">
        {items.map((it, i) => (
          <section key={it.n} className="grid items-center gap-10 md:grid-cols-2">
            <img src={it.img} alt={it.t} loading="lazy" width={1200} height={912} className={`aspect-[4/3] w-full rounded-sm object-cover ${i % 2 ? "md:order-2" : ""}`} />
            <div>
              <p className="font-display text-6xl text-gold">{it.n}</p>
              <h2 className="mt-2 text-4xl text-primary">{it.t}</h2>
              <p className="mt-4 text-muted-foreground">{it.d}</p>
              <p className="mt-6 border-l-2 border-gold pl-4 text-sm text-foreground/80">{it.cnae}</p>
            </div>
          </section>
        ))}
        <p className="text-center text-xs text-muted-foreground">Imagens meramente ilustrativas.</p>
        <div className="text-center"><Button asChild size="lg"><Link to="/contato">Fale conosco</Link></Button></div>
      </div>
    </>
  );
}
