import React from "react";
import Image from "next/image";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const navList = (
  <ul className="mt-2 mb-4 flex items-center flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-x-2 p-1 font-medium"
    >
      <a href="#home" className="flex items-center ">
        Home
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="white"
      className="flex items-center gap-x-2 p-1 font-medium"
    >
      <a href="#products" className="flex items-center">
        Products
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="white"
      className="flex items-center gap-x-2 p-1 font-medium "
    >
      <a href="#services" className="flex w-full items-center">
        Services
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-x-2 p-1 font-medium"
    >
      <a href="#testimonials" className="flex items-center">
        Testimonials
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-x-2 p-1 font-medium"
    >
      <a href="#contact" className="inline-flex items-center justify-center rounded-[40px] bg-white text-white border px-5 py-3 text-sm font-medium shadow-sm transition-colors  hover:bg-[color:#e5e5e5] hover:text-[color:black]">
        Get in Touch
      </a>
      {/* <a href="#contact" className="flex items-center ">
        Get in Touch
      </a> */}
    </Typography>
  </ul>
);
function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="text-white sticky top-0 z-10 block w-full max-w-full px-4 py-6 bg-[#00388F] rounded border-none shadow-none h-max lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-[color:white]">
        <div className="flex items-center">
          <Image
              src="/Modularitylogo.png"
              width={60}
              height={60}
              alt="Hero Image"
              className="rounded-lg"
            />
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 text-xl font-bold"
          >
            Modularity Solution
          </Typography>
        </div>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <div className="container mx-auto text-[color:white]">{navList}</div>
      </Collapse>
    </Navbar>
  );
}

export default Header;
