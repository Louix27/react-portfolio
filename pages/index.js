import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import deved from "../public/louis.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <div className="dark">
      <Head>
        <title>Palié Louis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`py-5 bg-gray-800 shadow-md fixed w-full z-50 transition-transform duration-300 ${showHeader ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <nav className="flex justify-between items-center px-4 md:px-10">
          <a href="#accueil" className="font-burtons text-xl text-white">Portofolio</a> {/* Lien d'ancrage */}
          <ul className="flex items-center space-x-4 md:space-x-8">
            <li>
              <a href="#accueil" className="text-teal-400 hover:underline">{language === "fr" ? "Accueil" : "Home"}</a>
            </li>
            <li>
              <a href="#competences" className="text-teal-400 hover:underline">{language === "fr" ? "Mes Compétences" : "My Skills"}</a>
            </li>
            <li>
              <a href="#projets" className="text-teal-400 hover:underline">{language === "fr" ? "Mes Projets" : "My Projects"}</a>
            </li>
            <li>
              <button onClick={toggleLanguage} className="text-teal-400 hover:underline">
                {language === "fr" ? "EN" : "FR"}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-gray-900 px-10 md:px-20 lg:px-40 pt-20">
        <section id="accueil" className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-left md:mr-20"> {/* Increased margin-right */}
              <h2 className="text-5xl py-2 text-teal-400 font-medium md:text-6xl">
                Palié Louis
              </h2>
              <h3 className="text-2xl py-2 text-white md:text-3xl flex items-center">
                {language === "fr" ? (
                  <>
                    Jeune Développeur <FaLaptopCode className="text-teal-400 ml-2" />
                  </>
                ) : (
                  <>
                    Young Developer <FaLaptopCode className="text-teal-400 ml-2" />
                  </>
                )}
              </h3>
              <p className="text-md py-5 leading-8 text-gray-200 max-w-xl md:text-xl">
                {language === "fr" ? (
                  <>
                    Louis, 19 ans, jeune développeur. <br />
                    Étudiant&nbsp;en&nbsp;deuxième&nbsp;année&nbsp;de&nbsp;<strong><i>BUT&nbsp;Informatique</i></strong>&nbsp;à&nbsp;l&nbsp;'IUT&nbsp;de&nbsp;Lens. <br />
                    Passionné par le développement web, je suis toujours à la recherche de nouveaux projets.
                  </>
                ) : (
                  <>
                    Louis, 19 years old, young developer. <br />
                    Second year student in Computer Science at IUT de Lens. <br />
                    Passionate about web development, I am always looking for new projects.
                  </>
                )}
              </p>
              <div className="text-5xl flex gap-16 py-3 text-gray-400">
                <a href="https://github.com/Louix27" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="text-teal-400"/>
                </a>
                <a href="https://www.linkedin.com/in/louis-pali%C3%A9-b50a3631a/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin className="text-teal-400"/>
                </a>
                <a href="mailto:louis.palie@gmail.com">
                  <AiFillMail className="text-teal-400"/>
                </a>
              </div>
            </div>
            <div className="mt-10 md:mt-0 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96 md:ml-40 ">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}