import { Calendar, Star, MapPin, Bell, ShoppingBag, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agendamento Rápido",
      description: "Marque seu horário em poucos toques, direto no app, sem complicação.",
    },
    {
      icon: Star,
      title: "Perfis Verificados",
      description: "Veja fotos, avaliações reais e portfólio dos profissionais antes de agendar.",
    },
    {
      icon: ShoppingBag,
      title: "Catálogo Completo",
      description: "Navegue por todos os serviços disponíveis com preços transparentes.",
    },
    {
      icon: Clock,
      title: "Gestão de Horários",
      description: "Profissionais gerenciam sua agenda de forma simples e organizada.",
    },
    {
      icon: Bell,
      title: "Lembretes Inteligentes",
      description: "Receba notificações automáticas antes dos seus compromissos.",
    },
    {
      icon: MapPin,
      title: "Busca por Localização",
      description: "Encontre profissionais próximos a você com mapa integrado.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-brand-cream to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Funcionalidades que{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              fazem a diferença
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tudo o que você precisa para agendar ou gerenciar serviços de beleza em um só lugar
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_-6px_hsl(var(--brand-rose)/0.2)]"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
