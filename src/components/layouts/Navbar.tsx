import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <header className="flex flex-row z-50 fixed top-0 left-0 justify-between px-8 py-3 border-b-4 border-brown-sugar w-screen bg-paynes-gray text-timberwolf text-base font-russo">
      <div>
        <Link href="#">&lt;&#47;&gt;</Link>
      </div>
      <nav className="flex flex-row justify-between list-none gap-x-14">
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/projetos">Projetos</Link>
        </li>
        <li>
          <Link href="/curriculo">Currículo</Link>
        </li>
      </nav>
    </header>
  );
};
