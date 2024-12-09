import "@/assets/products/products.scss";
import {fetchLanguage} from "@/util/fetchLanguage";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ProductSwiper from "@/components/pages/products/ProductSwiper";
import ProductContact from "@/components/pages/products/ProductContact";
import CastedBallValve from "@/components/pages/products/CastedBallValve";


export default async function CastedBallValvePage({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);

    const productImageList = [
        "/images/sub/products/casted/kcl-casted-ball-valve-1.jpg",
        "/images/sub/products/casted/kcl-casted-ball-valve-2.jpg",
        "/images/sub/products/casted/kcl-casted-ball-valve-3.jpg",
        "/images/sub/products/casted/kcl-casted-ball-valve-4.jpg",
        "/images/sub/products/casted/kcl-casted-ball-valve-6.jpg",
        "/images/sub/products/casted/kcl-casted-ball-valve-7.jpg",
        "/images/sub/products/casted/kcl-casted-ball-valve-8.jpg",
        "/images/sub/products/casted/kcl-casted-ball-valve-9.jpg",
        "/images/sub/products/casted/kcl-casted-ball-valve-10.jpg",
        "/images/sub/products/casted/kcl-casted-ball-valve-11.jpg",
        "/images/sub/products/casted/kcl-casted-ball-valve-12.jpg",
        "/images/sub/products/casted/kcl-casted-ball-valve-13.jpg",
    ];

    return (
        <>
            <Header language={language}/>
            <div className="sub-banner4" style={{background: "url(/images/sub/products/product-bg-02.png) no-repeat 50% 0", backgroundSize: "100% auto"}}>
                <div className="banner-text">
                    <div>
                        <p className="banner-text-title">{language?.product_02_01}</p>
                        <p className="banner-text-01">{language?.product_02_02}</p>
                        <div>
                            <div>
                                <p>{language?.product_02_04}</p>
                                <p>{language?.product_02_05}</p>
                            </div>
                            <div>
                                <p>{language?.product_02_06}</p>
                                <p>{language?.product_02_07}</p>
                            </div>
                            <div>
                                <p>{language?.product_02_08}</p>
                                <p>{language?.product_02_09}</p>
                            </div>
                            <div>
                                <p>{language?.product_02_10}</p>
                                <p>{language?.product_02_11}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <section className="product-section1">
                    <h2>{language?.product_02_12}</h2>
                    <CastedBallValve language={language}/>
                </section>

                <ProductSwiper productImageList={productImageList} />

                <ProductContact language={language}/>
            </div>
            <Footer language={language}/>
        </>
    );
}
