import "@/assets/products/products.scss";
import {fetchLanguage} from "@/util/fetchLanguage";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ProductSwiper from "@/components/pages/products/ProductSwiper";
import ProductContact from "@/components/pages/products/ProductContact";
import PlugValve from "@/components/pages/products/PlugValve";
import PlugValve2 from "@/components/pages/products/PlugValve2";

export default async function PlugValvePage({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);

    const productImageList = [
        "/images/sub/products/plug/kcl-plug-valve-1.jpg",
        "/images/sub/products/plug/kcl-plug-valve-2.jpg",
        "/images/sub/products/plug/kcl-plug-valve-3.jpg",
        "/images/sub/products/plug/kcl-plug-valve-4.jpg",
        "/images/sub/products/plug/kcl-plug-valve-6.jpg",
        "/images/sub/products/plug/kcl-plug-valve-7.jpg",
        "/images/sub/products/plug/kcl-plug-valve-8.jpg",
        "/images/sub/products/plug/kcl-plug-valve-9.jpg",
        "/images/sub/products/plug/kcl-plug-valve-10.jpg",
        "/images/sub/products/plug/kcl-plug-valve-11.jpg",
        "/images/sub/products/plug/kcl-plug-valve-12.jpg",
        "/images/sub/products/plug/kcl-plug-valve-13.jpg",
        "/images/sub/products/plug/kcl-plug-valve-14.jpg",
    ];

    return (
        <>
            <Header language={language}/>
            <div className="sub-banner4" style={{background: "url(/images/sub/products/product-bg-01.jpg) no-repeat 50% 0", backgroundSize: "cover"}}>
                <div className="banner-text">
                    <div>
                        <p className="banner-text-title">{language?.product_03_01}</p>
                        <p className="banner-text-01">{language?.product_03_02}</p>
                    </div>
                </div>
            </div>
            <div className="container2">
                <section className="product-section1">
                    <h2>{language?.product_03_12}</h2>
                    <PlugValve language={language}/>
                </section>
                <section className="product-section1">
                    <h2>{language?.product_03_31}</h2>
                    <PlugValve2 language={language}/>
                </section>

                <div className="ourClients">
                <h2>{language?.product_08_63}</h2>
                <ProductSwiper productImageList={productImageList}/>
                </div>

                <ProductContact language={language}/>
            </div>
            <Footer language={language}/>
        </>
    );
}
