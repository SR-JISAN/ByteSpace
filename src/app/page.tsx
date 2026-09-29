import BrandSection from "@/components/shear_components/BrandSection";
import HeroBanner from "@/components/shear_components/HeroBanner";
import LearningPathSection from "@/components/shear_components/LearningPathSection";
import PassionSection from "@/components/shear_components/PassionSection";
import Product from "@/components/shear_components/Product";




export default function Home() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <BrandSection></BrandSection>
      <PassionSection></PassionSection>
      <Product></Product>
      <LearningPathSection></LearningPathSection>
    </>
  );
}
