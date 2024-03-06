interface IProps {
    cart: string[]
    clearCart: () => void
}

const Cart = ({cart, clearCart}: IProps) => {
  return (
    <>
        <h1>Current Thieves Cart:</h1>
        <ul>
            {cart.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
        <button onClick={clearCart}>Clear Cart</button>
    </>
  )
}
export default Cart