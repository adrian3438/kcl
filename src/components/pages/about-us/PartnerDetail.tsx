'use client';

import Image from "next/image";
import {useState} from "react";

interface Props {
  language: any;
}

export default function PartnerDetail({language}: Props) {
  const [partnerIndex, setPartnerIndex] = useState<number>(0);

  return (
    <div className="partner">
      <div className="partner-btn">
        <button onClick={() => setPartnerIndex(0)} className={partnerIndex === 0 ? 'active' : ''} style={{whiteSpace: "pre-line"}}>{language?.partner_08}</button>
        <button onClick={() => setPartnerIndex(1)} className={partnerIndex === 1 ? 'active' : ''} style={{whiteSpace: "pre-line"}}>{language?.partner_09}</button>
        <button onClick={() => setPartnerIndex(2)} className={partnerIndex === 2 ? 'active' : ''} style={{whiteSpace: "pre-line"}}>{language?.partner_10}</button>
        <button onClick={() => setPartnerIndex(3)} className={partnerIndex === 3 ? 'active' : ''} style={{whiteSpace: "pre-line"}}>{language?.partner_11}</button>
        <button onClick={() => setPartnerIndex(4)} className={partnerIndex === 4 ? 'active' : ''} style={{whiteSpace: "pre-line"}}>{language?.partner_12}</button>
        <button onClick={() => setPartnerIndex(5)} className={partnerIndex === 5 ? 'active' : ''} style={{whiteSpace: "pre-line"}}>{language?.partner_13}</button>
        <button onClick={() => setPartnerIndex(6)} className={partnerIndex === 6 ? 'active' : ''} style={{whiteSpace: "pre-line"}}>{language?.partner_14}</button>
      </div>

      {partnerIndex === 0 && (
        <div className="title-area3 partner-list">
          <p>{language?.partner_08}</p>
          <ul>
            <li>
              <p><Image src="/images/sub/partner/client-01.png" alt="SAMSUNG FINE CHEMICALS" width={189} height={64}/></p>
              <div>
                SAMSUNG FINE CHEMICALS
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-01.png" alt="SAMSUNG ENGINEERING" width={189} height={64}/></p>
              <div>
                SAMSUNG ENGINEERING
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-01.png" alt="SAMSUNG POLYSILICON" width={189} height={64}/></p>
              <div>
                SAMSUNG POLYSILICON
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-02.png" alt="GS CALTEX" width={185} height={49}/></p>
              <div>
                GS CALTEX
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-03.png" alt="POSCO E&C" width={151} height={60}/></p>
              <div>
                POSCO E&C
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-04.png" alt="SK CONSTRUCTION" width={116} height={76}/></p>
              <div>
                SK CONSTRUCTION
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-05.png" alt="SK ENERGY" width={131} height={76}/></p>
              <div>
                SK ENERGY
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-06.png" alt="SK GLOBAL CHEMICAL" width={149} height={76}/></p>
              <div>
                SK GLOBAL CHEMICAL
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-07.png" alt="SK INNOVATION" width={165} height={74}/></p>
              <div>
                SK INNOVATION
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-08.png" alt="SK LUBRICANTS" width={167} height={74}/></p>
              <div>
                SK LUBRICANTS
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-09.png" alt="DEALING INDUSTRIAL" width={123} height={70}/></p>
              <div>
                DEALING INDUSTRIAL
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-10.png" alt="DAEWOO E&C" width={225} height={56}/></p>
              <div>
                DAEWOO E&C
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-11.png" alt="HYUNDAI ENGINEERING" width={223} height={48}/></p>
              <div>
                HYUNDAI ENGINEERING
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-12.png" alt="KOLONG" width={204} height={46}/></p>
              <div>
                KOLONG
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-13.png" alt="KOREA GAS CORP" width={196} height={56}/></p>
              <div>
                KOREA GAS CORP
              </div>
            </li>
          </ul>
        </div>
      )}

      {partnerIndex === 1 && (
        <div className="title-area3 partner-list">
          <p>{language?.partner_09}</p>
          <ul>
            <li>
              <p><Image src="/images/sub/partner/client-14.png" alt="SEJIN VALVE" width={260.591} height={78}/></p>
              <div>
                SEJIN VALVE
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-15.png" alt="SHINWOO VALVE" width={260.591} height={78}/></p>
              <div>
                SHINWOO VALVE
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-16.png" alt="UNICON SYSTEM(CONTROL VALVE)" width={95.968} height={85}/></p>
              <div>
                UNICON SYSTEM<br/>(CONTROL VALVE)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-17.png" alt="KOREA S.E. POWER" width={231} height={93}/></p>
              <div>
                KOREA S.E. POWER
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-18.png" alt="OCI MATERIALS" width={118} height={60}/></p>
              <div>
                OCI MATERIALS
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-19.png" alt="DONGGANG METAL" width={154.045} height={81}/></p>
              <div>
                DONGGANG METAL
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-20.png" alt="TOYO ENGINNERING KOREA LTD." width={77} height={89}/></p>
              <div>
                TOYO ENGINNERING KOREA LTD.
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-21.png" alt="SAMSHING LTD." width={184.167} height={40}/></p>
              <div>
                SAMSHING LTD.
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-22.png" alt="JEONGWOO INDUSTRIAL MACHINE" width={160} height={43}/></p>
              <div>
                JEONGWOO<br/> INDUSTRIAL MACHINE
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-23.png" alt="HJ CORPORATION" width={79.849} height={79}/></p>
              <div>
                HJ CORPORATION
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-24.png" alt="LOTTE FINE CHEMICAL" width={154} height={54}/></p>
              <div>
                LOTTE FINE CHEMICAL
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-25.png" alt="ENERTORK" width={189} height={45}/></p>
              <div>
                ENERTORK
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-26.png" alt="AUMA" width={153} height={48}/></p>
              <div>
                AUMA
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-27.png" alt="ROTORK" width={160} height={47}/></p>
              <div>
                ROTORK
              </div>
            </li>
          </ul>
        </div>
      )}

      {partnerIndex === 2 && (
        <div className="title-area3 partner-list">
          <p>{language?.partner_10}</p>
          <ul>
            <li>
              <p><Image src="/images/sub/partner/client-28.png" alt="TAKREER(UAE)" width={129.75} height={87}/></p>
              <div>
                TAKREER<br/>(UAE)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-29.png" alt="RUWAIS(UAE)" width={187} height={73}/></p>
              <div>
                RUWAIS<br/>(UAE)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-30.png" alt="ADNOC(UAE)" width={84} height={87}/></p>
              <div>
                ADNOC<br/>(UAE)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-31.png" alt="ADMA(UAE)" width={142} height={66}/></p>
              <div>
                ADMA<br/>(UAE)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-32.png" alt="ADCO(UAE)" width={148} height={82}/></p>
              <div>
                ADCO<br/>(UAE)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-33.png" alt="GASCO(UAE)" width={116} height={68}/></p>
              <div>
                GASCO<br/>(UAE)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-34.png" alt="ADGAS(UAE)" width={123} height={68}/></p>
              <div>
                ADGAS<br/>(UAE)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-35.png" alt="BOROUGE(UAE)" width={141.222} height={62}/></p>
              <div>
                BOROUGE<br/>(UAE)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-36.png" alt="OGAPCO(Saudi Arabia)" width={107} height={83}/></p>
              <div>
                OGAPCO<br/>(Saudi Arabia)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-37.png" alt="SWCC(Saudi Arabia)" width={83.655} height={86}/></p>
              <div>
                SWCC<br/>(Saudi Arabia)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-38.png" alt="SABIC(Saudi Arabia)" width={141} height={74}/></p>
              <div>
                SABIC<br/>(Saudi Arabia)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-39.png" alt="OOCEP(Oman)" width={88.898} height={88}/></p>
              <div>
                OOCEP<br/>(Oman)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-40.png" alt="BASRAH GAS COMPANY(Iraq)" width={88.898} height={88}/></p>
              <div>
                BASRAH GAS COMPANY<br/>(Iraq)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-41.png" alt="GAZPROM NEFT BADRA(Iraq)" width={124} height={62}/></p>
              <div>
                GAZPROM NEFT BADRA<br/>(Iraq)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-42.png" alt="MIDLAND REFINERIES CO.(Iraq)" width={122} height={90}/></p>
              <div>
                MIDLAND REFINERIES CO.<br/>(Iraq)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-43.png" alt="KHALDA PETROLEUM CO.(Egypt)" width={122} height={80}/></p>
              <div>
                KHALDA PETROLEUM CO.<br/>(Egypt)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-44.png" alt="RASGAS(Qatar)" width={88.898} height={88}/></p>
              <div>
                RASGAS<br/>(Qatar)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-45.png" alt="QATAR GAS(Qatar)" width={145.949} height={65}/></p>
              <div>
                QATAR GAS<br/>(Qatar)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-46.png" alt="QATAR STEEL(Qatar)" width={124} height={81}/></p>
              <div>
                QATAR STEEL<br/>(Qatar)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-47.png" alt="QATAR PETROLEUM(Qatar)" width={185} height={67}/></p>
              <div>
                QATAR PETROLEUM<br/>(Qatar)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-48.png" alt="QATAR FUEL ADDITIVES COMPANY(Qatar)" width={86} height={86}/></p>
              <div>
                QATAR FUEL ADDITIVES COMPANY<br/>(Qatar)
              </div>
            </li>
          </ul>
        </div>
      )}

      {partnerIndex === 3 && (
        <div className="title-area3 partner-list">
          <p>{language?.partner_11}</p>
          <ul>
            <li>
              <p><Image src="/images/sub/partner/client-49.png" alt="SLUMBERGER(USA)" width={181.6} height={40}/></p>
              <div>
                SLUMBERGER<br/>(USA)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-50.png" alt="FLUOR(USA)" width={174} height={40}/></p>
              <div>
                FLUOR<br/>(USA)
              </div>
            </li>
          </ul>
        </div>
      )}

      {partnerIndex === 4 && (
        <div className="title-area3 partner-list">
          <p>{language?.partner_12}</p>
          <ul>
            <li>
              <p><Image src="/images/sub/partner/client-51.png" alt="NIOC(Iran)" width={85.692} height={87}/></p>
              <div>
                NIOC<br/>(Iran)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-52.png" alt="NIOEC(Iran)" width={85.692} height={87}/></p>
              <div>
                NIOEC<br/>(Iran)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-53.png" alt="NIGC ENG - IGEDC(Iran)" width={133.444} height={87}/></p>
              <div>
                NIGC ENG - IGEDC<br/>(Iran)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-54.png" alt="ABAN AIR COOLER(Iran)" width={124} height={62}/></p>
              <div>
                ABAN AIR COOLER<br/>(Iran)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-55.png" alt="ZOLAL(Iran)" width={176.923} height={30}/></p>
              <div>
                ZOLAL<br/>(Iran)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-56.png" alt="GASTECH(Iran)" width={83} height={83}/></p>
              <div>
                GASTECH<br/>(Iran)
              </div>
            </li>
          </ul>
        </div>
      )}

      {partnerIndex === 5 && (
        <div className="title-area3 partner-list">
          <p>{language?.partner_13}</p>
          <ul>
            <li>
              <p><Image src="/images/sub/partner/client-57.png" alt="ELLIOTT EBARA(Japan)" width={160.69} height={60}/></p>
              <div>
                ELLIOTT EBARA<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-58.png" alt="HITACHI(Japan)" width={162.667} height={36}/></p>
              <div>
                HITACHI<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-59.png" alt="KVC(Japan)" width={214.5} height={36}/></p>
              <div>
                KVC<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-60.png" alt="NANSEI CORPORATION(Japan)" width={170.489} height={56}/></p>
              <div>
                NANSEI CORPORATION<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-61.png" alt="FUJI ELETRIC(Japan)" width={165.614} height={40}/></p>
              <div>
                FUJI ELETRIC<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-62.png" alt="EBARA(Japan)" width={78.514} height={83}/></p>
              <div>
                EBARA<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-63.png" alt="IHI Corporation(Japan)" width={130.114} height={50}/></p>
              <div>
                IHI Corporation<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-64.png" alt="MITSUBISHI(Japan)" width={68.936} height={72}/></p>
              <div>
                MITSUBISHI<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-65.png" alt="ASAHI KASEI(Japan)" width={195.294} height={40}/></p>
              <div>
                ASAHI KASEI<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-66.png" alt="CANON(Japan)" width={152} height={38}/></p>
              <div>
                CANON<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-67.png" alt="KAJI TECHNOLOGY CORP.(Japan)" width={212.5} height={40}/></p>
              <div>
                KAJI TECHNOLOGY CORP.<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-68.png" alt="MIE INTERNATIONAL(Japan)" width={170.118} height={48}/></p>
              <div>
                MIE INTERNATIONAL<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-69.png" alt="APPLICOT CORPORATION(Japan)" width={91.515} height={80}/></p>
              <div>
                APPLICOT CORPORATION<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-70.png" alt="ISHIGURO GROUP(Japan)" width={168.857} height={60}/></p>
              <div>
                ISHIGURO GROUP<br/>(Japan)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-71.png" alt="MITSUI E&S(Japan)" width={86} height={67}/></p>
              <div>
                MITSUI E&S<br/>(Japan)
              </div>
            </li>
          </ul>
        </div>
      )}

      {partnerIndex === 6 && (
        <div className="title-area3 partner-list">
          <p>{language?.partner_14}</p>
          <ul>
            <li>
              <p><Image src="/images/sub/partner/client-72.png" alt="JURONG AROMATICS CROP.(Singapore)" width={119} height={64}/></p>
              <div>
                JURONG AROMATICS CROP.<br/>(Singapore)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-73.png" alt="ADVANCED(Singapore)" width={172} height={49}/></p>
              <div>
                ADVANCED<br/>(Singapore)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-74.png" alt="FEDERAL HARDWARE ENG.(Singapore)" width={132} height={83}/></p>
              <div>
                FEDERAL HARDWARE ENG.<br/>(Singapore)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-75.png" alt="TTL(Thailand)" width={58} height={86}/></p>
              <div>
                TTL<br/>(Thailand)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-76.png" alt="PTT(Thailand)" width={141} height={64}/></p>
              <div>
                PTT<br/>(Thailand)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-77.png" alt="PETRONAS(Malaysia)" width={175} height={70}/></p>
              <div>
                PETRONAS<br/>(Malaysia)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-78.png" alt="BUMI ARMADA(Malaysia)" width={202} height={50}/></p>
              <div>
                BUMI ARMADA<br/>(Malaysia)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-79.png" alt="PETRO VIETNAM(Vietnam)" width={105} height={88}/></p>
              <div>
                PETRO VIETNAM<br/>(Vietnam)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-80.png" alt="VIETSOPETRO(Vietnam)" width={105} height={81}/></p>
              <div>
                VIETSOPETRO<br/>(Vietnam)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-81.png" alt="IKPT(Indonesia)" width={95} height={77}/></p>
              <div>
                IKPT<br/>(Indonesia)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-82.png" alt="IPSCO(Germany)" width={120} height={80}/></p>
              <div>
                IPSCO<br/>(Germany)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-83.png" alt="VSA(Austrailia)" width={109} height={83}/></p>
              <div>
                VSA<br/>(Austrailia)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-84.png" alt="DBP(Austrailia)" width={132} height={64}/></p>
              <div>
                DBP<br/>(Austrailia)
              </div>
            </li>
            <li>
              <p><Image src="/images/sub/partner/client-85.png" alt="SEA STAR VALVES(England)" width={177} height={60}/></p>
              <div>
                SEA STAR VALVES<br/>(England)
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
