"use client";

import Dossier from "@/Components/Dossier";
import Fichier from "@/Components/Fichier";
import Shortcut from "@/Components/Shortcut";
import Lock from "@/Components/Lock";

import { useState } from "react";
import "./page.css";

export default function Home() {
  const [lock_Niv1_PostIt, setLock_Niv1_PostIt] = useState(true);
  const [lock_Niv1_Rapport, setLock_Niv1_Rapport] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main>
      <section>
        <Dossier nomFichier="niveau 1" locked={false}>
          <Shortcut
            openFile={() => setActiveIndex(10)}
            nomFichier="Rapport_de_Situation"
          />
          <Shortcut
            openFile={() => setActiveIndex(1)}
            nomFichier="Carte de membre"
          />
          <Dossier nomFichier="image" locked={false}>
            <Shortcut
              openFile={() => setActiveIndex(2)}
              nomFichier="BLB_Tournament.jpeg"
            />
            <Shortcut
              openFile={() => setActiveIndex(3)}
              nomFichier="BLB_Explorer.jpeg"
            />
            <Shortcut
              openFile={() => setActiveIndex(4)}
              nomFichier="CoupeRegional.jpeg"
            />
          </Dossier>
          <Dossier
            nomFichier="post-it"
            locked={lock_Niv1_PostIt}
            openFile={() => setActiveIndex(5)}
          >
            <Shortcut
              openFile={() => setActiveIndex(6)}
              nomFichier="Tache_a_faire"
            />
          </Dossier>
          <Dossier nomFichier="cibles">
            <Shortcut nomFichier="Scores" openFile={() => setActiveIndex(7)} />
          </Dossier>
          <Dossier
            nomFichier="rapport_final"
            locked={lock_Niv1_Rapport}
            openFile={() => setActiveIndex(8)}
          >
            <Shortcut
              openFile={() => setActiveIndex(9)}
              nomFichier="Rapport_Niveau1.pdf"
            />
          </Dossier>
        </Dossier>

        <Dossier nomFichier="niveau 2" locked={true}></Dossier>
        <Dossier nomFichier="niveau 3" locked={true}></Dossier>
      </section>
      <section>
        <Fichier
          closeFile={() => setActiveIndex(0)}
          onShow={activeIndex === 10}
          nomFichier="Rapport de Situation"
          imgUrl="/IMG/Niv1/rapport0.jpg"
        />
        <Fichier
          closeFile={() => setActiveIndex(0)}
          onShow={activeIndex === 1}
          nomFichier="Carte de membre"
          imgUrl="/IMG/Niv1/member_card.png"
        />
        <Fichier
          closeFile={() => setActiveIndex(0)}
          onShow={activeIndex === 2}
          nomFichier="BLB_Tournament.jpeg"
          imgUrl="/IMG/Niv1/blb_tournament.jpg"
        />
        <Fichier
          closeFile={() => setActiveIndex(0)}
          onShow={activeIndex === 3}
          nomFichier="BLB_Explorer"
          imgUrl="/IMG/Niv1/blb.jpg"
        />
        <Fichier
          closeFile={() => setActiveIndex(0)}
          onShow={activeIndex === 4}
          nomFichier="CoupeRegional.jpeg"
          imgUrl="/IMG/Niv1/coupe_regional.jpg"
        />
        <Lock
          nomLock="Mot de passe dossier post-it"
          code="4C617261"
          locked={lock_Niv1_PostIt}
          onShow={activeIndex === 5}
          unlocked={() => setLock_Niv1_PostIt(false)}
          closeFile={() => setActiveIndex(0)}
        />
        <Fichier
          closeFile={() => setActiveIndex(0)}
          onShow={activeIndex === 6}
          nomFichier="Tache a faire"
          imgUrl="/IMG/Niv1/post_it.png"
        />
        <Fichier
          closeFile={() => setActiveIndex(0)}
          onShow={activeIndex === 7}
          nomFichier="Score"
          imgUrl="/IMG/Niv1/score.png"
        />
        <Lock
          nomLock="Mot de passe dossier rapport"
          code="4B757274"
          locked={lock_Niv1_Rapport}
          onShow={activeIndex === 8}
          unlocked={() => setLock_Niv1_Rapport(false)}
          closeFile={() => setActiveIndex(0)}
        />
        <Fichier
          closeFile={() => setActiveIndex(0)}
          onShow={activeIndex === 9}
          nomFichier="Rapport du niveau 1"
          imgUrl="/IMG/Niv1/rapport1.jpg"
        />
      </section>
    </main>
  );
}
