import React from "react";

const menuItems = [
  { label: "List Books", route: "/books" },
  { label: "Add A Book", route: "/books/add" },
  { label: "List Authors", route: "/authors" },
  { label: "Add An Author", route: "/authors/add" },
];
const Menu = () => {
  const clickHandler = (route: string) => {
    window.location.href = `${route}`;
  };
  return (
    <div className="menu__container">
      {menuItems.map((item, index) => (
        <div key={`item__${index}`} onClick={() => clickHandler(item.route)}>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Menu;
