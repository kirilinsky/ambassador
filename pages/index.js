import Footer from "../components/Footer";
import Header from "../components/Header";
import BonusesView from "../views/Bonuses";
import LoyalView from "../views/Loyal";
import ProductsView from "../views/Product";

export default function Home() {
  return (
    <div>
      <Header />
      <ProductsView />
      <LoyalView />
      <BonusesView />
      <Footer/>
    </div>
  )
}
