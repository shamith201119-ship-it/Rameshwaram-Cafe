import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CursorMode, MenuItem, CartItem } from './types';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { CartModal } from './components/CartModal';
import { HeroSection } from './sections/HeroSection';
import { SizzleSection } from './sections/SizzleSection';
import { MainDosaHeroSection } from './sections/MainDosaHeroSection';
import { InteractiveMenuSection } from './sections/InteractiveMenuSection';
import { SecretDetailsSection } from './sections/SecretDetailsSection';
import { FilterCoffeeSection } from './sections/FilterCoffeeSection';
import { RameshwaramToBengaluruSection } from './sections/RameshwaramToBengaluruSection';
import { KalamStorySection } from './sections/KalamStorySection';
import { TwentyFourHoursSection } from './sections/TwentyFourHoursSection';
import { LocationsSection } from './sections/LocationsSection';
import { SocialProofSection } from './sections/SocialProofSection';
import { GheeModeOverlay } from './sections/GheeModeOverlay';
import { FinalCTASection } from './sections/FinalCTASection';
import { Footer } from './components/Footer';

export default function App() {
  const [cursorMode, setCursorMode] = useState<CursorMode>('DEFAULT');
  const [isGheeMode, setIsGheeMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Initialize Smooth Scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleToggleGheeMode = () => {
    setIsGheeMode((prev) => !prev);
  };

  const handleAddToCart = (menuItem: MenuItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.menuItem.id === menuItem.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { menuItem, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.menuItem.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.menuItem.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={`min-h-screen bg-[#0b0908] text-[#f4efe8] relative overflow-hidden ${isGheeMode ? 'ghee-mode-active' : ''}`}>
      {/* Custom Cursor */}
      <CustomCursor cursorMode={cursorMode} isGheeMode={isGheeMode} />

      {/* Preloader */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* Ghee Mode Special Easter Egg Overlay */}
      <GheeModeOverlay isGheeMode={isGheeMode} onToggle={handleToggleGheeMode} />

      {/* Main Experience Navigation */}
      <Navbar
        onCursorChange={setCursorMode}
        isGheeMode={isGheeMode}
        onToggleGheeMode={handleToggleGheeMode}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Experience Flow */}
      <main className="relative z-10">
        <HeroSection onCursorChange={setCursorMode} isGheeMode={isGheeMode} />
        <SizzleSection onCursorChange={setCursorMode} isGheeMode={isGheeMode} />
        <MainDosaHeroSection onCursorChange={setCursorMode} isGheeMode={isGheeMode} />
        <InteractiveMenuSection
          onCursorChange={setCursorMode}
          isGheeMode={isGheeMode}
          onAddToCart={handleAddToCart}
        />
        <SecretDetailsSection onCursorChange={setCursorMode} isGheeMode={isGheeMode} />
        <FilterCoffeeSection onCursorChange={setCursorMode} isGheeMode={isGheeMode} />
        <RameshwaramToBengaluruSection onCursorChange={setCursorMode} isGheeMode={isGheeMode} />
        <KalamStorySection onCursorChange={setCursorMode} isGheeMode={isGheeMode} />
        <TwentyFourHoursSection
          onCursorChange={setCursorMode}
          isGheeMode={isGheeMode}
          onAddToCart={handleAddToCart}
        />
        <LocationsSection onCursorChange={setCursorMode} isGheeMode={isGheeMode} />
        <SocialProofSection onCursorChange={setCursorMode} isGheeMode={isGheeMode} />
        <FinalCTASection onCursorChange={setCursorMode} isGheeMode={isGheeMode} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Online Order Bag / Cart Drawer */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onCursorChange={setCursorMode}
      />
    </div>
  );
}

