/* eslint-disable */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NavBar from './component/NavBar';
import CartContainer from './component/CartContainer';
import { calculateTotals } from './features/cart/cartSlice';
import Modal from './component/Modal';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispach = useDispatch();
  useEffect(() => {
    dispach(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal /> }
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
