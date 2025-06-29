import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import type { Tour } from '../types/Tour';


interface WishlistContextType {
  wishlist: Tour[];
  addToWishlist: (tour: Tour) => void;
  removeFromWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Tour[]>([]);

  const addToWishlist = (tour: Tour) => {
    setWishlist((prev) => (prev.some((t) => t.id === tour.id) ? prev : [...prev, tour]));
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((t) => t.id !== id));
  };

  const isWishlisted = (id: string) => {
    return wishlist.some((t) => t.id === id);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
