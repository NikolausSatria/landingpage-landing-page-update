import React from "react";

function Services() {
  return (
    <section id="services" className="bg-[#3E5B72] py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-8">
        <div className="space-y-5 text-center">
          <h2 className="text-3xl md:text-4xl text-[color:#fafafa] font-bold">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-[color:#fdfdfd]">
            Explore our comprehensive range of services to support your
            business.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-background rounded-lg shadow-lg p-6">
            <BriefcaseIcon className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold mt-4">Consulting</h3>
            <p className="text-muted-foreground mt-2">
              Our expert consultants provide tailored solutions to help your
              business thrive.
            </p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <CodeIcon className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold mt-4">Development</h3>
            <p className="text-muted-foreground mt-2">
              Our skilled developers create custom software and web applications
              to meet your unique needs.
            </p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <CogIcon className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold mt-4">Support</h3>
            <p className="text-muted-foreground mt-2">
              Our dedicated support team is here to help you every step of the
              way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function BriefcaseIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>)
    );
  }
  
  
  function CodeIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>)
    );
  }
  
  
  function CogIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M12 2v2" />
        <path d="M12 22v-2" />
        <path d="m17 20.66-1-1.73" />
        <path d="M11 10.27 7 3.34" />
        <path d="m20.66 17-1.73-1" />
        <path d="m3.34 7 1.73 1" />
        <path d="M14 12h8" />
        <path d="M2 12h2" />
        <path d="m20.66 7-1.73 1" />
        <path d="m3.34 17 1.73-1" />
        <path d="m17 3.34-1 1.73" />
        <path d="m11 13.73-4 6.93" />
      </svg>)
    );
  }

export default Services;
