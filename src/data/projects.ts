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
    title: 'Todoer',
    description1: `This project was inspired by the app Todoist. It's an app that allows you to create projects and add tasks. You can create an account using an email and password or Google Sign In. I have used Firebase Firestore for the backend.`,
    description2: `I have implemented basic Create/Read/Updated/Delete features for the tasks. They can be sorted by due date and alphabetically. All tasks can be updated and completed as well. Entire projects can be deleted also. I also cloned the Todoist home screen for the landing page.`,
    list1: ['React', 'Redux', 'Firebase', 'React Router'],
    list2: [
      'Styled Components',
      'Create different projects',
      'Add tasks for each project',
      'Data stored in your account',
    ],
    repo: 'https://github.com/IbnDaanis/todoer',
    website: 'https://todoer-app.netlify.app/',
    image: '/dist/assets/images/todoer.png',
  },
  {
    title: 'UltraStore',
    description1: `This is my first big project. It's an E-commerce store build with React, Node JS,
    MongoDB and Express. Many hours was spent building the backend using and pairing that
    with a user-friendly font-end. A simple and professional design thanks to React
    Bootstrap and my own CSS.`,
    description2: `This is my first big project. It's an E-commerce store build with React, Node JS,
    MongoDB and Express. Many hours was spent building the backend using and pairing that
    with a user-friendly font-end. A simple and professional design thanks to React
    Bootstrap and my own CSS.`,
    list1: ['Shopping Cart', 'PayPal Payment', 'Account Creation', 'User Reviews'],
    list2: ['Checkout Process', 'Add/Remove Products', 'Product Search', 'Admin Controls'],
    repo: 'https://github.com/IbnDaanis/ultrastore',
    website: 'https://ultrastoreapp.herokuapp.com/',
    image: '/dist/assets/images/ultrastore.png',
  },
  {
    title: 'Friedrik',
    description1: `This project started with me practising React Hooks to make a functional shopping
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
