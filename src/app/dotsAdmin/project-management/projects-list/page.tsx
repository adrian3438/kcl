'use client';

import Image from "next/image";
import {useRouter} from "next/navigation";

export default function ProjectsList() {
  const router = useRouter();

  //TODO: 프로젝트 리스트 API 호출

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
              <select>
                <option value="0">카테고리 선택</option>
              </select>
            </div>
            <div className="searchBox">
              <div>
                <input type="text" placeholder="검색어를 입력해 주세요."/>
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
          <tr>
            <td>
              <span className="readOnly">1</span>
            </td>
            <td>
              <div className="imgBox">
                <Image src='https://marineplaza.org/kclvalve-api/upload/promotion/catalog-list-02.jpg' alt="" width={100} height={50}/>
              </div>
            </td>
            <td>
              <span className="readOnly">G-WAY-BALL</span>
            </td>
            <td>
              <span className="readOnly">OEM BRAND</span>
            </td>
            <td>
              <span className="readOnly">내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.</span>
            </td>
            <td>
              <div className="toggleSwitchBox" style={{justifyContent: "center"}}>
                <span className="toggleSwitch">
                    <input
                      type="checkbox"
                      id={`contents_1`}
                      className="toggleIpt"
                      // onChange={() => statusChange(list?.contentMasterId, list?.contentActiveStatus)}
                      // checked={list?.contentActiveStatus === 'Y'}
                      checked={true}
                      hidden
                    />
                    <label htmlFor={`contents_1`} className="toggleSwitch">
                        <span className="toggleButton"></span>
                    </label>
                </span>
              </div>
            </td>
            <td>
              <div className="management_btnBox" style={{justifyContent: "center"}}>
                <button className="edit" onClick={() => router.push(`/dotsAdmin/project-management/projects?id=${1}`)}>수정</button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}
