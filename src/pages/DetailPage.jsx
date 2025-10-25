// src/pages/DetailPage.jsx
import { ArrowLeft, Clock, ChefHat, Heart } from 'lucide-react';

export default function DetailPage({ recipe, onClose, isFavorite, toggleFavorite }) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-white z-[100] animate-fade-in overflow-y-auto">
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <button onClick={onClose} className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 mb-6">
          <ArrowLeft size={20} />
          <span>Kembali ke Resep</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Gambar dan Info Singkat */}
          <div>
            <div className="relative mb-4">
              <img src={recipe.image_url} alt={recipe.name} className="w-full h-80 object-cover rounded-2xl shadow-lg" />
              <button
                onClick={() => toggleFavorite(recipe.id)}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full z-20 hover:scale-110 transition-transform"
              >
                <Heart className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-slate-500'}`} />
              </button>
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-4">{recipe.name}</h1>
            <div className="flex space-x-4 text-slate-600">
              <div className="flex items-center space-x-2"><Clock /> <span>{recipe.ingredients.length} bahan</span></div>
              <div className="flex items-center space-x-2"><ChefHat /> <span>{recipe.steps.length} langkah</span></div>
            </div>
          </div>

          {/* Bahan dan Langkah-langkah */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-3 border-b-2 pb-2">Bahan-bahan</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                {recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-700 mb-3 border-b-2 pb-2">Langkah-langkah</h2>
              <ol className="list-decimal list-inside space-y-3 text-slate-600">
                {recipe.steps.map((item, index) => <li key={index}>{item}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}