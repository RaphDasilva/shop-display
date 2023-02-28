/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { ChevronUp, ChevronDown } from '../icons';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';

const CartItem = ({
  id, img, title, price, amount,
}) => {
  const dispach = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">
          $
          {price}
        </h4>
        <button className="remove-btn" onClick={() => dispach(removeItem(id))}>Remove</button>

      </div>
      <div>
        <button className="amount-btn" onClick={() => dispach(increase(id))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispach(removeItem(id));
              return;
            }
            dispach(decrease(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
