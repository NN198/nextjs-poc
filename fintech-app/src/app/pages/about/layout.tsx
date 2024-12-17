import "./about.css"
import {Roboto_Slab} from "next/font/google"

const inter = Roboto_Slab({weight: '500', subsets: ["cyrillic"]})

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className = {inter.className}>
            <header>this is the about layout</header>
          {children}
        </body>
      </html>
    );
  }