import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Sparkles, ShieldCheck, MessageCircle } from "lucide-react";
import hero from "@/assets/hero.jpg";
import naturais from "@/assets/naturais.jpg";
import cosmeticos from "@/assets/cosmeticos.jpg";
import { Button } from "@/components/ui/button";
import { meta } from "@/components/site/PageHeader";
import { COMPANY, whatsappLink } from "@/lib/company";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: meta(
      "Evelin Silvana | Produtos naturais, cosméticos e perfumaria",
      "Empresa brasileira de comércio de produtos naturais, cosméticos e artigos de perfumaria, com atendimento pela internet e televenda. CNPJ 68.324.469/0001-10.",
    ),
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow">Site institucional oficial</p>
            <h1 className="mt-5 text-5xl leading-[1.05] text-primary md:text-7xl">
              Produtos naturais, cosméticos e perfumaria.
            </h1>
            <span className="gold-rule my-8" />
            <p className="max-w-lg text-muted-foreground">
              Somos uma empresa brasileira dedicada ao comércio de produtos naturais, cosméticos e
              artigos de perfumaria. Atuamos por meio de canais digitais e atendimento direto,
              buscando oferecer praticidade, transparência e uma experiência de compra confiável aos
              nossos clientes.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/contato">Contato comercial</Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/sobre">Conheça a empresa</Link></Button>
            </div>
          </div>
          <img src={hero} alt="Produtos naturais e cosméticos sobre tecido de linho" width={1600} height={1008}
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-xl md:aspect-[4/5]" />
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-sm md:grid-cols-3">
          <div><p className="eyebrow">Razão social</p><p className="mt-2">{COMPANY.legalName}</p></div>
          <div><p className="eyebrow">CNPJ</p><p className="mt-2">{COMPANY.cnpj}</p></div>
          <div><p className="eyebrow">Atuação</p><p className="mt-2">{COMPANY.channels} · {COMPANY.city}</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Áreas de atuação</p>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">Duas frentes, um mesmo cuidado.</h2>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {[
            { img: naturais, icon: Leaf, t: "Produtos naturais", d: "Comércio de produtos naturais e alimentícios, atendendo clientes por canais digitais e televenda.", cnae: "CNAE 4729-6/99" },
            { img: cosmeticos, icon: Sparkles, t: "Cosméticos e perfumaria", d: "Comércio de cosméticos, produtos de perfumaria e de higiene pessoal, com atendimento direto ao cliente.", cnae: "CNAE 4772-5/00" },
          ].map((c) => (
            <article key={c.t}>
              <img src={c.img} alt={c.t} loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full rounded-sm object-cover" />
              <div className="mt-6 flex items-center gap-3 text-gold"><c.icon className="h-5 w-5" /><span className="eyebrow">{c.cnae}</span></div>
              <h3 className="mt-3 text-3xl text-primary">{c.t}</h3>
              <p className="mt-3 text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-12"><Button asChild variant="outline"><Link to="/atividades">Ver nossas atividades</Link></Button></div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="eyebrow">Nosso compromisso</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Transparência e atendimento próximo.</h2>
          </div>
          <div className="space-y-6 opacity-90">
            <p className="flex gap-4"><ShieldCheck className="h-6 w-6 shrink-0 text-gold" />Informações cadastrais públicas e canais oficiais de contato claramente identificados.</p>
            <p className="flex gap-4"><MessageCircle className="h-6 w-6 shrink-0 text-gold" />Atendimento direto por e-mail, telefone e WhatsApp, com respostas objetivas.</p>
            <Button asChild variant="secondary" size="lg"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
