import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY } from "@/lib/company";

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre a empresa" },
  { to: "/atividades", label: "Nossas atividades" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-2xl text-primary">{COMPANY.shortName}</span>
          <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            Produtos naturais · Cosméticos
          </span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" aria-label="Abrir menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-6 py-4 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
