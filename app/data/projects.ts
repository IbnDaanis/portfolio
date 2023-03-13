export interface IProject {
  title: string;
  description1: string;
  description2: string;
  list1: string[];
  list2: string[];
  repo: string;
  website: string;
  image1: string;
  image2: string;
}

export const projects: IProject[] = [
  {
    title: "Todoer",
    description1: `Todoer is a clone of the task managing app Todoist. It's used to create projects to organize your daily tasks. You can create an account using your email and password or Google Sign In. I have used Firebase Firestore for the backend which stores user information and data.`,
    description2: `I have implemented create, read, update and delete features for the tasks. They can be sorted by the due date and alphabetically. All tasks can be updated and completed and entire projects can be deleted. I also cloned the Todoist home screen for the landing page.`,
    list1: ["React", "Redux", "Firebase", "React Router"],
    list2: [
      "Styled Components",
      "Create different projects",
      "Add tasks for each project",
      "Data stored in your account"
    ],
    repo: "https://github.com/IbnDaanis/todoer",
    website: "https://todoer-app.netlify.app/",
    image1: "/images/todoer-1.webp",
    image2: "/images/todoer-2.webp"
  },
  {
    title: "UltraStore",
    description1: `UltraStore is an E-commerce store that sells tech items. Customers can create an account, add products to the cart, order items and view past orders. All payments are carried out by PayPal and once payment is received, the order will be completed`,
    description2: `This app also includes several admin features. Admins can add new products to the catalogue and upload custom images for each item. User accounts can be edited and deleted. Orders can be viewed and marked as delivered.`,
    list1: ["React", "Redux", "React Router", "Bootstrap"],
    list2: ["Express", "MongoDB", "Mongoose", "NodeJS"],
    repo: "https://github.com/IbnDaanis/ultrastore",
    website: "",
    image1: "/images/ultrastore-1.webp",
    image2: "/images/ultrastore-2.webp"
  },
  {
    title: "Friedrik",
    description1: `This project started with me practising React Hooks to make a functional shopping
    cart. However, I got carried away... I made the user interface look very nice, then I
    decided to add animations to make it look more interesting. Framer Motion for
    the animations and SCSS for styling.`,
    description2: "",
    list1: [
      "React",
      "React Context",
      "React Router",
      "Framer Motion Animations"
    ],
    list2: [
      "Page Transitions",
      "Dark mode if set on system",
      "Layout Transitions"
    ],
    repo: "https://github.com/IbnDaanis/friedrik",
    website: "https://friedrik.netlify.app/",
    image1: "/images/friedrik-1.webp",
    image2: "/images/friedrik-2.webp"
  }
];
