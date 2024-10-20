import "./ui/global.css";
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className="bg-gray-900 text-white py-4">
          Hecho con ❤️ por{" "}
          <a
            href="https://www.linkedin.com/in/andresvpineros/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brandon Vargas
          </a>
        </footer>
      </body>
    </html>
  );
}
