// src/main.jsx
import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Pages
import SplashScreen from './pages/SplashScreen';
import HomePage from './pages/HomePage';
import ResepPage from './pages/ResepPage'; // Halaman baru
import FavoritePage from './pages/FavoritePage';
import DetailPage from './pages/DetailPage'; // Halaman baru
import ProfilePage from './pages/ProfilePage';

// Components
import DesktopNavbar from './components/navbar/DesktopNavbar';
import MobileNavbar from './components/navbar/MobileNavbar';

// Data & Styles
import { ResepMakanan } from './data/makanan';
import { ResepMinuman } from './data/minuman';
import './index.css'
import PWABadge from './PWABadge';

function AppRoot() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRecipeId, setSelectedRecipeId] = useState(null); // State untuk resep yang dipilih

  // State untuk favorit
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Gabungkan semua resep
  const allMakanan = Object.values(ResepMakanan.resep);
  const allMinuman = Object.values(ResepMinuman.resep);
  const allRecipes = [...allMakanan, ...allMinuman];

  const toggleFavorite = (recipeId) => {
    setFavorites(prev => prev.includes(recipeId) ? prev.filter(id => id !== recipeId) : [...prev, recipeId]);
  };

  const handleSelectRecipe = (recipeId) => setSelectedRecipeId(recipeId);
  const handleCloseDetail = () => setSelectedRecipeId(null);

  const handleSplashComplete = () => setShowSplash(false);
  const handleNavigation = (page) => {
    setCurrentPage(page);
    handleCloseDetail(); // Tutup detail page jika pindah halaman
  };

  const renderCurrentPage = () => {
    const pageProps = { favorites, toggleFavorite, onSelectRecipe: handleSelectRecipe };
    switch (currentPage) {
      case 'home':
        return <HomePage {...pageProps} />;
      case 'resep':
        return <ResepPage allRecipes={allRecipes} {...pageProps} />;
      case 'favorit':
        const favoriteRecipes = allRecipes.filter(r => favorites.includes(r.id));
        return <FavoritePage favoriteRecipes={favoriteRecipes} {...pageProps} />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage {...pageProps} />;
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  const selectedRecipe = allRecipes.find(r => r.id === selectedRecipeId);

  return (
    <div className="min-h-screen bg-gray-50">
      <DesktopNavbar currentPage={currentPage} onNavigate={handleNavigation} />
      
      <main className="min-h-screen">
        {renderCurrentPage()}
      </main>

      {/* Tampilkan Detail Page jika ada resep yang dipilih */}
      {selectedRecipe && (
        <DetailPage
          recipe={selectedRecipe}
          onClose={handleCloseDetail}
          isFavorite={favorites.includes(selectedRecipe.id)}
          toggleFavorite={toggleFavorite}
        />
      )}
      
      <MobileNavbar currentPage={currentPage} onNavigate={handleNavigation} />
      <PWABadge />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
)