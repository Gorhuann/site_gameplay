"use client";

import Dossier from "@/Components/Dossier";
import "./page.css";
import Fichier from "@/Components/Fichier";
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <main>
      <section>
        <Dossier nomFichier="niveau 1">
          <Dossier openFile={() => setActiveIndex(!activeIndex)}></Dossier>
          <Dossier></Dossier>
          <Dossier></Dossier>
        </Dossier>
        <Dossier nomFichier="niveau 2"></Dossier>
        <Dossier nomFichier="niveau 3"></Dossier>
      </section>
      <section>
        <Fichier onShow={activeIndex} />
      </section>
    </main>
  );
}
