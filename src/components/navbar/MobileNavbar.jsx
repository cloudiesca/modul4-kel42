// src/components/navbar/MobileNavbar.jsx
import { Home, UtensilsCrossed, Coffee, Heart, User } from 'lucide-react';

export default function MobileNavbar({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'makanan', label: 'Makanan', icon: UtensilsCrossed },
    { id: 'minuman', label: 'Minuman', icon: Coffee },
    { id: 'favorit', label: 'Favorit', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-2 min-w-[60px] transition-all duration-200 ${isActive ? 'text-blue-600' : 'text-gray-500'
                }`}
            >
              <IconComponent
                size={22}
                className="mb-0.5"
                strokeWidth={isActive ? 2.5 : 1.5}
              />
              <span className={`text-[10px] font-medium ${isActive ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}