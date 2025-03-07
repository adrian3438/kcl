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
    const newParams : number | any = new URLSearchParams(query.toString())
    newParams.set('groupId', groupId);
    newParams.set('page', 1);
    router.push(`${path}?${newParams?.toString()}`)
  }

  return (
    <div className="container">
      <ul className="location">
        <li>{language?.projects_01}</li>
      </ul>
      <div className="project-category">
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

      <div className="project-list">
        <ul>
          {projectList && projectList?.length > 0 && projectList.map((item: any, index: number) =>
            <li key={index}>
              <Link href={`/projects/${item?.ID}`}>
                <div className="image-area">
                  <Image src={item?.thumbnailFile} alt="sample" width={306} height={229}/>
                </div>
                <div className="detail">
                  <p className="project-title">{item?.projectName}</p>
                  <div className="project-detail" style={{whiteSpace: 'pre-line'}}>
                    {item?.projectDescription}
                  </div>
                </div>
                <div className="project-type">
                  <div>
                    <Image src="/images/sub/projects/ball_valve_icon.png" alt="" width={48} height={48}/>
                    <p>{item?.groupName}</p>
                  </div>
                </div>
              </Link>
            </li>
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
