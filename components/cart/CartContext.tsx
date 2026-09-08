"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: string, size?: string) => void;
  updateQuantity: (
    id: string,
    quantity: number,
    size?: string
  ) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("drama-club-cart");

    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch {
        localStorage.removeItem("drama-club-cart");
      }
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "drama-club-cart",
      JSON.stringify(items)
    );
  }, [items, isLoaded]);

  const addToCart = (
    item: Omit<CartItem, "quantity">,
    quantity = 1
  ) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.size === item.size
      );

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.size === item.size
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
              }
            : cartItem
        );
      }

      return [
        ...currentItems,
        {
          ...item,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (id: string, size?: string) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.id === id && item.size === size)
      )
    );
  };

  const updateQuantity = (
    id: string,
    quantity: number,
    size?: string
  ) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.size === size
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [items]
  );

  const cartTotal = useMemo(
    () =>
      items.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      ),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside a CartProvider"
    );
  }

  return context;
}