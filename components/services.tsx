import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Code, Zap, Layout } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function Services() {
  const { t } = useTranslation()

  const serviceData = [
    { ...t.services.s1, number: "01", icon: Users },
    { ...t.services.s2, number: "02", icon: Zap },
    { ...t.services.s3, number: "03", icon: Code },
    { ...t.services.s4, number: "04", icon: Layout },
  ]

  return (
    <section id="services" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{t.services.tag}</h2>
            <p className="text-4xl md:text-5xl font-bold leading-tight">{t.services.title}</p>
          </div>
          <p className="text-muted-foreground max-w-sm mb-2">{t.services.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, i) => (
            <Card
              key={i}
              className="group border-none shadow-none bg-secondary/30 hover:bg-primary hover:text-white transition-all duration-500 rounded-2xl cursor-pointer hover:-translate-y-2"
            >
              <CardHeader className="p-8">
                <div className="text-sm font-mono mb-4 text-muted-foreground group-hover:text-white/60">
                  {service.number}
                </div>
                <service.icon className="h-10 w-10 mb-6 text-primary group-hover:text-white transition-colors" />
                <CardTitle className="text-2xl mb-4 leading-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-muted-foreground group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
