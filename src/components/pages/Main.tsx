import '@/assets/main.scss';
import Section01 from "@/components/main/Section01";

interface Props {
    language: any
}

export default function Main({language}: Props) {
    return (
        <main>
            <Section01 language={language}/>
            <section className="section-02">
                <div>

                </div>
                <div>

                </div>
            </section>
            <section className="section-03"></section>
            <section className="section-04"></section>
            <section className="section-05"></section>
            <section className="section-06"></section>
            <section className="section-087"></section>
        </main>
    )
}
