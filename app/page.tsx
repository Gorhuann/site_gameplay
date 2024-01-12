"use client";

import Dossier from "@/Components/Dossier";
import Fichier from "@/Components/Fichier";
import Shortcut from "@/Components/Shortcut";
import Lock from "@/Components/Lock";

import { useState } from "react";
import "./page.css";

export default function Home() {
  const [lock_Niv1_PostIt, setLock_Niv1_PostIt] = useState(true);
  const [window_LockNiv1_PostIt, setWindow_LockNiv1_PostIt] = useState(false);

  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <main>
      <section>
        <Dossier nomFichier="niveau 1" locked={false}>
          <Shortcut
            openFile={() => setActiveIndex(true)}
            nomFichier="Carte de membre"
          ></Shortcut>
          <Dossier nomFichier="image" locked={false}></Dossier>
          <Dossier
            nomFichier="post-it"
            locked={lock_Niv1_PostIt}
            openFile={() => setWindow_LockNiv1_PostIt(true)}
          >
            <Shortcut
              openFile={() => setActiveIndex(true)}
              nomFichier="Tache à faire !"
            />
          </Dossier>
          <Dossier nomFichier="rapport" locked={false}></Dossier>
        </Dossier>

        <Dossier nomFichier="niveau 2"></Dossier>
        <Dossier nomFichier="niveau 3"></Dossier>
      </section>
      <section>
        <Fichier closeFile={() => setActiveIndex(false)} onShow={activeIndex} />
        <Lock
          nomLock="Mot de passe dossier post-it"
          code="4c617261"
          locked={lock_Niv1_PostIt}
          onShow={window_LockNiv1_PostIt}
          unlocked={() => setLock_Niv1_PostIt(false)}
          closeFile={() => setWindow_LockNiv1_PostIt(false)}
        />
      </section>
    </main>
  );
}
