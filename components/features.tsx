import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

export function Features() {
  const { t } = useTranslation()

  return (
    <section id="approach" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl group shadow-2xl">
            <Image
              src="/minimalist-professional-office.jpg"
              alt="Professional team"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-primary font-bold uppercase tracking-wider">{t.approach.tag}</span>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">{t.approach.title}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">{t.approach.desc}</p>
            </div>

            <div className="grid gap-8">
              <div className="flex gap-6 items-start group">
                <div className="h-12 w-12 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{t.approach.step1.title}</h3>
                  <p className="text-muted-foreground">{t.approach.step1.desc}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="h-12 w-12 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{t.approach.step2.title}</h3>
                  <p className="text-muted-foreground">{t.approach.step2.desc}</p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="btn-modern rounded-full h-14 px-8 text-lg border-2 bg-transparent">
              {t.approach.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
