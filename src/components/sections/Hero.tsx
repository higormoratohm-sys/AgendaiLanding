import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";
export const Hero = () => {
  return <section className="relative overflow-hidden bg-gradient-to-br from-background via-brand-cream to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(var(--brand-rose)/0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(var(--brand-terracotta)/0.1),_transparent_50%)]" />
      
      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in-up space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Seu Salão na Palma da Mão</span>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              Agende serviços de{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                beleza
              </span>{" "}
              com praticidade
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Conecte-se com os melhores profissionais de estética perto de você. 
              Agendamento rápido, avaliações reais e gestão completa para profissionais.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="xl" variant="hero" className="group">
                <Download className="mr-2 h-5 w-5" />
                Baixar App
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button size="xl" variant="outline">
                Sou Profissional
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5k+</div>
                <div className="text-sm text-muted-foreground">Profissionais</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Agendamentos</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in lg:animate-scale-in">
            <div className="absolute -inset-4 animate-float rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
            <img alt="AgendAí App Interface" className="relative z-10 w-full drop-shadow-2xl" src="/app/61affa57-c591-4b9d-9e02-67a550c2af97.png" />
          </div>
        </div>
      </div>
    </section>;
};