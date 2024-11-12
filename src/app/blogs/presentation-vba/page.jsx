import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PresentationVba = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="article-content">
        {/* <Head>
          <title>{article.title}</title>
          <meta name="description" content={article.excerpt} />
        </Head> */}
        <div className="container mx-auto mt-8">
          <div className="md:w-3/5 mx-auto">
            <iframe
              className="w-full md:h-[397px] rounded-md"
              src="https://www.youtube.com/embed/EmwXs4AmC64?si=OnO4L_2ssu661hkg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="md:w-3/5 mx-auto mt-8 mb-16">
            <h1 className="text-[24px] font-semibold my-3">
              Calculateur boîtes de vitesse automatiques
            </h1>
            <div className="">
              <p className="mb-5">
                VBA calculateur Renault est une entreprise spécialisée dans la
                vente de calculateur Renault et d&apos;autres marques
              </p>

              <p className="mb-5">
                Spécialiste en programmation et clonage de calculateur boîtes de
                vitesses automatiques EDC pour Captur, Scénic, Mégane 3, Clio RS
                et Clio 4. Vous pouvez aussi consulter l’outil d&apos;aide en
                ligne:{" "}
                <Link
                  href="https://laboiteautomatique.com/aide-en-ligne"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://laboiteautomatique.com/aide-en-ligne
                </Link>
                . N’hésitez pas à nous contacter pour acheter un calculateur
                Renault EDC neuf ou reconditionné.
              </p>

              <p className="mb-5">
                Pour plus d&apos;informations, contactez-nous sur:
                <br />
                <Link
                  href="mailto:contact@laboiteautomatique.com"
                  className="text-blue-400"
                >
                  contact@laboiteautomatique.com
                </Link>{" "}
                ou au{" "}
                <Link href="callto:06 22 48 82 69" className="text-blue-400">
                  06 22 48 82 69
                </Link>{" "}
              </p>

              <p className="mb-5">Suivez-nous sur nos réseaux sociaux:</p>

              <p className="mb-3">
                Twitter:{" "}
                <Link
                  className="text-blue-400"
                  href="https://twitter.com/vbacalculateur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://twitter.com/vbacalculateur
                </Link>
              </p>

              <p className="mb-3">
                Facebook:{" "}
                <Link
                  className="text-blue-400"
                  href="https://www.facebook.com/profile.php?id=61554187663999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/profile.php?id=61554187663999
                </Link>
              </p>

              <p className="mb-3">
                Instagram:{" "}
                <Link
                  className="text-blue-400"
                  href="https://www.instagram.com/vbacalculateur/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.instagram.com/vbacalculateur/
                </Link>
              </p>

              <p className="mb-5">
                LinkedIn:{" "}
                <Link
                  className="text-blue-400"
                  href="https://www.linkedin.com/company/vba-calculateur/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/company/vba-calculateur/
                </Link>
              </p>
            </div>

            <div className="mt-[35px]">
              <Link href="/contact">
                <button className="buttonCheckBlue">
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

export default PresentationVba;