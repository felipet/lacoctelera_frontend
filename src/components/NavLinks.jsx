import { NavLink } from "react-router-dom";

const links = [
  // { id: 1, url: "/", text: "home" },
  // { id: 2, url: "about", text: "about" },
  { id: 3, url: "ingredient", text: "share your recipe" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
