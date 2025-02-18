'use client';



import api from "@/lib/api";
import {useEffect, useState} from "react";

export default function Projects() {
  const [registrationMode, setRegistrationMode] = useState(false);
  const [modifyMode, setModifyMode] = useState(false);

  //TODO: 카테고리 리스트 API 연동
  async function getCategoryList() {
    try {
      const response = await api.get('');
      console.log('response : ', response);
    } catch {
      console.log('Server Error');
    }
  }
  useEffect(() => {
    getCategoryList();
  }, []);

  //TODO: 카테고리 등록 API 연동
  async function save() {
    try {
      const response = await api.post('');
      console.log('response : ', response);
    } catch {
      console.log('Server Error');
    }
  }

  //TODO: 카테고리 수정 API 연동
  async function modify() {
    try {
      const response = await api.post('');
      console.log('response : ', response);
    } catch {
      console.log('Server Error');
    }
  }

  return(
    <div className="contentBox content_management">
      <h3>Projects</h3>
      <div className="flexBox">
        <div>
          <h4>프로젝트 카테고리 리스트</h4>
        </div>
      </div>
      <div className="toolBox">
        <div className="left">

        </div>
        <div className="right">
          <div className="btnBox">
            <button className="blueBtn" onClick={() => setRegistrationMode(true)}>등록</button>
          </div>
        </div>
      </div>
      <div className="tableWrap">
        <div className="tableType_a thumb">
        <table>
            <thead>
            <tr>
              <th scope="col" style={{textAlign: "center", width: '70%'}}>프로젝트 그룹</th>
              <th scope="col" style={{textAlign: "center"}}>사용여부</th>
              <th scope="col" style={{textAlign: "center"}}>수정</th>
            </tr>
            </thead>
          <tbody>
          <tr>
            <td style={{textAlign: "center"}}>
              {!modifyMode && 'G-WAY-BALL'}
              {modifyMode && (
                <div className="inputBox">
                  <input type="text" name="categoryName" value="G-WAY-BALL" style={{textAlign: "center"}}/>
                </div>
              )}

            </td>
            <td style={{textAlign: "center"}}>
              <div className="toggleSwitchBox" style={{justifyContent: "center"}}>
                  <span className="toggleSwitch">
                      <input
                        type="checkbox"
                        id={`contents_01`}
                        className="toggleIpt"
                        // onChange={() => statusChange(list?.contentMasterId, list?.contentActiveStatus)}
                        // checked={list?.contentActiveStatus === 'Y'}
                        checked={true}
                        hidden
                      />
                      <label htmlFor={`contents_01`} className="toggleSwitch">
                          <span className="toggleButton"></span>
                      </label>
                  </span>
              </div>
            </td>
            <td>
              <div className="management_btnBox" style={{justifyContent: "center"}}>
                {!modifyMode && <button className="edit" onClick={() => setModifyMode(true)}>수정</button>}
                {modifyMode && <button className="edit" onClick={() => modify()}>등록</button>}
              </div>
            </td>
          </tr>
          {registrationMode && (
            <tr>
              <td style={{textAlign: "center"}}>
                <div className="inputBox">
                  <input type="text" name="categoryName" style={{textAlign: "center"}} placeholder="프로젝트 그룹명을 입력하세요"/>
                </div>
              </td>
              <td style={{textAlign: "center"}}>
                <div className="toggleSwitchBox" style={{justifyContent: "center"}}>
                  <span className="toggleSwitch">
                      <input
                        type="checkbox"
                        id={`contents_01`}
                        className="toggleIpt"
                        // onChange={() => statusChange(list?.contentMasterId, list?.contentActiveStatus)}
                        // checked={list?.contentActiveStatus === 'Y'}
                        checked={true}
                        hidden
                      />
                      <label htmlFor={`contents_01`} className="toggleSwitch">
                          <span className="toggleButton"></span>
                      </label>
                  </span>
                </div>
              </td>
              <td>
                <div className="management_btnBox" style={{justifyContent: "center"}}>
                  <button className="edit" onClick={() => save()}>등록</button>
                </div>
              </td>
            </tr>
          )}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
