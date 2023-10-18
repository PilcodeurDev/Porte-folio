/* eslint-disable react/no-unescaped-entities */
/**
 * The external imports
 */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

/**
 * The internal imports
*/
import Navbar from "../Navbar";


export default function Home() {
  return (
    <>
      <div className="">
        <div className="block"></div>
        <div className="grid grid-cols-2">
          <div className="fixed left-10 top-10">
            <div className="bg-image"></div>
          </div>
          <div className="fixed ml-[48%] top-[18%]">
            <div className="w-2/3">
              <h1 className="bio flex flex-col uppercase ml-16">
                <font>je m'appelle</font>
                <font>simon despres .</font>
                <font className="text-white">concepteur de</font>
                <font className="text-white">sites web</font>
              </h1>
              <p className="my-4 leading-8">
                Je suis concepteur Web ainsi que développeur front-end basé à la
                frontière Franco-Suisse. Je suis passioné par la création
                d'interface utilisateur intéractive et dynamique qui captivera
                vos visiteurs dès les premières secondes.
              </p>
              <Link to="/about" className="button">
                <span className="pl-7 pr-5 py-3">plus à propos de moi</span>
                <span className="button-arrow-icon">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                  />
                </span>
              </Link>
            </div>
          </div>
          {/* <Navbar /> */}
        </div>
      </div>
    </>
  );
}
