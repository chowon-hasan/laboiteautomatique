import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReturnButton from "@/components/ReturnButton";

const pageDescription =
  "Video qui explique comment monter et demonter un calculateur pour boite automatique EDC clio 4, clio RS, Captur, megane 3, scenic 3.";

const RemplacmentPage = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="article-content">
        <Head>
          <title>video comment demonter remonter calculateur EDC</title>
          <meta name="description" content={pageDescription} />
        </Head>
        <div className="container mx-auto mt-[60px] px-6 md:px-0">
          <div className="md:w-3/5 mx-auto flex justify-between ">
            <div className="md:w-1/2">
              <ReturnButton />
            </div>
            <div className="">
              <p className="md:text-sm text-[12px]">
                <Link className="text-gray-400" href="/">
                  Home /
                </Link>{" "}
                <Link className="text-gray-400" href="/ressource/blogs">
                  Tuto - Blog /
                </Link>{" "}
                <Link className="text-blue-400" href="#">
                  Remplacement
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="md:w-3/5 mx-auto mt-8">
            <iframe
              className="w-full md:h-[397px] rounded-md"
              src="https://www.youtube.com/embed/6X72SXZhZ44?si=50iEt0fuIk1i5HeS"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="md:w-3/5 mx-auto mt-8 mb-16">
            <h1 className="text-[24px] font-semibold my-3">
              Remplacer calculateur EDC Renault
            </h1>
            <div className="">
              <p className="mb-5">
                Remplacement d&apos;un calculateur DC4 (boite EDC) GETRAG
                6DCT250.
              </p>

              <p className="mb-5">
                Calculateur (boite EDC) pour boite automatique Renault double
                embrayage DC4 (Getrag-6DCT250-continental)
              </p>

              <p className="mb-5">
                A2C30743000 01 K00 - A2C53374830 03 K01 - A2C30743100 -
                A2C73768907 00 K00
              </p>

              <p className="mb-5">Programmation et clonage</p>

              <p className="mb-5">
                Calculateur Megane, Captur, Clio IV Berlino; Clio IV Estate,
                Scenic IV, Grand Scenic IV Possibilité de venir programmer sur
                place si besoin.
              </p>

              <p className="mb-5">Codes defauts utiles :</p>

              <p className="mb-5">
                DTC174301 Circuit moteur embrayage 1 - Panne electrique non
                identifiée-
              </p>

              <p className="mb-5">
                DTC174311 Circuit moteur embrayage 1 - Court-circuit à la masse
              </p>

              <p className="mb-5">
                DTC174401 Circuit moteur embrayage 2 - Panne eléctrique non
                identifiée-
              </p>

              <p className="mb-5">
                DTC174411 Circuit moteur embrayage 2 - Court-circuit à la masse
              </p>

              <p className="mb-5">DTC17441C Circuit moteur embrayage 2</p>

              <p className="mb-5">
                DTC183892 Tambour de selection de vitesse 1 - Signal hors limite
                basse ou haute
              </p>

              <p className="mb-5">
                DTC185111 Signal moteur embrayage 2 - Court circuit à l masse-
              </p>

              <p className="mb-5">
                DTC185562 Signal moteur embrayage 2 - Signal non plausible-
              </p>

              <p className="mb-5">
                DTC185764 Moteur embrayage 2 - Incohérence signal-
              </p>

              <p className="mb-5">
                DTC189311 Drum 2 moteur - Court circtuit à la masse
              </p>

              <p className="mb-5">
                DTC189412 Circuit moteur tambour de selection vitesse 1-
                Court-circuit au + 12 volts
              </p>

              <p className="mb-5">
                DTC191001 Circuit capteur regime entrée 1 boite - Anomalie
                électronique interne-
              </p>

              <p className="mb-5">
                DTC191211 Circuit capteur regime entrée 1 boite - Court-circuit
                à la masse-
              </p>

              <p className="mb-5">
                DTC191311 Circuit capteur régime entrée 2 boite - Court circuit
                à la masse
              </p>

              <p className="mb-5">
                DTC404086 Info multiplexée pedale de frein uch invalide -
                Contacteur de frein invalide-
              </p>

              <p className="mb-5">
                DTCAAAB47 Calculateur - Anomalie électronique interne
              </p>

              <p className="mb-5">DTCAAB047 Panne electrique interne</p>

              <p className="mb-5">
                DF441 circuit moteur - tambour de sélection vitesses 2 - circuit
                ouvert
              </p>

              <p className="mb-5">
                DF442 circuit moteur tambour de selection vitesse 2 - tension
                d&apos;alimentation hors tolérance
              </p>

              <p className="mb-5">
                DF436 Tambour de selection de vitesse 2 - detection signal hors
                limite basse ou haute
              </p>

              <p className="mb-5">
                DF435 Tambour de selection de vitesses 2 - Detection signal hors
                limite basse ou haute
              </p>

              <p className="mb-5">
                DF232 Calculateur - Anomalie électronique interne
              </p>
            </div>

            <div className="mt-[35px]">
              <Link href="/contact">
                <button className="text-[#2C80EF] bg-transparent text-[15px] border border-[#2c80ef] py-2 px-3 rounded-md hover:bg-[#2C80EF] hover:text-white block">
                  <span>Contactez-nous</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default RemplacmentPage;
