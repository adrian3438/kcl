import "@/assets/products/products.scss";
import {fetchLanguage} from "@/util/fetchLanguage";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ProductSwiper from "@/components/pages/products/ProductSwiper";
import ProductContact from "@/components/pages/products/ProductContact";
import PostIndicatedGateValve from "@/components/pages/products/PostIndicatedGateValve";


export default async function PostIndicatedGateValvePage({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);

    const productImageList = [
        "/images/sub/products/post/kcl-post-indicator-valve-1.jpg",
        "/images/sub/products/post/kcl-post-indicator-valve-2.jpg",
        "/images/sub/products/post/kcl-post-indicator-valve-3.jpg",
        "/images/sub/products/post/kcl-post-indicator-valve-4.jpg",
        "/images/sub/products/post/kcl-post-indicator-valve-6.jpg",
        "/images/sub/products/post/kcl-post-indicator-valve-7.jpg",
        "/images/sub/products/post/kcl-post-indicator-valve-8.jpg",
    ];

    return (
        <>
            <Header language={language}/>
            <div className="sub-banner4" style={{background: "url(/images/sub/products/product-bg-08.png) no-repeat 50% 0", backgroundSize: "100% auto"}}>
                <div className="banner-text">
                    <div>
                        <p className="banner-text-title">{language?.product_07_01}</p>
                        <p className="banner-text-01">{language?.product_07_02}</p>
                        <div>
                            <div>
                                <p>{language?.product_07_04}</p>
                                <p>{language?.product_07_05}</p>
                            </div>
                            <div>
                                <p>{language?.product_07_06}</p>
                                <p>{language?.product_07_07}</p>
                            </div>
                            <div>
                                <p>{language?.product_07_08}</p>
                                <p>{language?.product_07_09}</p>
                            </div>
                            <div>
                                <p>{language?.product_07_10}</p>
                                <p>{language?.product_07_11}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <section className="product-section1">
                    <h2>{language?.product_07_12_1}</h2>
                    <PostIndicatedGateValve language={language}/>
                </section>

                <ProductSwiper productImageList={productImageList}/>

                <ProductContact language={language}/>
            </div>
            <Footer language={language}/>
        </>
    );
}
