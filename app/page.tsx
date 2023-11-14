import Fichier from "@/Components/Fichier";
import "./page.css";

export default function Home() {
  return (
    <main>
      <section>
        <Fichier nomFichier="niveau 1">
          <Fichier></Fichier>
          <Fichier></Fichier>
          <Fichier></Fichier>
        </Fichier>
        <Fichier nomFichier="niveau 2"></Fichier>
        <Fichier nomFichier="niveau 3"></Fichier>
      </section>
      <section>
        <p>caca</p>
      </section>
    </main>
  );
}
