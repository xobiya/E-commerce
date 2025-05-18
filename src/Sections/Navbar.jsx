import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
        <div>
            <p className="h-10 w-full bg-black text-white text-center pt-1 text-xs md:text-base">Summer Sale For All Swim Suits And free Express Delivery -OFF 50% <a href="#shop" className="text-1xl underline">ShopNow</a> </p>
            
        </div>
        <nav className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md p-2 md:p-4 relative">
            <div className="logo mb-2 md:mb-0">
                <h1 className="text-lg md:text-2xl font-bold">Exclusive</h1>
            </div>
            {/* Hamburger menu for mobile */}
            <button
              className="md:hidden absolute right-4 top-4 z-50"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <ul
              className={`nav-links flex-col md:flex-row justify-center items-center gap-2 md:gap-4 flex-1 w-full md:w-auto bg-white md:bg-transparent absolute md:static left-0 top-16 md:top-auto z-40 md:z-auto transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'} md:flex`}
            >
                <li><a href="#home" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent rounded md:rounded-none">Home</a></li>
                <li><a href="#contact" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent rounded md:rounded-none">Contact</a></li>
                <li><a href="#About" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent rounded md:rounded-none">About</a></li>
                <li><a href="#Signup" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent rounded md:rounded-none">Sign Up</a></li>
            </ul>
            <div className="search-bar flex items-center gap-2 md:gap-4 mt-2 md:mt-0 w-full md:w-auto">
                <input type="search" className="w-full md:w-auto bg-white rounded-md px-2 py-1 md:px-4 md:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="What are you looking for?" />
                <img src="/src/assets/Icons/Vector.svg" alt="search" className="h-5 w-5" />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                <img src="/src/assets/Icons/shopping-cart-svgrepo-com.svg" alt="cart" className="h-5 w-5" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar