import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav>
        <button onClick={toggleMenu}>Menu</button>
        {showMenu && (
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/config">
                <a>Config</a>
              </Link>
            </li>
            <li>
              <Link href="/docs">
                <a>Docs</a>
              </Link>
            </li>
          </ul>
        )} 
      </nav>
    </header>
  );
}
