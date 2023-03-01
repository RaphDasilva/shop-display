import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

const Modal = () => {
  const dispach = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove All items from your shopping Cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispach(clearCart());
              dispach(closeModal());
            }}
          >
            Confirm
          </button>
          <button type="button" className="btn clear-btn" onClick={() => dispach(closeModal())}>Cancel</button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
