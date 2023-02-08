import React, { useReducer, createContext } from 'react'
import { reducer } from './reducer'
import { initialState } from './store'

export const CartContext = createContext<any>({
  items: []
})

type IProps = {
  children: React.ReactNode
}
const CartProvider: React.FC<IProps> = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const addToCart = (product: any) => {
    const updatedCart = [...state.items, product]

    dispatch({
      type: 'ADD',
      payload: {
        items: updatedCart
      }
    })
  }

  const removeFromCart = (id: string) => {
    const updatedCart = state.items.filter((currentProduct: any) => currentProduct.id !== id)

    dispatch({
      type: 'REMOVE',
      payload: {
        items: updatedCart
      }
    })
  }

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    dispatch
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export default CartProvider
