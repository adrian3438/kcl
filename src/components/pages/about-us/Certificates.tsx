interface Props {
    language: any;
}

export default function Certificates({language}: Props) {
    return (
        <div className="container">
            <ul className="location">
                <li>{language?.header_1}</li>
                <li>{language?.header_1_6}</li>
            </ul>
            <div className="title-area1">
                <h2>{language?.certificates_01}</h2>
            </div>
            <div className="certificates">

            </div>
        </div>
    )
}
