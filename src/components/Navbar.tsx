import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-red-400 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <span className="text-white text-lg font-bold">MatchMe</span>
          </Link>
        </div>

        <div>
          <ul className="flex items-center space-x-4 text-white font-semibold">
            <li>
              <Link href="/members">Matches</Link>
            </li>
            <li>
              <Link href="/lists">Lists</Link>
            </li>
            <li>
              <Link href="/messages">Messages</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="text-white font-medium px-2 py-2 border border-white rounded-md"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-white font-medium px-2 py-2 border border-white rounded-md"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
