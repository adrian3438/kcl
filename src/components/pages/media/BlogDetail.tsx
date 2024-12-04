import api from "@/lib/api";
import Link from "next/link";

interface Props {
    language: any
    id?: any;
}

export default async function BlogDetail({language, id}: Props) {
    const response = await api.get(`/user/promotion/getContentDetail2.php?ID=${id}&contentType=1&userLang=${language.language === 'kr' ? 'KR' : 'EN'}`);
    const newsDetailData = response?.data;

    return (
        <div className="container">
            <div className="blog-detail">
                <div className="content-header">
                    <h2>{language.news_text_01}</h2>
                    <p><span>{language.news_text_02}</span> <br/>{language.news_text_03}</p>
                </div>
                <div className="content-detail">
                    <section className="content-detail-header">
                        <h3>{newsDetailData?.List[0]?.promSubject}</h3>
                        <p className="date">{newsDetailData?.List[0]?.createDate}</p>
                    </section>
                    <section className="detail"
                             dangerouslySetInnerHTML={{
                                 __html: newsDetailData?.List[0]?.description
                             }}
                    >
                    </section>
                    <div className="title-list">
                        <div>
                            <span>{language.news_text_05}</span>
                            <Link href={newsDetailData?.prev[0]?.prevUrl}>
                                {!newsDetailData?.prev[0]?.prevSubject || newsDetailData?.prev[0]?.prevSubject === '' ? "이전 글이 없습니다." : newsDetailData?.prev[0]?.prevSubject}
                            </Link>
                        </div>
                        <div>
                            <span>{language.news_text_06}</span>
                            <Link href={newsDetailData?.next[0]?.nextUrl}>
                                {!newsDetailData?.next[0]?.nextSubject || newsDetailData?.next[0]?.nextSubject === '' ? "다음 글이 없습니다." : newsDetailData?.next[0]?.nextSubject}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
