import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/company";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{COMPANY.shortName}</p>
          <span className="gold-rule my-4" />
          <p className="text-sm opacity-90">{COMPANY.legalName}</p>
          <p className="text-sm opacity-90">CNPJ: {COMPANY.cnpj}</p>
        </div>
        <div className="text-sm space-y-1 opacity-90">
          <p className="eyebrow mb-3">Contato</p>
          <p>E-mail: <a href={`mailto:${COMPANY.email}`} className="underline-offset-4 hover:underline">{COMPANY.email}</a></p>
          <p>Telefone: {COMPANY.phone}</p>
          <p>{COMPANY.city}.</p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3">Navegação</p>
          <ul className="space-y-1 opacity-90">
            <li><Link to="/" className="hover:underline">Página inicial</Link></li>
            <li><Link to="/sobre" className="hover:underline">Sobre a empresa</Link></li>
            <li><Link to="/atividades" className="hover:underline">Nossas atividades</Link></li>
            <li><Link to="/contato" className="hover:underline">Contato</Link></li>
            <li><Link to="/privacidade" className="hover:underline">Política de Privacidade</Link></li>
            <li><Link to="/termos" className="hover:underline">Termos de Uso</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {COMPANY.legalName}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
