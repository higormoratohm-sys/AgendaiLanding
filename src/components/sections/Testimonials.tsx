import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Cliente",
      content: "Nunca foi tão fácil marcar meu cabelo! Encontro profissionais ótimos perto de casa e ainda vejo as avaliações antes de agendar.",
      rating: 5,
      initials: "MS",
    },
    {
      name: "Carlos Mendes",
      role: "Barbeiro",
      content: "Minha agenda ficou muito mais organizada e consegui aumentar minha clientela em 40%. O AgendAí mudou meu negócio!",
      rating: 5,
      initials: "CM",
    },
    {
      name: "Ana Paula",
      role: "Manicure",
      content: "Os lembretes automáticos reduziram muito as faltas. Agora posso gerenciar tudo pelo celular de forma super prática.",
      rating: 5,
      initials: "AP",
    },
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            O que dizem nossos{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              usuários
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Histórias reais de quem já está usando o AgendAí
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="mb-6 text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
