import "@/assets/products/products.scss";
import {fetchLanguage} from "@/util/fetchLanguage";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ProductContact from "@/components/pages/products/ProductContact";
import KnifeGateValve from "@/components/pages/products/KnifeGateValve";

export default async function KnifeGateValvePage({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);

    return (
        <>
            <Header language={language}/>
            <div className="sub-banner4" style={{background: "url(/images/sub/products/product-bg-07.png) no-repeat 50% 0", backgroundSize: "100% auto"}}>
                <div className="banner-text">
                    <div>
                        <p className="banner-text-title">{language?.product_08_01}</p>
                        <p className="banner-text-01">{language?.product_08_02}</p>
                        <div>
                            <div>
                                <p>{language?.product_08_04}</p>
                                <p>{language?.product_08_05}</p>
                            </div>
                            <div>
                                <p>{language?.product_08_06}</p>
                                <p>{language?.product_08_07}</p>
                            </div>
                            <div>
                                <p>{language?.product_08_08}</p>
                                <p>{language?.product_08_09}</p>
                            </div>
                            <div>
                                <p>{language?.product_08_10}</p>
                                <p>{language?.product_08_11}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <section className="product-section1">
                    <h2>{language?.product_08_12}</h2>
                    <KnifeGateValve language={language}/>
                </section>
                <ProductContact language={language}/>
            </div>
            <Footer language={language}/>
        </>
    );
}
