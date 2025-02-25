'use client';

import Image from "next/image";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Paginate from "@/components/DotsAdmin/Paginate/paginate";
import api from "@/lib/api";
import {useEffect, useState} from "react";
import calCulateIndex from "@/components/calculateIndex";
// import api from "@/lib/api";
// import {useEffect} from "react";

export default function ProjectsList({searchParams: {page, size, keyword, groupId}}: any) {
  const router = useRouter();
  page = page || 1;
  size = size || 25;
  keyword = keyword || '';
  groupId = groupId || 0;

  //프로젝트 리스트
  const [projectList, setProjectList] = useState([]);
  const [totalCnt, setTotalCnt] = useState(0);
  async function getProjectList() {
    try {
      const response = await api.get(`/admin/projects/getProjectList.php?page=${page}&size=${size}&keyword=${keyword}&groupId=${groupId}&sortColumn=createDate&sortOrder=asc`);
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
  }, [page, groupId, keyword]);

  //프로젝트 리스트 사용여부 상태변경
  async function statusChange(id: any, status: string) {
    try {
      const formData = new FormData()
      formData.append('ID', id)
      formData.append('activeStatus', status === 'Y' ? 'N' : 'Y');
      const response = await api.post(`/admin/projects/updProjectStatus.php`, formData);
      if (response?.data?.result === true) {
        getProjectList();
      } else {
        alert(response.data.resultMsg);
      }
    } catch {
      alert('Server Error');
    }
  }

  //카테고리 리스트 API 호출
  const [categoryList, setCategoryList] = useState([]);
  async function getCategoryList() {
    try {
      const response = await api.get(`/admin/code/getProjectGroupList2.php`);
      if (response?.data?.result) {
        setCategoryList(response?.data?.List);
      } else {
        alert('API Load Failure');
      }
    } catch {
      alert('Server Error');
    }
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  const path = usePathname()
  const query = useSearchParams()
  function handleSelect(e: any) {
    const newParams: number | any = new URLSearchParams(query.toString())
    newParams.set('groupId', e.target.value);
    router.push(`${path}?${newParams?.toString()}`)
  }
  function handleEnter(e: any) {
    if(e.key==='Enter') {
      const newParams: number | any = new URLSearchParams(query.toString())
      newParams.set('keyword', e.target.value);
      router.push(`${path}?${newParams?.toString()}`)
    }
  }

  //TODO: 카테고리 선택 리스트 API 연동 및 option 태그 노출
  //TODO: 카테고리 옵션 서택에 따른 파라미터 변경 및 해당 카테고리 프로젝트 리스트 노출


  //TODO: 검색어 입력 시 검색어 맞춤 프로젝트 리스트 노출

  return (
    <div className="contentBox content_management">
      <h3>Projects</h3>
      <div className="flexBox">
        <div>
          <h4>프로젝트 리스트</h4>
        </div>
      </div>
      <div className="toolBox">
        <div className="left">
          <div>
            <div className="selectBox">
              <select onChange={(e) => handleSelect(e)}>
                <option value="0">카테고리 선택</option>
                {categoryList?.map((item: any, index: number) => (
                  <option key={index} value={item?.codeId}>{item?.codeNameKr}</option>
                ))}
              </select>
            </div>
            <div className="searchBox">
              <div>
                <input type="text" placeholder="검색어를 입력해 주세요." onKeyDown={(e) => handleEnter(e)}/>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="btnBox">
            <button className="blueBtn" onClick={() => router.push('/dotsAdmin/project-management/projects')}>신규등록</button>
          </div>
        </div>
      </div>
      <div className="tableWrap">
        <div className="tableType_a thumb">
          <table>
            <thead>
            <tr>
              <th>No.</th>
              <th style={{textAlign: 'center'}}><span className="sortWrap">썸네일 이미지<span className=""></span></span></th>
              <th style={{textAlign: 'center'}}><span className="sortWrap">카테고리<span className=""></span></span></th>
              <th style={{textAlign: 'center', width: '15%'}}><span className="sortWrap">프로젝트 제목<span className=""></span></span></th>
              <th style={{textAlign: 'center', width: '32%'}}><span className="sortWrap">내용요약<span className=""></span></span></th>
              <th style={{textAlign: 'center'}}><span className="sortWrap">사용여부<span className=""></span></span></th>
              <th style={{textAlign: 'center'}}><span className="sortWrap">수정<span className=""></span></span></th>
            </tr>
            </thead>
            <tbody>
            {projectList?.map((item: any, index) => (
              <tr key={index}>
                <td>
                  <span className="readOnly">{calCulateIndex(page, size, totalCnt, index)}</span>
                </td>
                <td>
                  <div className="imgBox">
                    <Image src={item?.thumbnailFile} alt="" width={100} height={50}/>
                  </div>
                </td>
                <td>
                  <span className="readOnly">{item?.groupName}</span>
                </td>
                <td>
                  <span className="readOnly">{item?.projectName}</span>
                </td>
                <td>
                  <span className="readOnly">{item?.projectDescription}</span>
                </td>
                <td>
                  <div className="toggleSwitchBox" style={{justifyContent: "center"}}>
                    <span className="toggleSwitch">
                      <input
                        type="checkbox"
                        onChange={() => statusChange(item?.ID, item?.activeStatus)}
                        id={`contents_${item?.ID}`}
                        className="toggleIpt"
                        checked={item?.activeStatus === 'Y'}
                        hidden
                      />
                      <label htmlFor={`contents_${item?.ID}`} className="toggleSwitch">
                          <span className="toggleButton"></span>
                      </label>
                    </span>
                  </div>
                </td>
                <td>
                  <div className="management_btnBox" style={{justifyContent: "center"}}>
                    <button className="edit" onClick={() => router.push(`/dotsAdmin/project-management/projects?id=${item?.ID}`)}>수정</button>
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
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
