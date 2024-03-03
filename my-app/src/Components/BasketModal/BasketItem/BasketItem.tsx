import React, { useContext } from 'react';
import styles from "./BasketItem.module.css";
import classNames from 'classnames';
import { ThemeContext } from '../../../providers/theme';

interface Product {
    author: string;
    height: number;
    id: number;
    price: number;
    url: string;
    width: number;
}

interface BasketItemProps {
    product: Product;
}

export const BasketItem: React.FC<BasketItemProps> = ({ product }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <h3>{product.author}</h3>
            <img className={classNames(styles["basket-item__product-image"], styles[theme])} src={product.url}></img>
            <p>{product.price}$</p>
        </div>
    );
}
