import Head from "next/head";
import { useState } from "react";

export default function MoreSkills() {
  const [language, setLanguage] = useState("fr");

  return (
    <div className="dark min-h-screen flex flex-col">
      <Head>
        <title>{language === "fr" ? "Compétences Supplémentaires" : "Additional Skills"}</title>
        <meta name="description" content="Additional skills page" />
        <link rel="icon" href="/pf.ico" />
      </Head>
      <main className="bg-gray-900 flex-grow px-4 md:px-10 lg:px-20 pt-20">
        <section className="py-10 relative mb-20 min-h-screen">
          <div className="absolute inset-0 bg-gray-600 opacity-50 rounded-lg"></div> {/* Background with low opacity */}
          <div className="relative z-10 p-4"> {/* Added padding for spacing */}
            <h3 className="text-3xl py-1 text-teal-400 text-center mb-10">{language === "fr" ? "Compétences Supplémentaires" : "Additional Skills"}</h3> {/* Added mb-10 for margin bottom */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full aspect-w-1 aspect-h-1 relative">
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h4 className="text-xl font-medium text-white">{language === "fr" ? "Compétence 1" : "Skill 1"}</h4>
                    <ul className="list-disc list-inside text-gray-400 text-left mx-auto w-max"> {/* Align text to the left */}
                      <li>Compétence 1.1</li>
                      <li>Compétence 1.2</li>
                      <li>Compétence 1.3</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full aspect-w-1 aspect-h-1 relative">
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h4 className="text-xl font-medium text-white">{language === "fr" ? "Compétence 2" : "Skill 2"}</h4>
                    <ul className="list-disc list-inside text-gray-400 text-left mx-auto w-max"> {/* Align text to the left */}
                      <li>Compétence 2.1</li>
                      <li>Compétence 2.2</li>
                      <li>Compétence 2.3</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full aspect-w-1 aspect-h-1 relative">
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h4 className="text-xl font-medium text-white">{language === "fr" ? "Compétence 3" : "Skill 3"}</h4>
                    <ul className="list-disc list-inside text-gray-400 text-left mx-auto w-max"> {/* Align text to the left */}
                      <li>Compétence 3.1</li>
                      <li>Compétence 3.2</li>
                      <li>Compétence 3.3</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full aspect-w-1 aspect-h-1 relative">
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h4 className="text-xl font-medium text-white">{language === "fr" ? "Compétence 4" : "Skill 4"}</h4>
                    <ul className="list-disc list-inside text-gray-400 text-left mx-auto w-max"> {/* Align text to the left */}
                      <li>Compétence 4.1</li>
                      <li>Compétence 4.2</li>
                      <li>Compétence 4.3</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full aspect-w-1 aspect-h-1 relative">
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h4 className="text-xl font-medium text-white">{language === "fr" ? "Compétence 5" : "Skill 5"}</h4>
                    <ul className="list-disc list-inside text-gray-400 text-left mx-auto w-max"> {/* Align text to the left */}
                      <li>Compétence 5.1</li>
                      <li>Compétence 5.2</li>
                      <li>Compétence 5.3</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full aspect-w-1 aspect-h-1 relative">
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h4 className="text-xl font-medium text-white">{language === "fr" ? "Compétence 6" : "Skill 6"}</h4>
                    <ul className="list-disc list-inside text-gray-400 text-left mx-auto w-max"> {/* Align text to the left */}
                      <li>Compétence 6.1</li>
                      <li>Compétence 6.2</li>
                      <li>Compétence 6.3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}