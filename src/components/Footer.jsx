import React from "react";
import Link from "next/link";

function Footer() {
  return (
      <footer className="bg-muted text-primary px-4 lg:px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; 2024 Modularity Solution. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </footer>
  );
}

export default Footer;
