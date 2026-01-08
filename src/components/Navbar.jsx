"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-vibe-black/80 backdrop-blur-md border-b border-vibe-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="text-2xl font-black text-vibe-white tracking-tighter">
          NEXT<span className="text-vibe-orange">VIBE</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-vibe-gray hover:text-vibe-orange transition-colors">Accueil</Link>
          <Link href="/services" className="text-vibe-gray hover:text-vibe-orange transition-colors">Services</Link>
          <Link href="/a-propos" className="text-vibe-gray hover:text-vibe-orange transition-colors">À Propos</Link>
          <Link href="/contact" className="bg-vibe-orange text-vibe-white px-6 py-2 rounded-full font-bold hover:bg-vibe-orange-hover transition-all">
            Contact
          </Link>
        </div>

        <button 
          className="md:hidden text-vibe-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-vibe-card border-b border-vibe-border p-6 flex flex-col gap-4 animate-fade-in">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-vibe-white font-bold py-2 border-b border-vibe-border/50">Accueil</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-vibe-white font-bold py-2 border-b border-vibe-border/50">Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-vibe-white font-bold py-2 border-b border-vibe-border/50">À Propos</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-vibe-orange font-bold py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}