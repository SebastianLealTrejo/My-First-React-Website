
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <header className="bg-blue-600">
      <nav>
        <li>
          <a href=""> Home </a>
        </li>
        <li>
          <a href=""> Projects </a>
        </li>
        <li>
          <a href=""> about </a>
        </li>
      </nav>
    </header>
    <main>
      <div>

        <h2> The purpose of this website </h2>
        <p> The main idea behind this website is for me to display my projects and ideas while also getting practice with next.js </p>
         
        <a href="www.linkedin.com/in/sebastian-leal-trejo"></a>

      </div>
    </main>
    </>
  );
}
