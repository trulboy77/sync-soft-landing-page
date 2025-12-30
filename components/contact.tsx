import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "@/hooks/use-translation"

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto border-t border-foreground/10 pt-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-bold uppercase tracking-widest opacity-60">{t.contact.tag}</span>
                <h2 className="text-5xl md:text-6xl font-bold">{t.contact.title}</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-sm">{t.contact.desc}</p>
              <Button
                size="lg"
                className="rounded-full h-14 px-10 cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              >
                {t.nav.touch.toUpperCase()}
              </Button>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">{t.services.title}</h3>
                <p className="text-muted-foreground">{t.services.desc}</p>
              </div>

              <form className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                      {t.contact.form.first}
                    </label>
                    <Input
                      className="bg-transparent border-0 border-b border-foreground/20 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0 text-lg"
                      placeholder="Farruh"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                      {t.contact.form.last}
                    </label>
                    <Input
                      className="bg-transparent border-0 border-b border-foreground/20 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0 text-lg"
                      placeholder="Rahimov"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                    {t.contact.form.email}
                  </label>
                  <Input
                    type="email"
                    className="bg-transparent border-0 border-b border-foreground/20 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0 text-lg"
                    placeholder="sizning@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                    {t.contact.form.msg}
                  </label>
                  <Textarea
                    className="bg-transparent border-0 border-b border-foreground/20 rounded-none focus-visible:ring-0 focus-visible:border-primary px-0 text-lg resize-none"
                    placeholder="Tell us about your project..."
                    rows={4}
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <Button
                    size="lg"
                    className="rounded-full px-12 uppercase tracking-widest font-bold cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                  >
                    {t.contact.form.submit}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
