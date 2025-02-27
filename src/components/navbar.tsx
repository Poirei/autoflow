import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

const NavBar: React.FC = async () => {
  return (
    <header className="fixed ring-0 left-0 top-0 p-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between w-full">
      <aside className="flex items-center">
        <p className="text-3xl font-bold">Aut</p>
        <Image
          src="/fi_greek_math_geometry_alphabet.png"
          alt="fi greek math geometry alphabet"
          width={25}
          height={37}
          className="invert"
        />
        <p className="text-3xl font-bold">flow</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href={"/dashboard"}
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {
              //TODO: get user from session
              true ? "Dashboard" : "Get Started"
            }
          </span>
        </Link>
        {
          //TODO: get user from session
        }
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default NavBar;
