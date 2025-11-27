import { CheckCircle2 } from "lucide-react";

export const About = () => {
  const highlights = [
    "Agenda digital inteligente",
    "Processo simples e intuitivo",
    "Conexão direta entre clientes e profissionais",
    "Sem necessidade de ligações ou mensagens",
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            O que é o{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AgendAí?
            </span>
          </h2>
          
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            AgendAí é a plataforma que conecta você aos melhores profissionais de estética 
            da sua região. Com apenas alguns toques, você agenda seu horário, compara preços, 
            vê avaliações reais e ainda recebe lembretes automáticos.
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-left transition-all hover:shadow-lg"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                <span className="font-medium text-card-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
