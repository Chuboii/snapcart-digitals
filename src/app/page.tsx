import AdSlider from "@/components/ad slide/AdSlide";
import Image from "next/image";
import Menu from '@/components/menu bar/Menu'
import QuickAccess from "@/components/quick access/QuickAccess";
import TechnologyStore from "@/components/technology store/TechnologyStore";
import FashionStore from "@/components/fashion store/FashionStore";
import HomeStore from "@/components/home store/HomeStore";
import AllProducts from "@/components/all products/AllProducts";
import MobileSearchForm from "@/components/mobile search form/MobileSearchForm";


export default function Home() {
  return (
    <main className="">
      <section className="flex align-center px-16 py-5">
        <Menu />
        <MobileSearchForm/>
      <AdSlider />       
      </section>
 
      <section>
        <QuickAccess />
        <TechnologyStore />
        <FashionStore />
        <HomeStore />
        <AllProducts/>
      </section>
    </main>
  );
}
