import React from "react";
import "./global.css";
import Navbar from "@/components/Navbar";
import Providers from "./provider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-primary">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
