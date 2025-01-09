import "@/assets/products/products.scss";
import {fetchLanguage} from "@/util/fetchLanguage";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ProductSwiper from "@/components/pages/products/ProductSwiper";
import ProductContact from "@/components/pages/products/ProductContact";
import ButterflyValve from "@/components/pages/products/ButterflyValve";



export default async function ButterflyValvePage({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);

    const productImageList = [
        "/images/sub/products/butterfly/kcl-butterfly-valve-1.jpg",
        "/images/sub/products/butterfly/kcl-butterfly-valve-2.jpg",
        "/images/sub/products/butterfly/kcl-butterfly-valve-3.jpg",
        "/images/sub/products/butterfly/kcl-butterfly-valve-4.jpg",
        "/images/sub/products/butterfly/kcl-butterfly-valve-6.jpg",
        "/images/sub/products/butterfly/kcl-butterfly-valve-7.jpg",
        "/images/sub/products/butterfly/kcl-butterfly-valve-8.jpg",
    ];

    return (
        <>
            <Header language={language}/>
            <div className="sub-banner4" style={{background: "url(/images/sub/products/product-bg-05.jpg) no-repeat 50% 0", backgroundSize: "100% auto"}}>
                <div className="banner-text">
                    <div>
                        <p className="banner-text-title">{language?.product_05_01}</p>
                        <p className="banner-text-01">{language?.product_05_02}</p>
                        <div>
                            <div>
                                <p>{language?.product_05_04}</p>
                                <p>{language?.product_05_05}</p>
                            </div>
                            <div>
                                <p>{language?.product_05_06}</p>
                                <p>{language?.product_05_07}</p>
                            </div>
                            <div>
                                <p>{language?.product_05_08}</p>
                                <p>{language?.product_05_09}</p>
                            </div>
                            <div>
                                <p>{language?.product_05_10}</p>
                                <p>{language?.product_05_11}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <section className="product-section1">
                    <h2>{language?.product_05_12}</h2>
                    <ButterflyValve language={language}/>
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
