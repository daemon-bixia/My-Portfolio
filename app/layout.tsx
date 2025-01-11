import Footer from "@/components/layout/footer/footer";
import Navbar from "@/components/layout/navbar/navbar";

import "./globals.css";


// **** Types **** //

interface IProps {
  children: React.ReactNode
}


// **** Variables **** //

export const metadata = {
  title: "Portfolio",
  description: "Web development portfolio website.",
}


// **** Component **** //

const RootLayout = ({
  children,
}: IProps) => {
  return (
    <html lang="en">
      <body>
        {/* Navigation Menu  */}
        <Navbar />

        {/* Main Section  */}
        <main id="mainContent">
          {children}
        </main>

        {/* Footer  */}
        <Footer />
      </body>
    </html>
  )
}


// **** Default export **** //

export default RootLayout;
