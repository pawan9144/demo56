import { IIntialState } from '../types'

export const reducer = (state: IIntialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        items: action.payload.items
      }

    case 'REMOVE':
      return {
        ...state,
        items: action.payload.items
      }

    default:
      throw new Error('No case for that type')
  }
}
