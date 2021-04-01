import { UltraStore } from '../assets'

export interface IProject {
  title: string
  description1: string
  description2: string
  list1: string[]
  list2: string[]
  repo: string
  website: string
  image: JSX.Element
}

export const projects: IProject[] = [
  {
    title: 'UltraStore',
    description1: `This is my first big project. It's an E-commerce store build with React, Node JS,
    MongoDB and Express. Many hours was spent building the backend using and pairing that
    with a user-friendly font-end. A simple and professional design thanks to React
    Bootstrap and my own CSS.`,
    description2: 'Hello what',
    list1: ['Shopping Cart', 'PayPal Payment', 'Account Creation', 'User Reviews'],
    list2: ['Checkout Process', 'Add/Remove Products', 'Product Search', 'Admin Controls'],
    repo: 'https://github.com/IbnDaanis/ultrastore',
    website: '',
    image: UltraStore,
  },
]
