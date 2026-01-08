export default function ServicesPage() {
  const services = [
    {
      title: "Social Media Strategy",
      description: "Dominez Instagram, TikTok et LinkedIn avec une stratégie de contenu virale et une gestion de communauté experte.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Publicité Ads (ROI)",
      description: "Campagnes Meta et Google Ads ultra-ciblées conçues pour maximiser vos conversions et votre rentabilité.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Brand Identity",
      description: "Création d'univers graphiques uniques et mémorables qui imposent votre marque dans l'esprit de vos clients.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Content Creation",
      description: "Production de vidéos Reels et de visuels haute performance adaptés aux dernières tendances algorithmiques.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "SEO & Data",
      description: "Optimisation de votre visibilité organique et analyse précise des KPIs pour un pilotage basé sur les résultats.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Audit Stratégique",
      description: "Analyse profonde de votre écosystème digital actuel pour identifier vos leviers de croissance inexploités.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-vibe-black  pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-vibe-orange font-bold uppercase tracking-widest text-sm mb-4">Notre Expertise</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-vibe-white leading-tight">
            Des services conçus pour <br />
            <span className="text-vibe-orange">propulser votre vibe.</span>
          </h1>
          <p className="text-vibe-gray text-lg mt-6 max-w-xl">
            Nous ne nous contentons pas de gérer vos réseaux, nous créons des leaders dindustrie grâce à des stratégies marketing innovantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-vibe-card border border-vibe-border p-10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-vibe-orange/40 hover:shadow-2xl hover:shadow-vibe-orange/10"
            >

              <div className="absolute -inset-px bg-linear-to-br from-vibe-orange/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

              <div className="relative z-10 w-16 h-16 mb-8 rounded-2xl bg-vibe-black border border-vibe-border flex items-center justify-center text-vibe-white group-hover:text-vibe-orange group-hover:border-vibe-orange group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="relative z-10 text-2xl font-bold text-vibe-white mb-4">
                {service.title}
              </h3>
              <p className="relative z-10 text-vibe-gray leading-relaxed group-hover:text-vibe-white/90 transition-colors">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-vibe-orange group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}