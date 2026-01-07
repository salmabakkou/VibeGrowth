import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-vibe-black text-vibe-white overflow-x-hidden">
      
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-vibe-orange/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-vibe-orange/5 blur-[100px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 rounded-full border border-vibe-border bg-vibe-card/50 backdrop-blur-sm mb-8">
            <span className="text-vibe-orange text-xs font-bold uppercase tracking-[0.3em]">
              L&apos;agence Marketing Next-Gen
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-[1.1] mb-8 tracking-tighter">
            Propulsez votre <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-vibe-orange to-vibe-orange-hover">
              Vibe Digitale.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-vibe-gray text-lg md:text-xl mb-12 leading-relaxed">
            Nous transformons votre présence sociale en une machine à croissance grâce à des stratégies basées sur la data et la créativité pure.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-vibe-orange hover:bg-vibe-orange-hover text-vibe-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-vibe-orange/20 text-center">
              Démarrer un projet
            </Link>
            <Link href="/services" className="border border-vibe-border hover:border-vibe-orange text-vibe-white px-10 py-5 rounded-full font-bold text-lg transition-all bg-vibe-card/30 backdrop-blur-sm text-center">
              Nos expertises
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-vibe-card/30 border-y border-vibe-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-vibe-orange font-bold uppercase tracking-widest text-sm mb-4">Expertises</h2>
              <h3 className="text-4xl md:text-5xl font-black">Ce que nous faisons de mieux.</h3>
            </div>
            <Link href="/services" className="text-vibe-orange hover:underline font-bold flex items-center gap-2">
              Voir tous les services 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-10 rounded-[2.5rem] bg-vibe-card border border-vibe-border hover:border-vibe-orange/40 transition-all duration-500">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-vibe-black border border-vibe-border flex items-center justify-center text-vibe-white group-hover:text-vibe-orange group-hover:border-vibe-orange transition-all duration-300">
                <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4">Social Ads</h4>
              <p className="text-vibe-gray leading-relaxed">Campagnes ultra-ciblées sur Facebook et TikTok avec un ROI optimisé.</p>
            </div>

            <div className="group p-10 rounded-[2.5rem] bg-vibe-card border border-vibe-border hover:border-vibe-orange/40 transition-all duration-500">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-vibe-black border border-vibe-border flex items-center justify-center text-vibe-white group-hover:text-vibe-orange group-hover:border-vibe-orange transition-all duration-300">
                <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4">Content Strategy</h4>
              <p className="text-vibe-gray leading-relaxed">Création de contenus viraux qui captivent votre audience en quelques secondes.</p>
            </div>

            <div className="group p-10 rounded-[2.5rem] bg-vibe-card border border-vibe-border hover:border-vibe-orange/40 transition-all duration-500">
              <div className="w-16 h-16 mb-8 rounded-2xl bg-vibe-black border border-vibe-border flex items-center justify-center text-vibe-white group-hover:text-vibe-orange group-hover:border-vibe-orange transition-all duration-300">
                <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4">Brand Vision</h4>
              <p className="text-vibe-gray leading-relaxed">Identité visuelle et positionnement pour devenir le leader de votre niche.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-vibe-card border border-vibe-border rounded-[2.5rem] py-10 px-8 md:px-16 relative overflow-hidden group hover:border-vibe-orange/30 transition-colors duration-500">
            
            <div className="absolute inset-0 bg-vibe-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              {[
                { val: "150+", lab: "Projets" },
                { val: "98%", lab: "ROI" },
                { val: "5 ans", lab: "Expertise" },
                { val: "12", lab: "Awards" }
              ].map((stat, i) => (
                <div key={i} className="text-center relative">
                  {i !== 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-vibe-border"></div>
                  )}
                  
                  <div className="text-3xl md:text-4xl font-black text-vibe-orange mb-1">
                    {stat.val}
                  </div>
                  <div className="text-vibe-gray font-bold uppercase text-[9px] tracking-[0.2em]">
                    {stat.lab}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center border border-vibe-border rounded-[3rem] p-16 bg-linear-to-b from-vibe-card to-vibe-black">
          <h2 className="text-4xl font-bold mb-6">Prêt à changer de dimension ?</h2>
          <p className="text-vibe-gray mb-10 text-lg">Contactez nos experts pour un audit gratuit de votre stratégie.</p>
          <Link href="/contact" className="inline-block bg-vibe-white text-vibe-black hover:bg-vibe-orange hover:text-vibe-white px-12 py-4 rounded-full font-black transition-all transform hover:-translate-y-1">
            Travaillons ensemble
          </Link>
        </div>
      </section>

    </main>
  );
}