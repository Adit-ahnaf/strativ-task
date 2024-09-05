"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Navbar({session}) {
  const [loginSession, setLoginSession] = useState(null);
  const route = useRouter();




  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <span className="ml-2 text-lg font-semibold">Strativ</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {session ? (
            <Link
            href="#"
            onClick={()=>signOut()}
            className="px-4 py-2 text-[14px]  text-white bg-gray-900 rounded-md hover:bg-gray-700"
          >
            LogOut
          </Link>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 text-[14px] text-white bg-gray-900 rounded-md hover:bg-gray-700"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
