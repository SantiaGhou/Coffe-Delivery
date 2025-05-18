    import { createContext, useContext, useState, type ReactNode } from 'react';
    
    export type PaymentMethod = 'credit' | 'debit' | 'money';
    
    export interface Address {
      street: string;
      number: string;
      complement?: string;
      neighborhood?: string;
      city?: string;
      state?: string;
    }
    
    export interface CartItem {
      id: number;
      name: string;
      tags: string[];
      description: string;
      price: number;
      image: string;
      quantity: number;
    }
    
    interface OrderData {
      address: Address | null;
      payment: PaymentMethod | null;
      cart: CartItem[];
    }
    
    interface OrderContextType {
      order: OrderData;
      setAddress: (address: Address) => void;
      setPayment: (payment: PaymentMethod) => void;
      setCart: (cart: CartItem[]) => void;
      clearOrder: () => void;
    }
    
    const OrderContext = createContext({} as OrderContextType);
    
    export function OrderProvider({ children }: { children: ReactNode }) {
      const [order, setOrder] = useState<OrderData>({
        address: null,
        payment: null,
        cart: [],
      });
    
      function setAddress(address: Address) {
        setOrder((prev) => ({ ...prev, address }));
      }
      function setPayment(payment: PaymentMethod) {
        setOrder((prev) => ({ ...prev, payment }));
      }
      function setCart(cart: CartItem[]) {
        setOrder((prev) => ({ ...prev, cart }));
      }
      function clearOrder() {
        setOrder({ address: null, payment: null, cart: [] });
      }
    
      return (
        <OrderContext.Provider value={{ order, setAddress, setPayment, setCart, clearOrder }}>
          {children}
        </OrderContext.Provider>
      );
    }
    
    export function useOrder() {
      return useContext(OrderContext);
    }