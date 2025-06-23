import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Sections/Navbar";
import Sidebar from "./Sections/Sidebar";
import Hero from "./Sections/Hero";
import ProductList from "./Sections/ProductList";
import Category from "./Sections/Category";
import Selling from "./Sections/Selling";
import Main from "./Sections/Main";
import ProductItems from "./Sections/ProductItems";
import Feature from "./Sections/Feature";
import Services from "./Sections/Services";
import Footer from "./Sections/Footer";
import Signup from "./Sections/Signup";
import Login from "./Sections/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Sidebar />
            <Hero />
            <ProductList />
            <Category />
            <Selling />
            <Main />
            <ProductItems />
            <Feature />
            <Services />
          </>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
