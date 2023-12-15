import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalPrice = () =>
        // Use reduce to calculate the total price
        cartList.reduce((acc, each) => acc + each.quantity * each.price, 0)

      return (
        <div className="cartsummary">
          <h4>
            Order Total: <span>Rs {totalPrice()}/-</span>
          </h4>
          <p>{cartList.length} items in Cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
