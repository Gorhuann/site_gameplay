"use client";

import Dossier from "@/Components/Dossier";
import "./page.css";
import Draggable from "react-draggable";
import Fichier from "@/Components/Fichier";

export default function Home() {
  return (
    <main>
      <section>
        <div id="displayWindows">
          <Fichier></Fichier>
        </div>
        <div id="displayFiles">
          <Dossier nomFichier="niveau 1">
            <Dossier></Dossier>
            <Dossier></Dossier>
            <Dossier></Dossier>
          </Dossier>
          <Dossier nomFichier="niveau 2"></Dossier>
          <Dossier nomFichier="niveau 3"></Dossier>
        </div>
      </section>
    </main>
  );
}
