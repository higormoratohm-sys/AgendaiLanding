import { Users, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Benefits = () => {
  const clientBenefits = [
    "Agende em segundos, sem ligações",
    "Compare serviços e preços facilmente",
    "Veja avaliações de outros clientes",
    "Receba lembretes automáticos",
    "Histórico completo dos seus agendamentos",
  ];

  const professionalBenefits = [
    "Maior visibilidade para seu trabalho",
    "Agenda sempre organizada",
    "Redução de faltas e cancelamentos",
    "Gestão financeira facilitada",
    "Divulgue serviços e promoções",
    "Conquiste novos clientes",
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Benefícios para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              todos
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Seja você cliente ou profissional, o AgendAí transforma sua experiência
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-2 border-primary/20 transition-all hover:border-primary/40 hover:shadow-[0_8px_30px_-6px_hsl(var(--brand-rose)/0.2)]">
            <CardHeader>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Para Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {clientBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 transition-all hover:border-secondary/40 hover:shadow-[0_8px_30px_-6px_hsl(var(--brand-terracotta)/0.2)]">
            <CardHeader>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                <Briefcase className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Para Profissionais</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {professionalBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-secondary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
