// src/pages/ResepPage.jsx
import { useState, useEffect } from 'react';
import RecipeGrid from '../components/makanan/RecipeGrid';
import { Search } from 'lucide-react';

export default function ResepPage({ allRecipes, favorites, toggleFavorite, onSelectRecipe }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter resep berdasarkan pencarian
  useEffect(() => {
    const filtered = allRecipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filtered);
    setCurrentPage(1); // Reset ke halaman 1 setiap kali search
  }, [searchQuery, allRecipes]);

  // Logika untuk pagination
  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRecipes = filteredRecipes.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pb-20 md:pb-8">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Judul dan Search Bar */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Jelajahi Semua Resep</h1>
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Cari resep favoritmu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Grid Resep */}
        <RecipeGrid recipes={currentRecipes} favorites={favorites} toggleFavorite={toggleFavorite} onSelectRecipe={onSelectRecipe} />

        {/* Tombol Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={() => setCurrentPage(p => p - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border rounded-md disabled:opacity-50"
            >
              Sebelumnya
            </button>
            <span className="text-slate-600 font-medium">
              Halaman {currentPage} dari {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => p + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border rounded-md disabled:opacity-50"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </main>
    </div>
  );
}