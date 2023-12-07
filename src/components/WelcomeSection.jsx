//import React from 'react';

function WelcomeSection()  {
  return (
    <section className="bienvenue text-center py-16 px-4 md:px-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('bienvenue-bg.jpg')" }}>
      <h1 className="text-3xl md:text-5xl mb-8">Bienvenue sur Netflix</h1>
      <p className="text-lg md:text-xl mb-12">Films, émissions de télévision et bien plus encore en illimité. Regardez n'importe où. Annulez à tout moment.</p>
      <button className="bg-red-800 text-white px-8 py-4 text-lg">Connexion</button>
    </section>
  );
};

export default WelcomeSection;
