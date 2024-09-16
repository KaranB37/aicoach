import Cardsection from "@/Components/Cardsection/Cardsection";
import Cards from "@/Components/Cardsection/Cardsection";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Layout from "@/Components/Layout/Layout";
import Promptscroll from "@/Components/promptscroll/promptscroll";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <Hero />
      <Promptscroll />
      <Cardsection />
      <Footer />
    </Layout>
  );
}
