import { Suspense } from "react";

import Header from "@/components/header/header";
import HeroSection from "@/components/hero-section/hero-section";
import FilterSection from "@/components/filter-section/filter-section";
import ProductCatalogueGrid from "@/components/product-catalogue/product-catalogue-grid";
import ProductCatalogueSkeleton from "@/components/product-catalogue/product-catalogue-skeleton";
import Pagination from "@/components/pagination/pagination";
import Footer from "@/components/footer/footer";

import styles from "./page.module.css";

// The main/home page for the Kiwi Shop.
export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.main}>
        <HeroSection />

        <FilterSection />

        <Suspense fallback={<ProductCatalogueSkeleton />} >
          <ProductCatalogueGrid />
        </Suspense>

        <Pagination />
      </main>

      <Footer />
    </div>
  );
}