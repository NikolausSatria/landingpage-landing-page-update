'use client';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "./Header";
import Link from "next/link"
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Products from "./Products";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Partners from "./Partners";

export function Herocomponent() {

  return (
    // <div className="flex flex-col min-h-[100dvh]">
    //   <Header />
    //   <main className="flex-1">
    //     <section
    //       className="bg-[color:#3E5B72] text-primary-foreground py-12 md:py-24 lg:py-32"
    //       id="home"
    //     >
    //       <div className="px-4 md:px-6">
    //         <div className="grid md:grid-cols-2 gap-8 items-center">
    //           <div className="space-y-5">
    //             <h1 className="text-4xl md:text-5xl font-bold">
    //               Elevate Your Business with Modularity Solution
    //             </h1>
    //             <p className="text-lg md:text-xl">
    //               We specialize in crafting digital products that drive business
    //               success.
    //             </p>
    //             <div className="flex gap-4">
    //               <Link
    //                 href="#"
    //                 className="inline-flex items-center justify-center rounded-md bg-primary-foreground text-primary px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-[color:#248AD7] hover:text-[color:#ffff]"
    //                 prefetch={false}
    //               >
    //                 Let's Talk!
    //               </Link>
    //             </div>
    //           </div>
    //           <img
    //             src="/logo.jpg"
    //             width={600}
    //             height={400}
    //             alt="Hero Image"
    //             className="rounded-lg"
    //           />
    //         </div>
    //       </div>
    //     </section>
    //     <section id="products" className="py-12 md:py-24 lg:py-32">
    //       <div className="px-8 md:px-6">
    //         <div className="space-y-4 text-center">
    //           <h2 className="text-3xl md:text-4xl font-bold">Our Products</h2>
    //           <p className=" text-md md:text-xl text-muted-foreground">
    //             We blend innovative design with cutting-edge technology to
    //             deliver solutions that are not only visually appealing but also
    //             functional and user-friendly.
    //           </p>
    //         </div>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
    //           <div className="bg-background rounded-lg shadow-lg overflow-hidden">
    //             <img
    //               src="/placeholder.svg"
    //               width={400}
    //               height={300}
    //               alt="Product 1"
    //               className="w-full h-48 object-cover"
    //             />
    //             <div className="p-4">
    //               <h3 className="text-xl font-bold">Landing Page</h3>
    //               <p className="text-muted-foreground">
    //                 We design and develop compelling landing pages optimized for
    //                 conversion, ensuring your marketing campaigns achieve
    //                 maximum impact.
    //               </p>
    //               {/*
    //               <Link
    //                 href="#"
    //                 className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-4"
    //                 prefetch={false}
    //               >
    //                 Learn More
    //               </Link>
    //               */}
    //             </div>
    //           </div>
    //           <div className="bg-background rounded-lg shadow-lg overflow-hidden">
    //             <img
    //               src="/placeholder.svg"
    //               width={400}
    //               height={300}
    //               alt="Product 2"
    //               className="w-full h-48 object-cover"
    //             />
    //             <div className="p-4">
    //               <h3 className="text-xl font-bold">Website</h3>
    //               <p className="text-muted-foreground">
    //                 From sleek, modern designs to feature-rich e-commerce
    //                 platforms, our websites are built to engage visitors and
    //                 drive results.
    //               </p>
    //               {/** <Link
    //                 href="#"
    //                 className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-4"
    //                 prefetch={false}
    //               >
    //                 Learn More
    //               </Link>*/}
    //             </div>
    //           </div>
    //           <div className="bg-background rounded-lg shadow-lg overflow-hidden">
    //             <img
    //               src="/placeholder.svg"
    //               width={400}
    //               height={300}
    //               alt="Product 3"
    //               className="w-full h-48 object-cover"
    //             />
    //             <div className="p-4">
    //               <h3 className="text-xl font-bold">Web Application</h3>
    //               <p className="text-muted-foreground">
    //                 Our custom web applications are crafted to streamline
    //                 business processes, enhance productivity, and provide
    //                 seamless user experiences.
    //               </p>
    //              {/*
    //               <Link
    //                 href="#"
    //                 className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-4"
    //                 prefetch={false}
    //               >
    //                 Learn More
    //               </Link>
    //              */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section id="services" className="bg-[#3E5B72] py-12 md:py-24 lg:py-32">
    //       <div className="container mx-auto px-8">
    //         <div className="space-y-5 text-center">
    //           <h2 className="text-3xl md:text-4xl text-[color:#fafafa] font-bold">
    //             Our Services
    //           </h2>
    //           <p className="text-lg md:text-xl text-[color:#fdfdfd]">
    //             Explore our comprehensive range of services to support your
    //             business.
    //           </p>
    //         </div>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
    //           <div className="bg-background rounded-lg shadow-lg p-6">
    //             <BriefcaseIcon className="h-8 w-8 text-primary" />
    //             <h3 className="text-xl font-bold mt-4">Consulting</h3>
    //             <p className="text-muted-foreground mt-2">
    //               Our expert consultants provide tailored solutions to help your
    //               business thrive.
    //             </p>
    //           </div>
    //           <div className="bg-background rounded-lg shadow-lg p-6">
    //             <CodeIcon className="h-8 w-8 text-primary" />
    //             <h3 className="text-xl font-bold mt-4">Development</h3>
    //             <p className="text-muted-foreground mt-2">
    //               Our skilled developers create custom software and web
    //               applications to meet your unique needs.
    //             </p>
    //           </div>
    //           <div className="bg-background rounded-lg shadow-lg p-6">
    //             <CogIcon className="h-8 w-8 text-primary" />
    //             <h3 className="text-xl font-bold mt-4">Support</h3>
    //             <p className="text-muted-foreground mt-2">
    //               Our dedicated support team is here to help you every step of
    //               the way.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-muted">
    //       <div className="px-4 md:px-6">
    //         <div className="space-y-4 text-center">
    //           <h2 className="text-3xl md:text-4xl font-bold">
    //             What Our Clients Say
    //           </h2>
    //           <p className="text-lg md:text-xl text-muted-foreground">
    //             Hear from our satisfied customers about their experience with
    //             Modularity Solution.
    //           </p>
    //         </div>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
    //           <Card className="bg-background rounded-lg shadow-lg p-6">
    //             <div className="flex items-center space-x-4">
    //               <Avatar>
    //                 <AvatarImage src="/placeholder-user.jpg" />
    //                 <AvatarFallback>JD</AvatarFallback>
    //               </Avatar>
    //               <div>
    //                 <h4 className="text-lg font-bold">John Doe</h4>
    //                 <p className="text-muted-foreground">CEO, Acme Corp</p>
    //               </div>
    //             </div>
    //             <p className="text-muted-foreground mt-4">
    //               "Acme Inc. has been a game-changer for our business. Their\n
    //               products and services have helped us streamline our\n
    //               operations and drive growth."
    //             </p>
    //           </Card>
    //           <Card className="bg-background rounded-lg shadow-lg p-6">
    //             <div className="flex items-center space-x-4">
    //               <Avatar>
    //                 <AvatarImage src="/placeholder-user.jpg" />
    //                 <AvatarFallback>SM</AvatarFallback>
    //               </Avatar>
    //               <div>
    //                 <h4 className="text-lg font-bold">Sarah Miller</h4>
    //                 <p className="text-muted-foreground">
    //                   Marketing Manager, Acme Corp
    //                 </p>
    //               </div>
    //             </div>
    //             <p className="text-muted-foreground mt-4">
    //               "I've been working with Acme Inc. for years, and their\n
    //               commitment to customer satisfaction is unparalleled. They\n
    //               always go the extra mile to ensure our success."
    //             </p>
    //           </Card>
    //           <Card className="bg-background rounded-lg shadow-lg p-6">
    //             <div className="flex items-center space-x-4">
    //               <Avatar>
    //                 <AvatarImage src="/placeholder-user.jpg" />
    //                 <AvatarFallback>TW</AvatarFallback>
    //               </Avatar>
    //               <div>
    //                 <h4 className="text-lg font-bold">Tom Wilson</h4>
    //                 <p className="text-muted-foreground">
    //                   IT Manager, Acme Corp
    //                 </p>
    //               </div>
    //             </div>
    //             <p className="text-muted-foreground mt-4">
    //               "Acme Inc.'s products and services have been instrumental in\n
    //               helping us streamline our IT infrastructure and improve\n
    //               efficiency across the organization."
    //             </p>
    //           </Card>
    //         </div>
    //       </div>
    //     </section>
    //     <section id="contact" className="bg-[#3E5B72] py-12 md:py-24 lg:py-32">
    //       <div className="container mx-auto px-8">
    //         <div className="space-y-4 text-center">
    //           <h2 className="text-3xl md:text-4xl font-bold text-[color:#fafafa]">
    //             {" "}
    //             Ready to elevate your digital presence?
    //           </h2>
    //           <p className="text-lg md:text-xl text-muted">
    //             Get in touch with us today to discuss how we can help you
    //             achieve your business goals.
    //           </p>
    //         </div>
    //         <div className="max-w-md mx-auto mt-8">
    //           {/* <form className="space-y-4">
    //             <Input type="text" placeholder="Name" className="w-full" />
    //             <Input type="email" placeholder="Email" className="w-full" />
    //             <Textarea placeholder="Message" className="w-full" rows={5} />
    //             <Button type="submit" className="w-full">
    //               Submit
    //             </Button>
    //           </form> */}
    //           <Contact/>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    //   {/* <footer className="bg-muted text-primary px-4 lg:px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
    //     <p className="text-sm">
    //       &copy; 2024 Modularity Solution. All rights reserved.
    //     </p>
    //     <div className="flex gap-4 mt-4 sm:mt-0">
    //       <Link href="#" className="hover:underline" prefetch={false}>
    //         Privacy Policy
    //       </Link>
    //       <Link href="#" className="hover:underline" prefetch={false}>
    //         Terms of Service
    //       </Link>
    //     </div>
    //   </footer> */}
    //   <Footer/>
    // </div>
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>
      <Home />
      <Products />
      <Services />
      <Partners/>
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  );
}

// function BriefcaseIcon(props) {
//   return (
//     (<svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round">
//       <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//       <rect width="20" height="14" x="2" y="6" rx="2" />
//     </svg>)
//   );
// }


// function CodeIcon(props) {
//   return (
//     (<svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round">
//       <polyline points="16 18 22 12 16 6" />
//       <polyline points="8 6 2 12 8 18" />
//     </svg>)
//   );
// }


// function CogIcon(props) {
//   return (
//     (<svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round">
//       <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
//       <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
//       <path d="M12 2v2" />
//       <path d="M12 22v-2" />
//       <path d="m17 20.66-1-1.73" />
//       <path d="M11 10.27 7 3.34" />
//       <path d="m20.66 17-1.73-1" />
//       <path d="m3.34 7 1.73 1" />
//       <path d="M14 12h8" />
//       <path d="M2 12h2" />
//       <path d="m20.66 7-1.73 1" />
//       <path d="m3.34 17 1.73-1" />
//       <path d="m17 3.34-1 1.73" />
//       <path d="m11 13.73-4 6.93" />
//     </svg>)
//   );
// }