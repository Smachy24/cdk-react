// import React from 'react';
import Menu from '../components/Menu';

function AvisPage() {
  return (
    <div className="bg-black text-white min-h-screen">
     <Menu/>

      <section className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Laissez votre avis</h2>

        <div className="flex gap-8 mb-4">
          {/* Carte 1 */}
          <div className="avis-card bg-gray-900 rounded overflow-hidden w-64">
            <div className="avis-body p-4">
              <textarea
                className="avis-comment w-full h-20 mb-2 p-2 border border-gray-600 rounded"
                placeholder="Ajouter un commentaire..."
              ></textarea>
              <div className="avis-rating flex gap-2">
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
              </div>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="avis-card bg-gray-900 rounded overflow-hidden w-64">
            <div className="avis-body p-4">
              <textarea
                className="avis-comment w-full h-20 mb-2 p-2 border border-gray-600 rounded"
                placeholder="Ajouter un commentaire..."
              ></textarea>
              <div className="avis-rating flex gap-2">
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
              </div>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="avis-card bg-gray-900 rounded overflow-hidden w-64">
            <div className="avis-body p-4">
              <textarea
                className="avis-comment w-full h-20 mb-2 p-2 border border-gray-600 rounded"
                placeholder="Ajouter un commentaire..."
              ></textarea>
              <div className="avis-rating flex gap-2">
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
                <span className="rating-star text-2xl cursor-pointer">&#9733;</span>
              </div>
            </div>
          </div>
        </div>

        <button className="ajouter-button bg-red-600 text-white px-4 py-2 rounded">
          Ajouter
        </button>
      </section>
    </div>
  );
}

export default AvisPage;
