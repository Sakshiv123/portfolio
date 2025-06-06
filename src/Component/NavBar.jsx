// import React, { useEffect, useState } from "react";


// const Navbar = () => {
//           const [sticky, setSticky] = useState(false);
//           const [open, setOpen] = useState(false);
//           const menuLinks = [
//                     { name: "HOME", link: "#home" },
//                     { name: "ABOUT", link: "#about" },
//                     { name: "SKILLS", link: "#skills" },
//                     { name: "PROJECTS", link: "#projects" },
//                     { name: "CONTACT", link: "#contact" },
//           ];
//           useEffect(() => {
//                     window.addEventListener("scroll", () => {
//                               const nav = document.querySelector("nav");
//                               window.scrollY > 0 ? setSticky(true) : setSticky(false);
//                     });
//           }, []);
//           return (
//                     <nav
//                               className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60  text-gray-900" : "text-white"
//                                         }`}
//                     >
//                               <div className="flex items-center justify-between">
//                                         <div className="mx-7">
//                                                   <h4 className="text-4xl uppercase font-bold">
//                                                             S<span className="primary-color">aksh</span>I
//                                                   </h4>
//                                         </div>
//                                         <div
//                                                   className={` ${sticky ? "md:bg-white/0 bg-white" : "bg-white"
//                                                             } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
//                                         >
//                                                   <ul className="flex items-center gap-1 py-2 text-lg">
//                                                             {menuLinks?.map((menu, i) => (
//                                                                       <li key={i} className="px-6 hover:text-primary-color">
//                                                                                 <a href={menu?.link}>{menu?.name}</a>
//                                                                       </li>
//                                                             ))}
//                                                   </ul>
//                                         </div>
//                                         <div
//                                                   onClick={() => setOpen(!open)}
//                                                   className={`z-[999]  ${open ? "text-gray-900" : "text-gray-100"
//                                                             } text-3xl md:hidden m-5`}
//                                         >
//                                                   <ion-icon name="menu"></ion-icon>
//                                         </div>
//                                         <div
//                                                   className={`md:hidden text-gray-900 absolute w-2/3 h-screen
//       px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
//                                                             }`}
//                                         >
//                                                   <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
//                                                             {menuLinks?.map((menu, i) => (
//                                                                       <li
//                                                                                 onClick={() => setOpen(false)}
//                                                                                 key={i}
//                                                                                 className="px-6 hover:text-primary-color"
//                                                                       >
//                                                                                 <a href={menu?.link}>{menu?.name}</a>
//                                                                       </li>
//                                                             ))}
//                                                   </ul>
//                                         </div>
//                               </div>
//                     </nav>
//           );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-[999] transition-all duration-300 ${
        sticky ? "bg-white/80 shadow-md backdrop-blur-md text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-10 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-3xl font-bold uppercase tracking-wide">
          S<span className="text-primary-color">aksh</span>I
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          {menuLinks.map((menu, i) => (
            <li key={i} className="hover:text-primary-color transition">
              <a href={menu.link}>{menu.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`md:hidden fixed top-0 h-full w-2/3 bg-white text-gray-900 shadow-md p-6 transition-all duration-300 z-[998] ${
            open ? "right-0" : "-right-full"
          }`}
        >
          <ul className="flex flex-col gap-8 mt-16 text-lg font-medium">
            {menuLinks.map((menu, i) => (
              <li
                key={i}
                onClick={() => setOpen(false)}
                className="hover:text-primary-color transition"
              >
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
