import Nav from "./Components/Nav/Nav";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex p-8">
        <Nav />
        <div className="mt-16 pl-8 w-full">
          {children}
          </div>
        
      </body>
    </html>
  );
}