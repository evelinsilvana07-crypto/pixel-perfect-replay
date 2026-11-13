export const COMPANY = {
  legalName: "68.324.469 EVELIN SILVANA MENDES FEITOSA",
  shortName: "Evelin Silvana",
  cnpj: "68.324.469/0001-10",
  nature: "Microempreendedor Individual (MEI)",
  status: "Ativa (conforme CCMEI)",
  openedAt: "02/08/2026",
  email: "evelinsilvanamendes@gmail.com",
  phone: "(21) 97744-3724",
  whatsapp: "5521977443724",
  city: "Rio de Janeiro — RJ — Brasil",
  domain: "evelinsilvana.site.je",
  channels: "Internet e televenda",
};
export const whatsappLink = (msg = "Olá! Gostaria de mais informações.") =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;
