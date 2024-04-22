import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="fl bg-blue-800 bg-opacity-30 m-2 rounded">
      <Link href={"/"}>
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      <h1>NavBar</h1>
    </nav>
  );
};
