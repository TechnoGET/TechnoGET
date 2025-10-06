'use client';
import Link from 'next/link';

export function Header() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#solucoes', label: 'Soluções' },
  ];

  return (
    <header className="w-full shadow-xs shadow-gray-700 bg-[#1f1f1f] md:px-24 px-4 flex items-center justify-between h-[70px] fixed z-30">
      <h1 className="md:text-xl font-medium">
        Techno<span className="text-primary">GET</span>
      </h1>

      <nav>
        <ul className="flex md:gap-8 gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                scroll={true}
                className="md:text-base text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
