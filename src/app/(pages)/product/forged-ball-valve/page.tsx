import "@/assets/products/products.scss";
import {fetchLanguage} from "@/util/fetchLanguage";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ProductSwiper from "@/components/pages/products/ProductSwiper";
import ProductContact from "@/components/pages/products/ProductContact";
import ForgedBallValve from "@/components/pages/products/ForgedBallValve";

export default async function ForgedBallValvePage({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);

    const productImageList = [
        "/images/sub/products/forged/forged-ball-valve-1.jpg",
        "/images/sub/products/forged/forged-ball-valve-2.jpg",
        "/images/sub/products/forged/forged-ball-valve-3.jpg",
        "/images/sub/products/forged/forged-ball-valve-4.jpg",
        "/images/sub/products/forged/forged-ball-valve-5.jpg",
        "/images/sub/products/forged/forged-ball-valve-6.jpg",
        "/images/sub/products/forged/forged-ball-valve-7.jpg",
        "/images/sub/products/forged/forged-ball-valve-8.jpg",
        "/images/sub/products/forged/forged-ball-valve-9.jpg",
        "/images/sub/products/forged/forged-ball-valve-10.jpg",
        "/images/sub/products/forged/forged-ball-valve-11.jpg",
        "/images/sub/products/forged/forged-ball-valve-12.jpg",
        "/images/sub/products/forged/forged-ball-valve-13.jpg",
        "/images/sub/products/forged/forged-ball-valve-14.jpg",

    ];

    return (
        <>
            <Header language={language}/>
            <div className="sub-banner4" style={{background: "url(/images/sub/products/product-bg-02.jpg) no-repeat 50% 0", backgroundSize: "100% auto"}}>
                <div className="banner-text">
                    <div>
                        <p className="banner-text-title">{language?.product_01_01}</p>
                        <p className="banner-text-01">{language?.product_01_02}</p>
                        <p className="banner-text-02">{language?.product_01_03}</p>
                        <div>
                            <div>
                                <p>{language?.product_01_04}</p>
                                <p>{language?.product_01_05}</p>
                            </div>
                            <div>
                                <p>{language?.product_01_06}</p>
                                <p>{language?.product_01_07}</p>
                            </div>
                            <div>
                                <p>{language?.product_01_08}</p>
                                <p>{language?.product_01_09}</p>
                            </div>
                            <div>
                                <p>{language?.product_01_10}</p>
                                <p>{language?.product_01_11}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <section className="product-section1">
                    <h2>{language?.product_01_12}</h2>
                    <ForgedBallValve language={language}/>

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
