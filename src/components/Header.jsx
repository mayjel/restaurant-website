function Header() {
  return (
    <header className="border-b">
      <div className="max-w-9xl mx-auto pl-16 pr-6 py-10 flex justify-between items-center">
        <h1 className="text-2xl tracking-wide">L A W R E N C E</h1>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest">
          <a href="#reservation" className="hover:opacity-60">Reservation</a>
          <a href="#menu" className="hover:opacity-60">Menu</a>
          <a href="#about" className="hover:opacity-60">About</a>
          <a href="#contact" className="hover:opacity-60">Contact</a>

          <button className="relative hover:opacity-60" aria-label="Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13L17 13M7 13h10"
              />
            </svg>
          </button>

          <a
            href="#order"
            className="bg-[#452829] text-white px-5 py-2 uppercase text-xs tracking-widest hover:bg-yellow-900 transition"
          >
            Order Online
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;