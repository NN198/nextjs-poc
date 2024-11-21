// import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata= {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Repository = {
  id: number;
  name: string;
  full_name: string;
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
{
  const res = await fetch('https://api.github.com/repos/vercel/next.js',
    {
      cache: 'no-cache'
    }
  )
  const data: Repository = await res.json()

  return (
    <html lang = "en">
      <body>
        <h1 className="font-bold-text-3xl">
          {data.name}
        </h1>
        {children}
      </body>
    </html>
  )
}



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
