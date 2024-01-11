"use client";

import Dossier from "@/Components/Dossier";
import Fichier from "@/Components/Fichier";
import Shortcut from "@/Components/Shortcut";

import { useState } from "react";
import "./page.css";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <main>
      <section>
        <Dossier nomFichier="niveau 1">
          <Shortcut
            openFile={() => setActiveIndex(true)}
            nomFichier="post-it"
          ></Shortcut>
          <Dossier nomFichier="image"></Dossier>
          <Dossier nomFichier="rapport"></Dossier>
        </Dossier>
        <Dossier nomFichier="niveau 2"></Dossier>
        <Dossier nomFichier="niveau 3"></Dossier>
      </section>
      <section>
        <Fichier closeFile={() => setActiveIndex(false)} onShow={activeIndex} />
      </section>
    </main>
  );
}
