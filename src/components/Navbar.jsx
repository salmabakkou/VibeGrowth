import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-vibe-black border-b border-vibe-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-vibe-white flex items-center gap-2">
              <span className="text-vibe-orange">Next</span>Vibe
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-vibe-white hover:text-vibe-orange transition-colors px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="/services" className="text-vibe-white hover:text-vibe-orange transition-colors px-3 py-2 text-sm font-medium">Services</Link>
              <Link href="/about" className="text-vibe-white hover:text-vibe-orange transition-colors px-3 py-2 text-sm font-medium">À propos</Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Link href="/contact" className="bg-vibe-orange hover:bg-vibe-orange-hover text-vibe-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
              Contactez-nous
            </Link>
          </div>

          <div className="md:hidden flex items-center">
             <Link href="/contact" className="bg-vibe-orange text-vibe-white px-4 py-2 rounded-lg text-xs font-bold">
              Contact
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;