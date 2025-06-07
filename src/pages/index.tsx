import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import PrimaryContent from "@/components/content/Primary";
import SecondaryContent from "@/components/content/Secondary";
import ThirdContent from "@/components/content/Third";
import FourthContent from "@/components/content/Fourth";
import FifthContent from "@/components/content/Fifth";
import Footer from "@/components/Footer";
import Editor from "@/components/TextEditor";

export default function Home() {
  return (
    <>
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