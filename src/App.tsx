// Let's do an absolute import of the 'navbar' component :
import Navbar from "@/scenes/navbar/Navbar.tsx";
import Home from "@/scenes/home/Home.tsx";
import Benefits from "@/scenes/benefits/Benefits.tsx";
 import OurClasses from "@/scenes/ourClasses/OurClasses.tsx";
import ContactUs from "@/scenes/contactUs/ContactUs.tsx";
import Footer from "@/scenes/footer/Footer.tsx";

//  'useState' will take care of the selected page and its state :
import { useEffect, useState } from "react";
import {SelectedPage} from "@/shared/types.ts";

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  //  By default when we load the web page we want the website to be always at the top of the browser's window :
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect( () => {
    const handleScroll = () => {
      //  Let's check if we are at the top of the page 
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage = {selectedPage}
        setSelectedPage ={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />

    </div>
  )
}

export default App

