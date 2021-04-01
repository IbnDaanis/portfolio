export interface IProject {
  title: string
  description1: string
  description2: string
  list1: string[]
  list2: string[]
  repo: string
  website: string
  image: string
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
    image: '/dist/assets/images/ultrastore.png',
  },
  {
    title: 'Friedrik',
    description1: ` This project started with me practising React Hooks to make a functional shopping
    cart. However, I got carried away, I tried to make it look very nice... Then I
    decided to add animations to it to make it look more interesting. Framer Motion for
    the animations and SCSS for styling.`,
    description2: '',
    list1: ['Shopping Cart', 'Individual Product Page', 'React Router', 'Framer Motion Animations'],
    list2: ['Page Transitions', 'Dark mode if set on system', 'Layout Transitions'],
    repo: 'https://github.com/IbnDaanis/shopping-cart',
    website: 'https://ibndaanis-shopping-cart.netlify.app/',
    image: '/dist/assets/images/friedrik.png',
  },
]
