"use client";

import Dossier from "@/Components/Dossier";
import Fichier from "@/Components/Fichier";
import Shortcut from "@/Components/Shortcut";
import Lock from "@/Components/Lock";

import { useState } from "react";
import "./page.css";

export default function Home() {
  const [lockNiv1, setLockNiv1] = useState(true);

  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <main>
      <section>
        <Dossier locked={lockNiv1} nomFichier="niveau 1">
          <Shortcut
            openFile={() => setActiveIndex(true)}
            nomFichier="Post-it"
          ></Shortcut>
          <Shortcut
            openFile={() => setActiveIndex(true)}
            nomFichier="Carte de membre"
          ></Shortcut>
          <Dossier nomFichier="image"></Dossier>
          <Dossier nomFichier="rapport"></Dossier>
        </Dossier>
        <Dossier nomFichier="niveau 2"></Dossier>
        <Dossier nomFichier="niveau 3"></Dossier>
      </section>
      <section>
        <Fichier closeFile={() => setActiveIndex(false)} onShow={activeIndex} />
        <Lock
          nomLock="Mot de passe dossier niveau 1"
          code="arcade"
          locked={lockNiv1}
          unlocked={() => setLockNiv1(false)}
        />
      </section>
    </main>
  );
}
