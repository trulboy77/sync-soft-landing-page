export function Footer() {
  return (
    <footer className="py-20 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-6">
            <div className="text-4xl font-bold tracking-tighter text-primary">
              SYNC<span className="text-foreground">SOFT</span>
            </div>
            <p className="text-muted-foreground max-w-xs">Scaling digital potential through global synchronization.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm font-medium">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-50">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#approach" className="hover:text-primary transition-colors">
                    Approach
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-50">Discovery</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Clutch
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-50">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">
          <div>© {new Date().getFullYear()} SYNCSOFT | CODE HERO. ALL RIGHTS RESERVED.</div>
          <div className="text-center md:text-right">codeherosllc@gmail.com   +998 97-376-65-56</div>
        </div>

        {/* Large Brand Background Element */}
        <div className="mt-20 overflow-hidden select-none pointer-events-none">
          <div className="text-[15vw] font-bold tracking-tighter text-primary/5 leading-none whitespace-nowrap">
            SYNC&nbsp;SOFT
          </div>
        </div>
      </div>
    </footer>
  )
}
