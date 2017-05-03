import {Products, Product} from "./Products"
import { Option } from "monapt"

type CartItems = Set<Product>;

export class Cart {
  static carts: Map<string, CartItems> = new Map()
  
  static addItem(id: string, sessionId: string):Product[] {
      console.log(id, sessionId)
      const productO = Products.get(id)
      const items = Option(this.carts.get(sessionId)).getOrElse(() => new Set())
      if (productO.isEmpty) return [...items]
      items.add(productO.get())
      this.carts.set(sessionId, items)
      return [...items]
  }
  
  static removeItem(id: string, sessionId: string):Product[] {
      const productO = Products.get(id)
      const items = Option(this.carts.get(sessionId)).getOrElse(() => new Set())
      if (productO.isEmpty) return [...items]
      items.delete(productO.get())
      this.carts.set(sessionId, items)
      return [...items]
  }
  
  static getItems(sessionId: string): Product[] {
    const items = Option(this.carts.get(sessionId)).getOrElse(() => new Set())
    return [...items]
  }
}
