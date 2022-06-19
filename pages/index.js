import Header from "../components/Header";
import LoyalView from "../views/Loyal";
import ProductsView from "../views/Product";

export default function Home() {
  return (
    <div>
      <Header />
      <ProductsView />
      <LoyalView />
    </div>
  )
}
