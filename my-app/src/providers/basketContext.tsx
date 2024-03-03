import React, { PropsWithChildren, createContext, useContext, useState } from 'react';
import { Product } from "./basketContext.types"

interface BasketContextType {
    basket: Product[];
    addToBasket: (product: Product) => void;
    removeFromBasket: (productId: number) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

const BasketProvider: React.FC = ({ children }: PropsWithChildren) => {
    const [basket, setBasket] = useState<Product[]>([]);

    const addToBasket = (product: Product) => {
        setBasket([...basket, product]);
    }

    const removeFromBasket = (productId: number) => {
        setBasket(basket.filter(item => item.id !== productId));
    }

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    );
}

const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error('useBasket must be used within a BasketProvider');
    }
    return context;
}

export { BasketProvider, useBasket };
