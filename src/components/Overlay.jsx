import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faCircleDown } from '@fortawesome/free-solid-svg-icons'

import opquast from "../media/badge_confirme.svg";
import profile from "../media/profile.jpeg";
import cv from "../media/cv_perrine_oswald.pdf";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-xl w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 m-auto">
            <div className="w-full">
              <img className="rounded-full " src={profile} alt="Photo de Perrine Oswald"/>
            </div>
            <div className="w-full my-auto pb-10">
              <h1 className="mb-1 text-6xl text-center font-semibold">Perrine Oswald</h1>
            </div>
          </div>
          <p className="text-center text-4xl mt-10">Développeuse web fullstack</p><br/>
          <p className="text-center text-3xl">Experte en Accessibilité et Qualité web</p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 text-center mt-10">
            <div className="w-full">
              <a href="https://www.linkedin.com/in/perrine-oswald/" target="_blank" rel="noopener noreferrer">
                <span className="text-6xl socialbtn linkedin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </a>
            </div>
            <div className="w-full">
              <a href="https://directory.opquast.com/fr/certificat/PRBTQG/">
                <img src={opquast} alt="Logo OPQUAST" className="w-20 mx-auto"/>
              </a>
            </div>
            <div className="w-full">
              <button className="dowanload-btn">
                <a href={cv} download="CV_Perrine_Oswald.pdf">
                  <span className="text-base">
                    <FontAwesomeIcon icon={faDownload} />
                  </span>
                  <span className="ml-2">
                    Télécharger mon CV
                  </span>
                </a>
              </button>
              <span className="flex justify-center text-sm mt-2">
                  .pdf - 905,54 Ko
              </span>
            </div>
          </div>
          <p className="animate-bounce mt-6 text-center text-3xl">
            <FontAwesomeIcon icon={faCircleDown} />
          </p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">PS: I never test</p>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>React Native</li>
            <li>VueJS</li>
            <li>Tailwind</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>NodeJS</li>
            <li>tRPC</li>
            <li>NestJS</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-500">
            I'm very expensive but you won't regret it
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:(+42) 4242-4242-424242">(+42) 4242-4242-424242</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
