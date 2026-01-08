"use client";
import React, { useState } from 'react';

export default function Contact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  const handleClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let tempErrors = {};

    if (!nom) {
      tempErrors.nom = "Le nom est obligatoire.";
    }

    if (!email) {
      tempErrors.email = "L'email est obligatoire.";
    } else if (!emailRegex.test(email)) {
      tempErrors.email = "Format d'email invalide.";
    }

    if (!message) {
      tempErrors.message = "Le message ne peut pas être vide.";
    } else if (message.length < 10) {
      tempErrors.message = "Minimum 10 caractères.";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      setIsValid(true);
    }
  };

  return (
    <main className="min-h-screen bg-vibe-black pt-32 pb-20 px-6">
      <div className="max-w-xl mx-auto">
        
        {isValid ? (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-green-500 rounded-full bg-green-500/10 backdrop-blur-sm animate-pulse"></div>
              <svg className="w-12 h-12 text-green-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-vibe-white italic uppercase">Message envoyé</h2>
            <button onClick={() => setIsValid(false)} className="mt-4 text-vibe-orange font-bold hover:underline">Recommencer</button>
          </div>
        ) : (
          <form className="bg-vibe-card border border-vibe-border p-10 rounded-[3rem] space-y-6">
            <h1 className="text-3xl font-black text-vibe-white italic mb-8">CONTACT</h1>

            <div className="flex flex-col">
              <span className="text-vibe-white font-bold mb-2 ml-2">Nom</span>
              <input 
                type="text"
                className={`w-full bg-vibe-black border ${errors.nom ? 'border-red-500' : 'border-vibe-border'} rounded-2xl p-4 text-vibe-white outline-none focus:border-vibe-orange transition-all`}
                onChange={(e) => setNom(e.target.value)}
              />
              {errors.nom && <p className="text-red-500 text-xs mt-2 ml-2 italic font-bold">{errors.nom}</p>}
            </div>

            <div className="flex flex-col">
              <span className="text-vibe-white font-bold mb-2 ml-2">Email</span>
              <input 
                type="email"
                className={`w-full bg-vibe-black border ${errors.email ? 'border-red-500' : 'border-vibe-border'} rounded-2xl p-4 text-vibe-white outline-none focus:border-vibe-orange transition-all`}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-xs mt-2 ml-2 italic font-bold">{errors.email}</p>}
            </div>

            <div className="flex flex-col">
              <span className="text-vibe-white font-bold mb-2 ml-2">Message</span>
              <textarea
                rows="4"
                className={`w-full bg-vibe-black border ${errors.message ? 'border-red-500' : 'border-vibe-border'} rounded-2xl p-4 text-vibe-white outline-none focus:border-vibe-orange transition-all`}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-2 ml-2 italic font-bold">{errors.message}</p>}
            </div>

            <button 
              type="button" 
              onClick={handleClick}
              className="w-full bg-vibe-orange py-4 rounded-2xl font-black text-vibe-white hover:bg-vibe-orange-hover transition-all"
            >
              ENVOYER
            </button>
          </form>
        )}
      </div>
    </main>
  );
}