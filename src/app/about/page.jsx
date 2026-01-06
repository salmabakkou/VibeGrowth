export default function AboutPage() {
  return (
    <main className="min-h-screen bg-vibe-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-vibe-orange font-bold uppercase tracking-[0.3em] text-xs mb-6">Discovery</h2>
            <h1 className="text-5xl md:text-7xl font-black text-vibe-white leading-[1.1] mb-8">
              L&apos;agence qui <br />
              <span className="text-vibe-orange">réinvente</span> le <br />
              marketing.
            </h1>
            <p className="text-vibe-gray text-xl leading-relaxed max-w-lg">
              Chez NextVibe, nous ne suivons pas les tendances, nous les créons. Notre approche fusionne lart de la narration avec la précision des données.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute inset-0 border border-vibe-orange/10 rounded-full animate-ping opacity-20"></div>
              </div>
              
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-vibe-orange rounded-full shadow-[0_0_20px_#FF6B35]"></div>
                <div className="absolute inset-8 border-2 border-dashed border-vibe-orange/20 rounded-full"></div>
              </div>

              <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-vibe-card border border-vibe-border rounded-full flex items-center justify-center shadow-2xl">
                <svg className="w-20 h-20 text-vibe-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                
                <div className="absolute -top-2 -right-2 bg-vibe-orange text-vibe-white px-4 py-2 rounded-xl font-black text-xs rotate-12 shadow-lg">
                  NEXT GEN
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-32">
          {[
            { val: "150+", lab: "Projets Terminés" },
            { val: "98%", lab: "Clients Satisfaits" },
            { val: "5", lab: "Années d'Expérience" },
            { val: "12", lab: "Awards Digitaux" }
          ].map((stat, i) => (
            <div key={i} className="group bg-vibe-card border border-vibe-border p-12 rounded-[2.5rem] text-center hover:border-vibe-orange/50 transition-all duration-500">
              <div className="text-5xl md:text-6xl font-black text-vibe-white mb-3 group-hover:text-vibe-orange transition-colors">
                {stat.val}
              </div>
              <div className="text-vibe-gray font-bold uppercase tracking-widest text-[10px]">{stat.lab}</div>
            </div>
          ))}
        </div>

        <div className="bg-vibe-card border border-vibe-border rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-vibe-orange/5 blur-[100px] rounded-full"></div>
           <h2 className="text-3xl font-bold text-vibe-white mb-16 text-center">Pourquoi NextVibe ?</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="text-vibe-orange text-2xl font-bold">01.</div>
                <h4 className="text-vibe-white text-xl font-bold">Innovation</h4>
                <p className="text-vibe-gray text-sm">Utilisation des derniers algorithmes IA pour optimiser vos campagnes.</p>
              </div>
              <div className="space-y-4 border-l border-vibe-border pl-8">
                <div className="text-vibe-orange text-2xl font-bold">02.</div>
                <h4 className="text-vibe-white text-xl font-bold">Performance</h4>
                <p className="text-vibe-gray text-sm">Chaque action est mesurée pour garantir un ROI concret et immédiat.</p>
              </div>
              <div className="space-y-4 border-l border-vibe-border pl-8">
                <div className="text-vibe-orange text-2xl font-bold">03.</div>
                <h4 className="text-vibe-white text-xl font-bold">Sur-mesure</h4>
                <p className="text-vibe-gray text-sm">Pas de pack standard. Une stratégie unique pour chaque client.</p>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}