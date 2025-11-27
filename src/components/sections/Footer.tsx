import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "Sobre Nós", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Imprensa", href: "#" },
    ],
    support: [
      { label: "Central de Ajuda", href: "#" },
      { label: "Contato", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Suporte Técnico", href: "#" },
    ],
    legal: [
      { label: "Termos de Uso", href: "#" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Licenças", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AgendAí
            </h3>
            <p className="mb-6 text-muted-foreground max-w-sm">
              Conectando profissionais de estética a clientes de forma simples e rápida. 
              Seu salão na palma da mão.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Suporte</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AgendAí. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:contato@agendai.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" />
              contato@agendai.com
            </a>
            <a href="tel:+5511999999999" className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" />
              (11) 99999-9999
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
