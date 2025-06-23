//config/menu.js

export const menuItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },

  {
    title: "Skills",
    children: [
      { title: "EQ", path: "/skills/soft-skills" },
      { title: "Technical", path: "/skills/technical-skills" },
    ],
  },
  { title: "Work", path: "/projects" },
];
