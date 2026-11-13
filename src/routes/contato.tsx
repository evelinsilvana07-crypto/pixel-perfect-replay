import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHeader, meta } from "@/components/site/PageHeader";
import { COMPANY, whatsappLink } from "@/lib/company";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: meta("Contato | Evelin Silvana", "Fale com a Evelin Silvana por e-mail, telefone ou WhatsApp. Rio de Janeiro, RJ, Brasil.") }),
  component: Contato,
});

function Contato() {
  const [f, setF] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nome: ${f.nome}\nE-mail: ${f.email}\n\n${f.mensagem}`;
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(f.assunto || "Contato pelo site")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <>
      <PageHeader eyebrow="Contato" title="Fale conosco" intro="Atendimento comercial por e-mail, telefone e WhatsApp." />
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-5">
        <div className="space-y-8 md:col-span-2">
          <Item icon={Mail} label="E-mail"><a href={`mailto:${COMPANY.email}`} className="hover:underline break-all">{COMPANY.email}</a></Item>
          <Item icon={Phone} label="Telefone"><a href="tel:+5521977443724" className="hover:underline">{COMPANY.phone}</a></Item>
          <Item icon={MapPin} label="Localização">{COMPANY.city}</Item>
          <Button asChild size="lg" className="w-full"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><MessageCircle /> Conversar no WhatsApp</a></Button>
        </div>
        <form onSubmit={submit} className="space-y-5 rounded-sm border border-border bg-card p-8 md:col-span-3">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2"><Label htmlFor="nome">Nome</Label><Input id="nome" required maxLength={100} value={f.nome} onChange={(e) => setF({ ...f, nome: e.target.value })} /></div>
            <div className="space-y-2"><Label htmlFor="email">E-mail</Label><Input id="email" type="email" required maxLength={255} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></div>
          </div>
          <div className="space-y-2"><Label htmlFor="assunto">Assunto</Label><Input id="assunto" maxLength={150} value={f.assunto} onChange={(e) => setF({ ...f, assunto: e.target.value })} /></div>
          <div className="space-y-2"><Label htmlFor="mensagem">Mensagem</Label><Textarea id="mensagem" required rows={6} maxLength={2000} value={f.mensagem} onChange={(e) => setF({ ...f, mensagem: e.target.value })} /></div>
          <Button type="submit" size="lg">Enviar por e-mail</Button>
          <p className="text-xs text-muted-foreground">Ao enviar, seu aplicativo de e-mail será aberto com a mensagem pronta. Os dados são usados apenas para responder ao seu contato — veja a Política de Privacidade.</p>
        </form>
      </div>
    </>
  );
}

function Item({ icon: Icon, label, children }: { icon: typeof Mail; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-1 h-5 w-5 text-gold" />
      <div><p className="eyebrow">{label}</p><p className="mt-1">{children}</p></div>
    </div>
  );
}
