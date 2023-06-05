import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <header className="flex flex-row z-50 absolute top-0 left-0 justify-between px-8 py-3 border-b-2 border-brown-sugar w-screen bg-paynes-gray text-timberwolf text-xxs">
      <div>
        <Link href="#">&lt;&#47;&gt;</Link>
      </div>
      <nav className="flex flex-row justify-between list-none gap-x-14">
        <li>
          <Link href="/aboutme">Sobre</Link>
        </li>
        <li>
          <Link href="/projects">Projetos</Link>
        </li>
        <li>
          <Link href="/resume">Currículo</Link>
        </li>
      </nav>
    </header>
  );
};
