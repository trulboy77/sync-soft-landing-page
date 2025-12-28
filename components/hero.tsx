import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { BrainToProcessor } from "./brain-to-processor"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20">
              {t.hero.tag}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-balance leading-[1.1] text-foreground">
              {t.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
              {t.hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Button
                size="lg"
                className="btn-modern rounded-full h-16 px-12 text-lg group bg-primary text-primary-foreground font-semibold cursor-pointer"
              >
                {t.hero.start}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-modern rounded-full h-16 px-12 text-lg bg-background/50 backdrop-blur-sm border-2 font-semibold cursor-pointer"
              >
                {t.hero.cases}
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <BrainToProcessor />
          </div>
        </div>
      </div>
    </section>
  )
}
