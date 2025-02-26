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
        <div className="title-area3">
          <p>{language?.partner_08}</p>
          <ul className="image-area1">
            <li><Image src="/images/sub/partner/Corporate Clients Domestic Major EPCs.png" alt="Corporate Clients Domestic Major EPCs" width={1601} height={630}/></li>
          </ul>
        </div>
      )}

      {partnerIndex === 1 && (
        <div className="title-area3">
          <p>{language?.partner_09}</p>
          <ul className="image-area1">
            <li><Image src="/images/sub/partner/Corporate Clients Domestic Partners.png" alt="Corporate Clients Domestic Partners" width={1601} height={630}/></li>
          </ul>
        </div>
      )}

      {partnerIndex === 2 && (
        <div className="title-area3">
          <p>{language?.partner_10}</p>
          <ul className="image-area1">
            <li><Image src="/images/sub/partner/Corporate Clients Overseas – MIDDLE EAST.png" alt="Corporate Clients Overseas – MIDDLE EAST" width={1601} height={630}/></li>
          </ul>
        </div>
      )}

      {partnerIndex === 3 && (
        <div className="title-area3">
          <p>{language?.partner_11}</p>
          <ul className="image-area1">
            <li><Image src="/images/sub/partner/Corporate Clients Overseas- USA.png" alt="Corporate Clients Overseas- USA" width={1601} height={127}/></li>
          </ul>
        </div>
      )}

      {partnerIndex === 4 && (
        <div className="title-area3">
          <p>{language?.partner_12}</p>
          <ul className="image-area1">
            <li><Image src="/images/sub/partner/Corporate Clients Overseas – IRAN.png" alt="Corporate Clients Overseas – IRAN" width={1601} height={229}/></li>
          </ul>
        </div>
      )}

      {partnerIndex === 5 && (
        <div className="title-area3">
          <p>{language?.partner_13}</p>
          <ul className="image-area1">
            <li><Image src="/images/sub/partner/Corporate Clients Overseas JAPAN.png" alt="Corporate Clients Overseas JAPAN" width={1601} height={630}/></li>
          </ul>
        </div>
      )}

      {partnerIndex === 6 && (
        <div className="title-area3">
          <p>{language?.partner_14}</p>
          <ul className="image-area1">
            <li><Image src="/images/sub/partner/Corporate Clients Overseas OTHERS.png" alt="Corporate Clients Overseas OTHERS" width={1601} height={478}/></li>
            <li><Image src="/images/sub/partner/Corporate Clients Overseas OTHERS2.png" alt="Corporate Clients Overseas OTHERS" width={1601} height={223}/></li>
          </ul>
        </div>
      )}
      <div className="title-area3">
          </div>
    </div>
  )
}
