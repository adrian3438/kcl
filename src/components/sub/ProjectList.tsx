'use client';

import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import api from "@/lib/api";
import Paginate from "@/components/DotsAdmin/Paginate/paginate";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface Props {
  language: any
  projectGroupList: any;
}

export default function ProjectList({language, projectGroupList}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const size = Number(searchParams.get("size") || 10);
  const groupId = searchParams.get("groupId") || 0;

  //프로젝트 리스트
  const [projectList, setProjectList] = useState([]);
  const [totalCnt, setTotalCnt] = useState(0);

  async function getProjectList() {
    try {
      const response = await api.get(`/admin/projects/getProjectList.php?page=${page}&size=${size}&keyword=&groupId=${groupId}&sortColumn=createDate&sortOrder=asc`);
      if (response?.data?.result) {
        setProjectList(response?.data?.List);
        setTotalCnt(response?.data?.TotalCnt);
      } else {
        alert('API Load Failure');
      }
    } catch {
      alert('Server Error');
    }
  }

  useEffect(() => {
    getProjectList();
  }, [page, groupId]);

  const path = usePathname()
  const query = useSearchParams()

  function setPage(groupId: number) {
    const newParams: number | any = new URLSearchParams(query.toString())
    newParams.set('groupId', groupId);
    newParams.set('page', 1);
    router.push(`${path}?${newParams?.toString()}`)
  }

  return (
    <div className="container projects-container">
      <h2>{language?.projects_01}</h2>
      <div className="project-category">
        <div>
          <button className={Number(groupId) === 0 ? 'active' : ''} onClick={() => setPage(0)}>All</button>
          {projectGroupList && projectGroupList?.length > 0 && projectGroupList.map((item: any, index: number) =>
            <button
              key={index}
              onClick={() => setPage(item?.codeId)}
              className={item?.codeId === Number(groupId) ? "active" : ""}
            >
              {item?.codeNameKr}
            </button>
          )}
        </div>
      </div>

      <div className="project-list">
        <ul>
          {projectList && projectList?.length > 0 && projectList.map((item: any, index: number) =>
            <>
              {item?.activeStatus === 'Y' && (
                <li key={index}>
                  <div className="image-area">
                    <Image src={item?.thumbnailFile} alt="sample" width={306} height={229}/>
                  </div>
                  <div className="detail">
                    <div className="project-title-area">
                      <p className="project-title">{item?.projectName}</p>
                      <div className="project-detail">
                        {item?.projectDescription}
                      </div>
                    </div>
                    <div className="project-type">
                      <Image
                        src={`/images/sub/projects/${item?.groupName}.png`}
                        alt={item?.groupName || "project image"}
                        width={36}
                        height={36}
                        onError={(e) => (e.currentTarget.src = "/images/sub/projects/default.png")}
                      />
                      <p>{item?.groupName}</p>
                    </div>
                  </div>
                  <div className="view-more">
                    <Link href={`/projects/${item?.ID}`}>{language?.language === 'kr' ? '자세히 보기' : 'View more'}<Image src="/images/sub/projects/right-arrow-color.svg" alt="" width={24} height={24}/></Link>
                  </div>
                </li>
              )}
            </>
          )}
        </ul>

        <div className="pagerBox">
          <Paginate
            page={page}
            size={size}
            totalCount={totalCnt}
          />
        </div>
      </div>
    </div>
  )
}
