"use client"
import { Button } from "@/components/ui/button"
import { Globe, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/hooks/use-translation"
import type { Language } from "@/lib/translations"

const languages: { code: Language; name: string; dir?: string }[] = [
  { code: "en", name: "English" },
  { code: "uz", name: "O'zbek" },
  { code: "ru", name: "Русский" },
  { code: "tr", name: "Türkçe" },
  { code: "ar", name: "العربية", dir: "rtl" },
]

export function Navbar() {
  const { lang: currentLangCode, setLang, t } = useTranslation()
  const currentLang = languages.find((l) => l.code === currentLangCode) || languages[0]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter text-primary">
          SYNC<span className="text-foreground">SOFT</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#services" className="hover:text-primary transition-colors cursor-pointer">
            {t.nav.services}
          </a>
          <a href="#approach" className="hover:text-primary transition-colors cursor-pointer">
            {t.nav.approach}
          </a>
          <a href="#contact" className="hover:text-primary transition-colors cursor-pointer">
            {t.nav.contact}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              >
                <Globe className="h-4 w-4" />
                <span>{currentLang.code.toUpperCase()}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => {
                    setLang(lang.code)
                    document.documentElement.dir = lang.dir || "ltr"
                    document.documentElement.lang = lang.code
                  }}
                  className="cursor-pointer"
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="hidden md:inline-flex rounded-full px-8 cursor-pointer hover:scale-105 active:scale-95 transition-transform">
            {t.nav.touch}
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
