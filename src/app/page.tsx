import BrandSection from "@/components/shear_components/BrandSection";
import Footer from "@/components/shear_components/Footer";
import HeroBanner from "@/components/shear_components/HeroBanner";
import LearningPathSection from "@/components/shear_components/LearningPathSection";
import PassionSection from "@/components/shear_components/PassionSection";
import PotentialSection from "@/components/shear_components/PotentialSection";
import Product from "@/components/shear_components/Product";
import ProfessionalGrowthSection from "@/components/shear_components/ProfessionalGrowthSection";
import ReviewSection from "@/components/shear_components/ReviewSection";




export default function Home() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <BrandSection></BrandSection>
      <PassionSection></PassionSection>
      <Product></Product>
      <LearningPathSection></LearningPathSection>
      <ProfessionalGrowthSection></ProfessionalGrowthSection>
      <PotentialSection></PotentialSection>
      <ReviewSection></ReviewSection>
      <Footer></Footer>
    </>
  );
}
