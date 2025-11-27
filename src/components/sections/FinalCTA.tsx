import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="container relative mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Comece a agendar hoje mesmo com o AgendAí!
          </h2>
          
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            Junte-se a milhares de pessoas que já estão transformando a forma de 
            agendar e gerenciar serviços de beleza
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="xl"
              variant="secondary"
              className="group bg-white text-primary hover:bg-white/90"
            >
              <Download className="mr-2 h-5 w-5" />
              Baixar Agora
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              Cadastrar como Profissional
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Gratuito</div>
            </div>
            <div className="h-8 w-px bg-white/30" />
            <div className="text-center">
              <div className="text-2xl font-bold">iOS & Android</div>
              <div className="text-sm">Disponível</div>
            </div>
            <div className="h-8 w-px bg-white/30" />
            <div className="text-center">
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-sm">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
