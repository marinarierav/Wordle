import { Link } from "react-router-dom";
import {
  FLAVOR_CLASSIC,
  FLAVOR_COUNTRIES,
  FLAVOR_DISNEY,
  FLAVOR_HOGWARTS,
} from "../../config/flavors";

const links = [
  {
    id: FLAVOR_CLASSIC,
    url: "/wordle",
    slug: "Classic",
  },
  {
    id: FLAVOR_COUNTRIES,
    url: "/countries",
    slug: "Countries",
  },
  {
    id: FLAVOR_DISNEY,
    url: "/disney",
    slug: "Disney",
  },
  {
    id: FLAVOR_HOGWARTS,
    url: "/hogwarts",
    slug: "Hogwarts",
  },
];
function AppNav({ flavor }): JSX.Element {
  let itemsPrinted = 0;

  return (
    <nav
      style={{
        padding: "0.5rem",
      }}
    >
      <ul className="nav-list">
        {links.map((link, index) => {
          if (link["id"] === flavor) return;
          itemsPrinted++;
          return (
            <li>
              {itemsPrinted === 1 ? "·" : ""}
              <Link to={link["url"]}>{link["slug"]}</Link>·
              {itemsPrinted < links.length - 1 ? " | ·" : ""}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default AppNav;
