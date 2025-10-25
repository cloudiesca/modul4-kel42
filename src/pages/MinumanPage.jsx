// src/pages/MinumanPage.jsx
import { useState, useEffect } from 'react';
import RecipeGrid from '../components/makanan/RecipeGrid';
import { Search } from 'lucide-react';

export default function MinumanPage({ allRecipes, favorites, toggleFavorite, onSelectRecipe }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Filter hanya resep minuman
    const drinkRecipes = allRecipes.filter(recipe => recipe.category === 'minuman');

    // Filter resep berdasarkan pencarian
    useEffect(() => {
        const filtered = drinkRecipes.filter(recipe =>
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
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pb-20 md:pb-8">
            <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
                {/* Judul dan Search Bar */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                        Resep Minuman Nusantara
                    </h1>
                    <div className="relative max-w-lg mx-auto">
                        <input
                            type="text"
                            placeholder="Cari resep minuman..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-3 pr-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-slate-600 mt-4">
                        Menampilkan {filteredRecipes.length} resep minuman
                    </p>
                </div>

                {/* Grid Resep */}
                {currentRecipes.length > 0 ? (
                    <RecipeGrid
                        recipes={currentRecipes}
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                        onSelectRecipe={onSelectRecipe}
                    />
                ) : (
                    <div className="text-center py-12">
                        <p className="text-slate-500 text-lg">
                            Tidak ada resep minuman yang sesuai dengan pencarian Anda
                        </p>
                    </div>
                )}

                {/* Tombol Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-12 space-x-4">
                        <button
                            onClick={() => setCurrentPage(p => p - 1)}
                            disabled={currentPage === 1}
                            className="px-6 py-2 bg-white border-2 border-green-500 text-green-500 rounded-lg font-medium hover:bg-green-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-green-500 transition"
                        >
                            Sebelumnya
                        </button>
                        <span className="text-slate-700 font-medium px-4">
                            Halaman {currentPage} dari {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(p => p + 1)}
                            disabled={currentPage === totalPages}
                            className="px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            Selanjutnya
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}