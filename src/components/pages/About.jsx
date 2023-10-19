/**
 * The external imports
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Cv2023 from "../../assets/Simon_despres.pdf";
import { FaWhatsappSquare } from "react-icons/fa";
/**
 * The internal imports
 */
const myInformations = [
  {
    id: 1,
    title: "Prénom :",
    value: "Simon",
  },
  {
    id: 2,
    title: "Nom de famille :",
    value: "Despres",
  },
  {
    id: 3,
    title: "Âge :",
    value: "28 ans",
  },
  {
    id: 4,
    title: "Nationalité :",
    value: "Française",
  },
  {
    id: 5,
    title: "Indépendant :",
    value: "Disponible",
  },
  {
    id: 6,
    title: "Adresse :",
    value: "Frontière Franco-Suisse",
  },
  {
    id: 7,
    title: "Téléphone :",
    value: "+33 6 14 42 17 80",
  },
  {
    id: 8,
    title: "Email :",
    value: "simondprs62790@gmail.com",
  },
  {
    id: 9,
    title: "What's App :",
    value: (
      <a
        href="https://wa.me/33614421780"
        rel="noreferrer"
        // target="_blank"
        className="text-[#3DE05B] text-2xl relative -top-1"
      >
        <FaWhatsappSquare />
      </a>
    ),
  },
  {
    id: 10,
    title: "Langue :",
    value: "Français, Anglais",
  },
];

export default function About() {
  return (
    <>
      <div className=" container mx-auto">
        <header className="title-section">
          <h1 className="bio flex justify-center">
            <div>
              <font className="text-white">À propos </font>
              <span> de moi</span>
            </div>
          </h1>
          <span className="title-bg">CV</span>
        </header>
      </div>
      <section className="mx-56">
        <div className="grid grid-rows-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="custom-title">informations personnelles</h3>
              <ul className="flex flex-wrap">
                {myInformations.map((info) => (
                  <li key={info.id} className="w-1/2 text-xs pb-3 flex">
                    <span className="text-gray-500">{info.title}</span>
                    <span className="pl-1">{info.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>diagramme</div>
          </div>
        </div>
        <div>
          <p>mes compétences </p>
        </div>
      </section>
    </>
  );
}
