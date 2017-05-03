import {Option} from "monapt"

export class Product {
  name: string
  price: number
  image: string
  id: string
}

export class Products {
  static get(id: string): Option<Product> {
      return Option(this.products.find(p => p.id == id))
  }
  
  static products: Product[] = [
      {id: "1", name:"Jame Octavio",price:850,image:"aaron-alvarado-25213.jpg"},
      {id: "2", name:"Classy heirloom golden watch",price:87,image:"aj-garcia-230650.jpg"},
      {id: "3", name:"Geoffrey Gerardo",price:850,image:"alex-holyoake-235022.jpg"},
      {id: "4", name:"Lakeisha Chastity",price:850,image:"ayo-ogunseinde-230630.jpg"},
      {id: "5", name:"Rosalie Sadie",price:850,image:"bench-accounting-49907.jpg"},
      {id: "6", name:"Timmer Swarts",price:850,image:"brooke-cagle-241286.jpg"},
      {id: "7", name:"Delicious organic vegan gluten free fruits",price:350,image:"brooke-lark-230140.jpg"},
      {id: "8", name:"Romeo Clement",price:850,image:"cristian-newman-244974.jpg"},
      {id: "9", name:"Bespoke hand-sewn leather cruelty-free backpack",price:450,image:"crown-labs-agency-239148.jpg"},
      {id: "10", name:"Recycled earth-friendly hand-constructed laptop bag",price:250,image:"felix-russell-saw-236041.jpg"},
      {id: "11", name:"Wilfredo Denis",price:850,image:"frank-marino-76592.jpg"},
      {id: "12", name:"Conard Chico",price:850,image:"ian-keefe-245920.jpg"},
      {id: "13", name:"Limited-edition single-run selfie camera",price:999,image:"jakob-owens-231031.jpg"},
      {id: "14", name:"Josefa Christian",price:850,image:"jody-hong-235154.jpg"},
      {id: "15", name:"Johnnie Isaac",price:850,image:"jon-asato-246165.jpg"},
      {id: "16", name:"Guillermo Noel",price:850,image:"lesly-b-juarez-230709.jpg"},
      {id: "17", name:"Dallas Laurance",price:850,image:"matthew-henry-7328.jpg"},
      {id: "18", name:"Health-conscious cruelty-free dairy free vegan breakfast",price:250,image:"megan-savoie-232969.jpg"},
      {id: "19", name:"Apple computer accessories and drink",price:3200,image:"melinda-pack-233281.jpg"},
      {id: "20", name:"Felix",price:850,image:"octavio-fossatti-37556.jpg"},
      {id: "21", name:"Edwin Troy",price:850,image:"oliver-astrologo-50880.jpg"},
      {id: "22", name:"Authentic antique canon point & shoot film camera",price:4500,image:"pavel-kosov-243169.jpg"},
      {id: "23", name:"Brink Anglin",price:850,image:"phung-h-i-247272.jpg"},
      {id: "24", name:"Noreen Amie",price:850,image:"tamara-bellis-236536.jpg"},
      {id: "25", name:"Brickman Brackins",price:850,image:"toa-heftiba-243283.jpg"}
    ]
  
  static getAll(): Product[] {
    return this.products
  }
}