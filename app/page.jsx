

export const metadata = {
  title: "Home",
  description: "Welcome page",
};

import Product from "./product/page";
import Hero from "./hero/page";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <div>
     <Hero />
     <Product/>
      <Testimonials />
      
    </div>
  );
} 
