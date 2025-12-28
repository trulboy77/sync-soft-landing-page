import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { Code2, BrainCircuit, Sparkles } from "lucide-react"

export function Careers() {
  const { t } = useTranslation()

  return (
    <section id="careers" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative bg-background/80 backdrop-blur-2xl p-8 md:p-16 rounded-[3rem] border border-primary/10 shadow-3xl flex flex-col items-center text-center space-y-10">
            <div className="flex gap-4 items-center justify-center">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary animate-bounce-slow">
                <Code2 size={40} />
              </div>
              <Sparkles className="text-primary/40 animate-pulse" size={24} />
              <div className="p-4 bg-primary/10 rounded-2xl text-primary animate-bounce-slow [animation-delay:0.2s]">
                <BrainCircuit size={40} />
              </div>
            </div>

            <div className="space-y-6">
              <span className="bg-primary/10 text-primary px-6 py-2 rounded-full font-bold tracking-widest uppercase text-xs">
                {t.careers.tag}
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-balance">{t.careers.title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.careers.desc}</p>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="btn-modern rounded-full h-16 px-16 text-xl font-bold bg-primary hover:bg-primary/90"
              >
                {t.careers.apply}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
