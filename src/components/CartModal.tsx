import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, CursorMode } from '../types';
import { LOCATIONS_DATA } from '../data/restaurantData';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onCursorChange: (mode: CursorMode) => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCursorChange,
}) => {
  const [selectedOutlet, setSelectedOutlet] = useState(LOCATIONS_DATA[0].name);
  const [orderType, setOrderType] = useState<'DINE_IN' | 'EXPRESS_PICKUP' | 'DELIVERY'>('EXPRESS_PICKUP');
  const [isOrdered, setIsOrdered] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + taxes;

  const handleCheckout = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4973b', '#f1ca63', '#ffffff'],
    });
    setIsOrdered(true);
    setTimeout(() => {
      setIsOrdered(false);
      onClearCart();
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex justify-end bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="w-full max-w-md bg-[#0d0a08] text-[#f4efe8] h-full flex flex-col justify-between border-l border-[#2d2218] p-6 shadow-2xl overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#2d2218] pb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#d4973b]" />
              <span className="font-serif-title font-bold text-base uppercase tracking-wider text-[#f4efe8]">
                YOUR ORDER BAG
              </span>
            </div>
            <button
              onClick={onClose}
              onMouseEnter={() => onCursorChange('ENTER')}
              onMouseLeave={() => onCursorChange('DEFAULT')}
              className="p-2 rounded-full border border-[#382b20] hover:border-[#d4973b] text-[#a89b8d]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          {isOrdered ? (
            <div className="my-auto text-center flex flex-col items-center gap-4 py-12">
              <div className="w-16 h-16 rounded-full bg-[#3b5e40] text-[#f4efe8] flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-title text-2xl font-bold uppercase text-[#f4efe8]">
                ORDER CONFIRMED!
              </h3>
              <p className="font-editorial text-sm text-[#c4b5a3] italic">
                Your order is being prepared hot on our tawas at {selectedOutlet}. Enjoy the sizzle!
              </p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="my-auto text-center py-12 text-[#a89b8d] flex flex-col items-center gap-3">
              <ShoppingBag className="w-12 h-12 text-[#382b20]" />
              <p className="font-serif-title text-sm uppercase">YOUR BAG IS EMPTY</p>
              <p className="text-xs font-mono text-[#786b5e]">Add crispy dosas, button idlis, or filter coffee from the menu.</p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-4">
              {/* Outlet Selector */}
              <div className="p-4 rounded-xl bg-[#14100c] border border-[#2d2218]">
                <label className="text-[10px] font-mono text-[#d4973b] uppercase block mb-1">
                  SELECT PREPARATION OUTLET
                </label>
                <select
                  value={selectedOutlet}
                  onChange={(e) => setSelectedOutlet(e.target.value)}
                  className="w-full bg-[#0b0908] border border-[#382b20] rounded-lg px-3 py-2 text-xs font-mono text-[#f4efe8] outline-none focus:border-[#d4973b]"
                >
                  {LOCATIONS_DATA.map((loc) => (
                    <option key={loc.id} value={loc.name}>
                      {loc.name} ({loc.city})
                    </option>
                  ))}
                </select>
              </div>

              {/* Items List */}
              {cartItems.map((item) => (
                <div
                  key={item.menuItem.id}
                  className="p-4 rounded-xl border border-[#2d2218] bg-[#14100c] flex items-center justify-between gap-4"
                >
                  <img
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <span className="block font-serif-title font-bold text-xs uppercase text-[#f4efe8]">
                      {item.menuItem.name}
                    </span>
                    <span className="block text-xs font-mono text-[#d4973b]">
                      ₹{item.menuItem.price * item.quantity}
                    </span>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 bg-[#0b0908] px-2 py-1 rounded-lg border border-[#382b20]">
                    <button
                      onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                      className="text-[#a89b8d] hover:text-[#f4efe8]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-mono font-bold w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                      className="text-[#a89b8d] hover:text-[#f4efe8]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.menuItem.id)}
                    className="text-[#786b5e] hover:text-[#8b221e]"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Footer Summary */}
          {cartItems.length > 0 && !isOrdered && (
            <div className="pt-4 border-t border-[#2d2218] flex flex-col gap-3 font-mono text-xs">
              <div className="flex justify-between text-[#a89b8d]">
                <span>SUBTOTAL</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-[#a89b8d]">
                <span>GST & SERVICE TAX (5%)</span>
                <span>₹{taxes}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#f4efe8] pt-2 border-t border-[#2d2218]">
                <span>TOTAL</span>
                <span className="text-[#d4973b]">₹{total}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-4 rounded-xl bg-[#d4973b] text-[#0b0908] font-serif-title font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#e5a83b] transition-all shadow-xl shadow-[#d4973b]/20 mt-2"
              >
                <Sparkles className="w-4 h-4" />
                PLACE ORDER (₹{total})
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
