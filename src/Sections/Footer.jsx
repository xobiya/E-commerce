import SendIcons from "../assets/Icons/Send.svg";
import QR from "../assets/Icons/QRcode.png";
import Facebook from "../assets/Icons/Icon-Facebook.svg";
import Instagram from "../assets/Icons/icon-Instagram.svg";
import Twitter from "../assets/Icons/Icon-Twitter.svg";
import Linkedin from "../assets/Icons/Icon-Linkedin.svg";
import Apple from "../assets/Icons/AppStore.png";
import Google from "../assets/Icons/GooglePlay.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Exclusive Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Exclusive</h1>
          <p className="text-lg mb-1">Subscribe</p>
          <p className="text-lg mb-4">Get 10% off your first order</p>
          <div className="relative max-w-md">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent border-2 border-white p-2 pr-12 rounded-md text-white w-full"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <img src={SendIcons} alt="Send" className="w-5 h-5 object-contain" />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h1 className="text-xl font-semibold mb-4">Support</h1>
          <p className="mb-2">
            111 Bijoy Sarani, Dhaka,<br />
            DH 1515, Bangladesh.
          </p>
          <p className="mb-2">exclusive@gmail.com</p>
          <p>+880 123 456 789</p>
        </div>

        {/* Account Links */}
        <div>
          <h1 className="text-xl font-semibold mb-4">My Account</h1>
          <ul className="space-y-2">
            <li><a href="#My Account" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Login/Register</a></li>
            <li><a href="#cart" className="hover:underline">Cart</a></li>
            <li><a href="#wishlist" className="hover:underline">Wishlist</a></li>
            <li><a href="#shop" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-xl font-semibold mb-4">Quick Link</h1>
          <ul className="space-y-2">
            <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#shipping" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h1 className="text-xl font-semibold mb-4">Download App</h1>
          <p className="mb-4">Save $3 with App New User Only</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div>
              <img src={QR} alt="QR code for app download" className="w-24 h-24 sm:w-28 sm:h-28 object-contain" />
            </div>
            <div className="flex flex-col gap-3">
              <img src={Google} alt="Google Play Store" className="w-32 object-contain" />
              <img src={Apple} alt="Apple App Store" className="w-32 object-contain" />
              <div className="flex gap-3 mt-2">
                <img src={Facebook} alt="Facebook" className="w-6 h-6" />
                <img src={Instagram} alt="Instagram" className="w-6 h-6" />
                <img src={Twitter} alt="Twitter" className="w-6 h-6" />
                <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
