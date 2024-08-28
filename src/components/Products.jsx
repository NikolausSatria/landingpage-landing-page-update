import React from "react";

function Products() {
  return (
    <section id="products" className="py-12 md:py-24 lg:py-32">
      <div className="px-8 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Products</h2>
          <p className=" text-md md:text-xl text-muted-foreground">
            We blend innovative design with cutting-edge technology to deliver
            solutions that are not only visually appealing but also functional
            and user-friendly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <img
              src="/Landingpage.png"
              width={400}
              height={300}
              alt="Product 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Landing Page</h3>
              <p className="text-muted-foreground">
                We design and develop compelling landing pages optimized for
                conversion, ensuring your marketing campaigns achieve maximum
                impact.
              </p>
              {/*
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-4"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                  */}
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <img
              src="/stuff.keren.png"
              width={400}
              height={300}
              alt="Product 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Website</h3>
              <p className="text-muted-foreground">
                From sleek, modern designs to feature-rich e-commerce platforms,
                our websites are built to engage visitors and drive results.
              </p>
              {/** <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-4"
                    prefetch={false}
                  >
                    Learn More
                  </Link>*/}
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <img
              src="/frame8.png"
              width={400}
              height={300}
              alt="Product 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Web Application</h3>
              <p className="text-muted-foreground">
                Our custom web applications are crafted to streamline business
                processes, enhance productivity, and provide seamless user
                experiences.
              </p>
              {/*
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-4"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
