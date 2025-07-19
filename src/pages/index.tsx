import styles from "@/styles/Home.module.scss";
import Carousel from "@/components/Carousel";
import PrimaryContent from "@/components/content/Primary";
import SecondaryContent from "@/components/content/Secondary";
import ThirdContent from "@/components/content/Third";
import FourthContent from "@/components/content/Fourth";
import FifthContent from "@/components/content/Fifth";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Home | Solurh - Soluções em Recursos Humanos"
        description="Soluções em Recursos Humanos"
      />
      <main className={styles.main}>
        <Carousel />
        <article>
          <PrimaryContent />
          <SecondaryContent />
          <ThirdContent />
          <FourthContent />
          <FifthContent />
        </article>
      </main>
    </>
  )
}