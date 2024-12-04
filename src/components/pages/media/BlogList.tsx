'use client';

import {useEffect, useState} from "react";
import api from "@/lib/api";
import Paginate from "@/components/DotsAdmin/Paginate/paginate";
import Link from "next/link";
import Image from "next/image";

interface Props {
    language: any
    page?: number
}

export default function BlogList({language, page}: Props) {
    const [newsList, setNewsList] = useState<any[]>([]); // API 호출 결과
    const [totalCount, setTotalCount] = useState(0); // 총 아이템 수

    // API 호출 함수
    const fetchNews = async () => {
        const response = await api.get(
            `/user/promotion/getContentsList.php?contentType=1&businessDivisionType=0&userLang=${
                language.language === 'kr' ? 'EN' : 'KR'
            }&page=${page || 1}&size=9&sortColumn=date&sortOrder=desc`
        );
        setNewsList(response?.data?.List || []);
        setTotalCount(response?.data?.totalCnt || 0);
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <>
            <div className="sub-banner3" style={{background: "#CECECE", backgroundSize: "100% 100%"}}>
                <div className="banner-text">
                    <div>
                        <p className="banner-text-title">{language?.blog_01}</p>
                        <p className="banner-text-01">{language?.blog_02}</p>
                    </div>
                </div>
            </div>
            <section className="blog-list">
                <ul>
                    <li>
                        <Link href="#">
                            <p className="image-area">
                                <Image
                                    src=""
                                    alt="Sample"
                                    width={590}
                                    height={707}
                                />
                            </p>
                            <div className="info">
                                <p className="title">
                                    Title
                                </p>
                                <div className="detail">
                                    test
                                </div>
                                <p className="read">READ MORE &gt;</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <p className="image-area">
                                <Image
                                    src=""
                                    alt="Sample"
                                    width={590}
                                    height={707}
                                />
                            </p>
                            <div className="info">
                                <p className="title">
                                    Title
                                </p>
                                <div className="detail">
                                    test
                                </div>
                                <p className="read">READ MORE &gt;</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <p className="image-area">
                                <Image
                                    src=""
                                    alt="Sample"
                                    width={590}
                                    height={707}
                                />
                            </p>
                            <div className="info">
                                <p className="title">
                                    Title
                                </p>
                                <div className="detail">
                                    test
                                </div>
                                <p className="read">READ MORE &gt;</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <p className="image-area">
                                <Image
                                    src=""
                                    alt="Sample"
                                    width={590}
                                    height={707}
                                />
                            </p>
                            <div className="info">
                                <p className="title">
                                    Title
                                </p>
                                <div className="detail">
                                    test
                                </div>
                                <p className="read">READ MORE &gt;</p>
                            </div>
                        </Link>
                    </li>
                    {newsList?.map((item: any, index: number) => (
                        <li key={index}>
                            <Link href={`/promotion-center/news/${item.ID}`}>
                                <p className="image-area">
                                    <Image
                                        src={item.thumnailFile ? item.thumnailFile : "/images/@temp/blog-list-sample.png"}
                                        alt="Sample"
                                        width={984}
                                        height={558}
                                    />
                                </p>
                                <div className="info-area">
                                    <p className="date">{item.createDate}</p>
                                </div>
                                <div className="title-area">{item.promSubject}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Paginate page={page || 1} size={9} totalCount={totalCount}/>
            </section>
        </>
    )
}
