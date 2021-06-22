import Link from "next/link";
import { NavbarItems } from "./NavbarItem";

export default function Navbar() {
  return (
    <header className="container">
      <h1 className="logo">VIBE</h1>
      <nav>
        <ul>
          {NavbarItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.iName} href={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
