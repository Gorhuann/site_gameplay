import Dossier from "@/Components/Dossier";
import "./page.css";

export default function Home() {
  return (
    <main>
      <section>
        <Dossier nomFichier="niveau 1">
          <Dossier></Dossier>
          <Dossier></Dossier>
          <Dossier></Dossier>
        </Dossier>
        <Dossier nomFichier="niveau 2"></Dossier>
        <Dossier nomFichier="niveau 3"></Dossier>
      </section>
      <section>
        <p>caca</p>
      </section>
    </main>
  );
}
