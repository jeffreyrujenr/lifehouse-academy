import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 z-10 px-16">
      <div className="flex-1">
        <Link href="/" className="hover:opacity-50">
          <Image
            className="rounded-full bg-white"
            src=""
            alt=""
            height={40}
            width={40}
          />
        </Link>
      </div>
      <div className="flex">
        <ul className="menu menu-horizontal px-1 z-10">
          <li>
            <Link href="/#team" className="btn btn-ghost mx-4">
              Our Team
            </Link>
          </li>
          <li tabIndex={0}>
            <p>Schools
			<ChevronDownIcon height={20} width={20} /></p>
            <ul className="p-2 bg-base-100">
              <li>
                <Link href="/school-of-music">School of Music</Link>
              </li>
              <li>
                <Link href="/school-of-media">School of Media</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/#contact" className="btn btn-ghost mx-4">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
