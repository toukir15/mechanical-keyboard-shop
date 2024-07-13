import Benifits from "../components/home/Benifits";
import Hero from "../components/home/Hero";
import BrandMarquee from "../components/home/BrandMarquee";
import FeatureProducts from "../components/home/FeatureProducts";
import CustomerReviews from "../components/home/CustomerReview";

export default function Home() {
  return (
    <div>
      {/* hero section  */}
      <Hero />
      <div className="container mx-auto">
        {/* benefit section  */}
        <Benifits />
        {/* feture products  */}
        <FeatureProducts />
        {/* brand section  */}
        <BrandMarquee />
        {/* review  */}
        <CustomerReviews />
      </div>
    </div>
  );
}
