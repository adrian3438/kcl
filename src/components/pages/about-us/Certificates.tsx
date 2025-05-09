'use client';

import {useState} from "react";
import Image from "next/image";

interface Props {
  language: any;
}

export default function Certificates({language}: Props) {
  const [certificates, setCertificates] = useState<number>(0);
  return (
    <div className="container certificates-area">
      <div className="title-area1">
        <h2>{language?.certificates_01}</h2>
      </div>
      <ul className="location">
        <li>{language?.header_1}</li>
        <li>{language?.header_1_6}</li>
        <li>{certificates === 0 ? language?.certificates_02 : language?.certificates_03}</li>
      </ul>
      <div className="certificates">
        <div className="certificates-btns">
          <button className={certificates === 0 ? 'active' : 'on'} onClick={() => setCertificates(0)}>{language?.certificates_02}</button>
          <button className={certificates === 1 ? 'active' : 'on'} onClick={() => setCertificates(1)}>{language?.certificates_03}</button>
        </div>
        {certificates === 0 && (
          <section className="vendor">
            <dl>
              <dt>
                <Image src="/images/sub/certificates/united-states-flag.png" alt="USA" width={138} height={79}/>
                <p>{language?.certificates_04_00}</p>
              </dt>
              <dd>
                <ul>
                  <li>FLUOR (United States of America)<a className="disable">{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>

            <dl>
              <dt>
                <Image src="/images/sub/certificates/iran.png" alt="IRAN" width={138} height={79}/>
                <p>{language?.certificates_04_01}</p>
              </dt>
              <dd>
                <ul>
                  <li>{language?.certificates_04_02}<a href="/images/sub/certificates/iran-01.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_04_03}<a href="/images/sub/certificates/iran-02.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_04_04}<a href="/images/sub/certificates/iran-03.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_04_05}<a href="/images/sub/certificates/iran-04.jpg" download>{language?.certificates_btn_02}</a></li>

                  <li>MOP OF IRAN (Ministry Oil Petroleum-Iran)<a className="disable">{language?.certificates_btn_02}</a></li>
                  <li>POGC (Pars Oil and Gas Company-Iran)<a className="disable">{language?.certificates_btn_02}</a></li>

                </ul>
              </dd>
            </dl>
            <dl>
              <dt>
                <Image src="/images/sub/certificates/uae.png" alt="UAE" width={138} height={79}/>
                <p>{language?.certificates_05_01}</p>
              </dt>
              <dd>
                <ul>
                  <li>{language?.certificates_05_02}<a href="/images/sub/certificates/uae-01.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_05_03}<a href="/images/sub/certificates/uae-02.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_05_04}<a href="/images/sub/certificates/uae-03.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_05_05}<a href="/images/sub/certificates/uae-04.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_05_06}<a href="/images/sub/certificates/uae-05.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_05_07}<a href="/images/sub/certificates/uae-06.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_05_08}<a href="/images/sub/certificates/uae-07.jpg" download>{language?.certificates_btn_02}</a></li>

                  <li>ADNOC (Abu Dhabi National Oil Company- UAE)<a className="disable">{language?.certificates_btn_02}</a></li>
                  <li>BOROUGE (Abu Dhabi Polymers Company- UAE)<a className="disable">{language?.certificates_btn_02}</a></li>
                  <li>TAKREER (Abu Dhabi Oil Refining Company- UAE)<a className="disable">{language?.certificates_btn_02}</a></li>
                  <li>RUWAIS (A Subsidiary of ADNOC- UAE)<a className="disable">{language?.certificates_btn_02}</a></li>
                  <li>GASCO (Abu Dhabi Gas Company-Can be checked online- UAE)<a className="disable">{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>
                <Image src="/images/sub/certificates/qatar.png" alt="Qatar" width={138} height={79}/>
                <p>{language?.certificates_06_01}</p>
              </dt>
              <dd>
                <ul>
                  <li>{language?.certificates_06_02}<a className="disable">{language?.certificates_btn_02}</a></li>
                  <li>QATAR Steel<a className="disable">{language?.certificates_btn_02}</a></li>
                  <li>QATAR Fuel (QAFAC)<a className="disable">{language?.certificates_btn_02}</a></li>
                  <li>QATAR Petroleum<a className="disable">{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>
                <Image src="/images/sub/certificates/saudi-arabia.png" alt="SAUDI ARABIA" width={138} height={79}/>
                <p>{language?.certificates_07_01}</p>
              </dt>
              <dd>
                <ul>
                  <li>{language?.certificates_07_02}<a href="/images/sub/certificates/saudi-arabia-01.jpg" download>{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>


            <dl>
              <dt>
                <Image src="/images/sub/certificates/egypt-flag.png" alt="EGYPT" width={138} height={79}/>
                <p>{language?.certificates_07_01}</p>
              </dt>
              <dd>
                <ul>
                  <li>KPC (KHALDA PETROLEUM COPMPANY-Egypt)<a className="disable">{language?.certificates_btn_02}</a></li>
                  <li>GASCO(Egyptian Natural Gas Co-Egypt)<a className="disable">{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>

            <dl>
              <dt>
                <Image src="/images/sub/certificates/iraq-flag.png" alt="IRAQ" width={138} height={79}/>
                <p>{language?.certificates_07_01}</p>
              </dt>
              <dd>
                <ul>
                  <li>BGC (Basrah Gas COPMPANY-Iraq)<a className="disable">{language?.certificates_btn_02}</a></li>
                  <li>GNB (Gazprom Neft Badra -Iraq)<a className="disable">{language?.certificates_btn_02}</a></li>
                  <li>MRC (MIDLAND REFINERIES COMPANY- Iraq)<a className="disable">{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>


            <dl>
              <dt>
                <Image src="/images/sub/certificates/indonesia.png" alt="INDONESIA" width={138} height={79}/>
                <p>{language?.certificates_08_01}</p>
              </dt>
              <dd>
                <ul>
                  <li>{language?.certificates_08_02}<a href="/images/sub/certificates/indonesia-01.jpg" download>{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>
                <Image src="/images/sub/certificates/malaysia.png" alt="MALAYSIA" width={138} height={79}/>
                <p>{language?.certificates_09_01}</p>
              </dt>
              <dd>
                <ul>
                  <li>{language?.certificates_09_02}<a href="/images/sub/certificates/malaysia-01.jpg" download>{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>
          </section>
        )}
        {certificates === 1 && (
          <section className="quality">
            <dl>
              <dt>
                <Image src="/images/sub/certificates/sgs_logo.png" alt="SGS" width={138} height={64}/>
              </dt>
              <dd>
                <ul>
                  <li>{language?.certificates_10_01}<a href="/images/sub/certificates/sgs-01.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_10_02}<a href="/images/sub/certificates/sgs-02.jpg" download>{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>
                <Image src="/images/sub/certificates/ce-logo.png" alt="CE" width={90} height={64}/>
              </dt>
              <dd>
                <ul>
                  <li>{language?.certificates_11_01}<a href="/images/sub/certificates/ce-01.jpg" download>{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>
                <Image src="/images/sub/certificates/lolyd-resiger_logo.png" alt="Lolyd's Resister" width={138} height={72}/>
              </dt>
              <dd>
                <ul>
                  <li>{language?.certificates_12_01}<a href="/images/sub/certificates/iso-01.jpg" download>{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>
                <Image src="/images/sub/certificates/velosi_logo.png" alt="Velosi" width={99} height={72}/>
              </dt>
              <dd>
                <ul>
                  <li>{language?.certificates_13_01}<a href="/images/sub/certificates/velosi-01.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_13_02}<a href="/images/sub/certificates/velosi-02.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_13_03}<a href="/images/sub/certificates/velosi-03.jpg" download>{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>
                <Image src="/images/sub/certificates/pts_logo.png" alt="PTS" width={138} height={53}/>
              </dt>
              <dd>
                <ul>
                  <li>{language?.certificates_14_01}<a href="/images/sub/certificates/pts-01.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_14_02}<a href="/images/sub/certificates/pts-02.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_14_03}<a href="/images/sub/certificates/pts-03.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_14_04}<a href="/images/sub/certificates/pts-04.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_14_05}<a href="/images/sub/certificates/pts-05.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_14_06}<a href="/images/sub/certificates/pts-06.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_14_07}<a href="/images/sub/certificates/pts-07.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_14_08}<a href="/images/sub/certificates/pts-08.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_14_09}<a href="/images/sub/certificates/pts-09.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_14_10}<a href="/images/sub/certificates/pts-10.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_14_11}<a href="/images/sub/certificates/pts-11.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_14_12}<a href="/images/sub/certificates/pts-12.jpg" download>{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>
            <dl style={{marginBottom: "100px"}}>
              <dt>
                <Image src="/images/sub/certificates/tuv_logo.png" alt="TUV" width={130} height={72}/>
              </dt>
              <dd>
                <ul>
                  <li>{language?.certificates_15_01}<a href="/images/sub/certificates/tat-01.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_15_02}<a href="/images/sub/certificates/tat-02.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_15_03}<a href="/images/sub/certificates/tat-03.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_15_04}<a href="/images/sub/certificates/tat-04.jpg" download>{language?.certificates_btn_02}</a></li>
                  <li>{language?.certificates_15_05}<a href="/images/sub/certificates/tat-05.jpg" download>{language?.certificates_btn_02}</a></li>
                </ul>
              </dd>
            </dl>


            <h2>TYPE ACCEPTANCE TEST (TAT) CERTIFICATE LIST</h2>
            <div className="table-area">
              <table className="certificates-table">
                <thead>
                <tr>
                  <th>NO</th>
                  <th>DATE</th>
                  <th>CERTI. NO.</th>
                  <th>VALVE TYPE</th>
                  <th>CLASS</th>
                  <th>SIZE</th>
                  <th>DN</th>
                  <th>BORE</th>
                  <th>BALL TYPE</th>
                  <th>BODY MAT&#39;L</th>
                  <th>ENDS</th>
                  <th>BY</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>03-05-18</td>
                  <td>20180305-TAT-KCL-001</td>
                  <td>BALL VALVE</td>
                  <td>600 LB</td>
                  <td>4&quot;</td>
                  <td>100</td>
                  <td>FB</td>
                  <td>TRUNNION</td>
                  <td>A105</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>11-01-18</td>
                  <td>TSK-IS-2018-EX-92</td>
                  <td>DBB BALL VALVE</td>
                  <td>600 LB</td>
                  <td>2&quot;</td>
                  <td>50</td>
                  <td>RB</td>
                  <td>FLOATING</td>
                  <td>A105</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>11-01-18</td>
                  <td>TSK-IS-2018-EX-91</td>
                  <td>DBB BALL VALVE</td>
                  <td>1500 LB</td>
                  <td>2&quot;</td>
                  <td>50</td>
                  <td>RB</td>
                  <td>TRUNNION</td>
                  <td>A105</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>11-01-18</td>
                  <td>TSK-IS-2018-EX-90</td>
                  <td>DBB BALL VALVE</td>
                  <td>900 LB</td>
                  <td>4&quot;</td>
                  <td>100</td>
                  <td>RB</td>
                  <td>TRUNNION</td>
                  <td>A105</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>07-30-19</td>
                  <td>TSK-IS-74954837-01</td>
                  <td>DBB BALL VALVE</td>
                  <td>1500 LB</td>
                  <td>1&quot;</td>
                  <td>25</td>
                  <td>RB</td>
                  <td>TRUNNION</td>
                  <td>F316</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>07-30-19</td>
                  <td>TSK-IS-74954837-02</td>
                  <td>DBB BALL VALVE</td>
                  <td>600 LB</td>
                  <td>1&quot;</td>
                  <td>25</td>
                  <td>RB</td>
                  <td>FLOATING</td>
                  <td>F316</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>07-30-19</td>
                  <td>TSK-IS-74954837-03</td>
                  <td>DBB BALL VALVE</td>
                  <td>600 LB</td>
                  <td>2&quot;</td>
                  <td>50</td>
                  <td>RB</td>
                  <td>FLOATING</td>
                  <td>F316</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>07-30-19</td>
                  <td>TSK-IS-74954837-04</td>
                  <td>DBB BALL VALVE</td>
                  <td>600 LB</td>
                  <td>3&quot;</td>
                  <td>80</td>
                  <td>RB</td>
                  <td>FLOATING</td>
                  <td>F316</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>09-07-21</td>
                  <td>TSK-IS-74960490-001</td>
                  <td>BALL VALVE</td>
                  <td>1500 LB</td>
                  <td>1&quot;</td>
                  <td>25</td>
                  <td>RB</td>
                  <td>FLOATING</td>
                  <td>F316</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>09-07-21</td>
                  <td>TSK-IS-74960490-002</td>
                  <td>SWING CHECK VALVE</td>
                  <td>1500 LB</td>
                  <td>2&quot;</td>
                  <td>100</td>
                  <td>RB</td>
                  <td>BOLTED CAP</td>
                  <td>F316</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>09-07-21</td>
                  <td>TSK-IS-74960490-003</td>
                  <td>DUAL CHECK VALVE</td>
                  <td>900 LB</td>
                  <td>6&quot;</td>
                  <td>125</td>
                  <td>FB</td>
                  <td></td>
                  <td>CF8M</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>09-07-21</td>
                  <td>TSK-IS-74960490-004</td>
                  <td>GATE VALVE</td>
                  <td>150 LB</td>
                  <td>3/4&quot;</td>
                  <td>20</td>
                  <td>RB</td>
                  <td>BB OS&Y</td>
                  <td>LF2</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>09-07-21</td>
                  <td>TSK-IS-74960490-005</td>
                  <td>GATE VALVE</td>
                  <td>1500 LB</td>
                  <td>1&quot;</td>
                  <td>25</td>
                  <td>RB</td>
                  <td>BB OS&Y</td>
                  <td>F316</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>09-07-21</td>
                  <td>TSK-IS-74960490-006</td>
                  <td>GLOBE VALVE</td>
                  <td>150 LB</td>
                  <td>1&quot;</td>
                  <td>25</td>
                  <td>RB</td>
                  <td>BB OS&Y</td>
                  <td>A105</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>09-07-21</td>
                  <td>TSK-IS-74960490-007</td>
                  <td>GATE VALVE</td>
                  <td>1500 LB</td>
                  <td>2&quot;</td>
                  <td>50</td>
                  <td>RB</td>
                  <td>BB OS&Y</td>
                  <td>F316</td>
                  <td>RF FLANGE</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>09-07-21</td>
                  <td>TSK-IS-74960490-008</td>
                  <td>DBB BALL VALVE</td>
                  <td>150 LB</td>
                  <td>1/2&quot;</td>
                  <td>15</td>
                  <td>FB</td>
                  <td>FLOATING</td>
                  <td>F316</td>
                  <td>RF X NPTF</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>09-07-21</td>
                  <td>TSK-IS-74960490-009</td>
                  <td>DBB BALL VALVE</td>
                  <td>1500 LB</td>
                  <td>2&quot;</td>
                  <td>50</td>
                  <td>FB</td>
                  <td>FLOATING</td>
                  <td>F316</td>
                  <td>RF X NPTF</td>
                  <td>TUV-SUD</td>
                </tr>
                </tbody>
              </table>
            </div>
            <h2>FUGITIVE EMISSION TEST (FET) CERTIFICATE LIST</h2>
            <div className="table-area">
              <table>
                <thead>
                <tr>
                  <th>NO</th>
                  <th>DATE</th>
                  <th>CERTI. NO.</th>
                  <th>VALVE TYPE</th>
                  <th>CLASS</th>
                  <th>SIZE</th>
                  <th>DN</th>
                  <th>BORE</th>
                  <th>BALL TYPE</th>
                  <th>BODY MAT&#39;L</th>
                  <th>ENDS</th>
                  <th>BY</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>03-05-18</td>
                  <td>20180305-FE-KCL-001</td>
                  <td>BALL VALVE</td>
                  <td>600 LB</td>
                  <td>4&quot;</td>
                  <td>100</td>
                  <td>FB</td>
                  <td>37</td>
                  <td>A105</td>
                  <td>A</td>
                  <td>TUV-SUD</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>05-28-21</td>
                  <td>TSK-IS-74954837-001</td>
                  <td>DBB BALL VALVE</td>
                  <td>1500 LB</td>
                  <td>1/2&quot;</td>
                  <td>15</td>
                  <td>FB</td>
                  <td>12.5</td>
                  <td>F316</td>
                  <td>A</td>
                  <td>TUV-SUD</td>
                </tr>
                </tbody>
              </table>
            </div>
          </section>

        )}
      </div>
    </div>
  )
}
