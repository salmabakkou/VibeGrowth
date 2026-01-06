/** @type {import('tailwindcss').Config} */
module.exports = {
  // Correction des chemins pour pointer vers le dossier 'src'
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vibe-black': '#0F0F0F',    // Fond principal
        'vibe-card': '#1A1A1A',     // Surface/Cards
        'vibe-border': '#2D2D2D',   // Bordures
        'vibe-white': '#F0F0F0',    // Texte principal
        'vibe-gray': '#B0B0B0',     // Texte secondaire
        'vibe-orange': {
          DEFAULT: '#FF6B35',       // Orange principal (CTA)
          hover: '#FFA726',         // Orange doré (Survols)
          dark: '#E65100',          // Orange foncé
        }
      },
    },
  },
  plugins: [],
}