import { Download, UserPlus, Search, Calendar, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const HowItWorks = () => {
  const clientSteps = [
    {
      icon: Download,
      title: "Baixe o App",
      description: "Disponível para iOS e Android",
    },
    {
      icon: UserPlus,
      title: "Crie sua Conta",
      description: "Cadastro rápido e seguro",
    },
    {
      icon: Search,
      title: "Encontre Profissionais",
      description: "Busque por serviço ou localização",
    },
    {
      icon: Calendar,
      title: "Agende seu Horário",
      description: "Escolha data e hora disponíveis",
    },
  ];

  const professionalSteps = [
    {
      icon: UserPlus,
      title: "Crie seu Perfil",
      description: "Adicione fotos e informações",
    },
    {
      icon: Search,
      title: "Configure Serviços",
      description: "Defina preços e duração",
    },
    {
      icon: Calendar,
      title: "Gerencie sua Agenda",
      description: "Controle horários disponíveis",
    },
    {
      icon: CheckCircle,
      title: "Receba Agendamentos",
      description: "Notificações em tempo real",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-background via-brand-cream to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Como{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              funciona?
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Simples, rápido e intuitivo para todos
          </p>
        </div>

        <Tabs defaultValue="client" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="client" className="text-base">Sou Cliente</TabsTrigger>
            <TabsTrigger value="professional" className="text-base">Sou Profissional</TabsTrigger>
          </TabsList>

          <TabsContent value="client">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {clientSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg"
                >
                  <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="professional">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {professionalSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg"
                >
                  <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                    {index + 1}
                  </div>
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                    <step.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
