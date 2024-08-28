import React from "react";
import Link from "next/link";
import { ParallaxBanner } from "react-scroll-parallax";

function Home() {
  return (
    
    <section
      className=" bg-gradient-to-b from-[color:#3E5B72] text-primary-foreground py-8 md:py-12 lg:py-24"
      id="home"
    >
      <div className="px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold">
              Elevate Your Business with Modularity Solution
            </h1>
            <p className="text-lg md:text-xl">
              We specialize in crafting digital products that drive business
              success.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://wa.me/+6285707181298"
                className="inline-flex items-center justify-center rounded-[40px] bg-primary-foreground text-primary px-5 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-[color:#248AD7] hover:text-[color:#ffff]"
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
                >
                <WhatsAppIcon />
                
                <p className="ml-2 mr-1">Let's Talk!</p>
              </Link>
            </div>
          </div>
          <img
            src="/Modularitylogo.png"
            width={600}
            height={400}
            alt="Hero Image"
            className="rounded-lg"
          />
        </div>
      </div>
      {/* <div className="px-8 py-15 md:px-6 items-center text-center">
        <h1 className="">Our Recent Client</h1>
        <Marquee>
        <img
            src="/D1VaultLogo.png"
            width={200}
            height={200}
            alt="Hero Image"
            className="rounded-lg"
          />
        </Marquee>
      </div> */}

    </section>
  );
}

export default Home;

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path
      fill="#25D366"
      d="M1.101 21.757L2.486 16.362C1.382 14.58 0.787 12.522 0.787 10.379C0.786 4.649 5.436 0 11.166 0C13.944 0.001 16.559 1.085 18.534 3.062C20.508 5.038 21.589 7.654 21.588 10.432C21.587 16.162 16.937 20.811 11.207 20.811C9.189 20.81 7.211 20.27 5.486 19.263L1.101 21.757Z"
    />
    <path
      fill="#FFFFFF"
      d="M15.926 13.289C15.701 13.166 14.521 12.587 14.316 12.504C14.11 12.421 13.961 12.379 13.811 12.605C13.661 12.831 13.201 13.369 13.071 13.519C12.941 13.669 12.811 13.69 12.586 13.567C12.361 13.444 11.583 13.187 10.656 12.357C9.929 11.71 9.427 10.91 9.297 10.684C9.167 10.458 9.282 10.338 9.392 10.228C9.491 10.129 9.611 9.969 9.721 9.839C9.831 9.709 9.873 9.614 9.956 9.464C10.039 9.314 9.997 9.184 9.935 9.061C9.873 8.938 9.373 7.756 9.183 7.305C8.997 6.864 8.809 6.92 8.672 6.913C8.542 6.906 8.392 6.905 8.242 6.905C8.092 6.905 7.845 6.967 7.639 7.193C7.433 7.419 6.812 7.999 6.812 9.181C6.812 10.363 7.683 11.504 7.793 11.654C7.903 11.804 9.373 14.103 11.653 15.145C12.274 15.418 12.757 15.583 13.129 15.708C13.763 15.917 14.339 15.891 14.793 15.827C15.299 15.755 16.262 15.242 16.452 14.708C16.642 14.174 16.642 13.723 16.58 13.618C16.518 13.513 16.368 13.452 16.143 13.329L15.926 13.289Z"
    />
  </svg>
);
