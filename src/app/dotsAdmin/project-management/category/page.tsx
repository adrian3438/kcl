'use client';

import api from "@/lib/api";
import {useEffect, useState} from "react";

export default function Projects() {
  const [data, setData] = useState({
    codeNameKr: ''
  });

  const [registrationMode, setRegistrationMode] = useState(false);

  //카테고리 리스트 API 조회
  const [list, setList] = useState([]);
  async function getCategoryList() {
    try {
      const response = await api.get('/admin/code/getProjectGroupList.php');
      if(response?.data?.result) {
        setList(response?.data?.List);
      } else {
        alert('API Load Failure');
      }
    } catch {
      console.log('Server Error');
    }
  }
  useEffect(() => {
    getCategoryList();
  }, []);

  //사용여부 상태변경
  async function statusChange (id : any, status : string) {
    try {
      const formData = new FormData()
      formData.append('ID', id)
      formData.append('activeStatus', status === 'Y' ? 'N' : 'Y');
      const response = await api.post(`/admin/code/updProjectGroupStatus.php`, formData);
      if(response?.data?.result === true) {getCategoryList()}
      else {alert(response.data.resultMsg)}
    }catch {alert('Server Error')}
  }

  //카테고리 신규등록
  function handleChange(e: any) {
    const {name , value} = e.target;
    setData((prev:any) => ({...prev, [name] : value}))
  }
  async function save() {
    const formData = new FormData();
    formData.append('codeNameKr', data.codeNameKr);
    try {
      const response = await api.post('/admin/code/setProjectGroup.php', formData);
      if(response?.data?.result) {
        setRegistrationMode(false);
        getCategoryList();
        alert(response?.data?.resultMsg);
        location.reload();
      } else {
        alert(response?.data?.resultMsg);
      }
    } catch {
      alert('Server Error');
    }
  }

  //카테고리 수정
  const [modifyData, setModifyData] = useState({
    id: '',
    categoryName: ''
  });
  function setModify(id: any, categoryName: string) {
    setModifyData({
      id: id,
      categoryName: categoryName
    });
  }
  async function modify() {
    const formData = new FormData();
    formData?.append('ID', modifyData.id);
    formData?.append('codeNameKr', modifyData.categoryName);
    try {
      const response = await api.post('/admin/code/updProjectGroup.php', formData);
      if(response?.data?.result) {
        alert(response?.data?.resultMsg);
        setModifyData({
          id: '',
          categoryName: '',
        });
        getCategoryList();
      }
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

          {list && list.length > 0 && list.map((item: any, index) => (
            <tr key={index}>
              <td style={{textAlign: "center"}}>
                {modifyData?.id === item?.codeId ? (
                  <div className="inputBox">
                    <input type="text"
                           name="codeNameKr"
                           value={modifyData?.categoryName}
                           style={{textAlign: "center"}}
                           onChange={(e) => setModify(item?.codeId, e.target.value)}
                    />
                  </div>
                ) : (
                  item?.codeNameKr
                )}
              </td>
              <td style={{textAlign: "center"}}>
                <div className="toggleSwitchBox" style={{justifyContent: "center"}}>
                  {modifyData?.id !== item?.codeId && (
                    <span className="toggleSwitch">
                      <input
                        type="checkbox"
                        onChange={() => statusChange(item?.codeId, item?.activeStatus)}
                        id={`contents_${item?.codeId}`}
                        className="toggleIpt"
                        checked={item?.activeStatus === 'Y'}
                        hidden
                      />
                      <label htmlFor={`contents_${item?.codeId}`} className="toggleSwitch">
                          <span className="toggleButton"></span>
                      </label>
                    </span>
                  )}
                </div>
              </td>
              <td>
                <div className="management_btnBox" style={{justifyContent: "center"}}>
                  {modifyData?.id === item?.codeId ? (
                    <button className="edit" onClick={() => modify()}>등록</button>
                  ) : (
                    <button className="edit" onClick={() => setModify(item?.codeId, item?.codeNameKr)}>수정</button>
                  )}
                </div>
              </td>
            </tr>
          ))}
          {registrationMode && (
            <tr>
              <td style={{textAlign: "center"}}>
                <div className="inputBox">
                  <input type="text"
                         name="codeNameKr"
                         style={{textAlign: "center"}}
                         placeholder="프로젝트 그룹명을 입력하세요"
                         onChange={(e) => handleChange(e)}
                         value={data?.codeNameKr}
                  />
                </div>
              </td>
              <td style={{textAlign: "center"}}>
                &nbsp;
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
