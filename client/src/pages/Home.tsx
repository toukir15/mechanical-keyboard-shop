import Benifits from "../components/home/Benifits";
import Hero from "../components/home/Hero";
import BrandMarquee from "../components/home/BrandMarquee";
import FeatureProducts from "../components/home/FeatureProducts";
import CustomerReviews from "../components/home/CustomerReview";
import KeyboardSize from "@/components/home/KeyboardSize";
import KeyboardSwitches from "@/components/home/KeyboardSwitches";

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
        {/* shop keyboard by size  */}
        <KeyboardSize />
        {/* keyboard switches  */}
        <KeyboardSwitches />
        {/* brand section  */}
        <BrandMarquee />
        {/* review  */}
        <CustomerReviews />
      </div>
    </div>
  );
}
