import Image from "next/image";
import Link from "next/link";
import {Search} from "lucide-react"
function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 py-4">
      <Link href="/" className="flex space-x-2 items-center justify-center">
        <div className="relative w-10 h-10">
          <Image
            src="https://i.imgur.com/XA7ahNg.jpg"
            layout="fill"
            className="rounded-full object-cover"
            alt="logo"
          />
        </div>
        <h1 className="font-bold">Think Plateau</h1>
      </Link>

      <div>
        <div className="p-2 hover:bg-slate-300 bg-slate-200 rounded-md transition duration-100 cursor-pointer">
        <Search className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
