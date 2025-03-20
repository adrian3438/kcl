import Modal from 'react-modal';
import '@/assets/modal.scss';
import Image from "next/image";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '60vh',
    height: 'auto',
    transform: 'translate(-50%, -50%)',
    zIndex : '9999',
    padding: '10px 20px 15px 20px'
  },
};

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  imgSrc?: string | undefined;
}

export default function ImageModal({isOpen, onRequestClose, imgSrc }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      shouldCloseOnEsc={false}
    >
      <div className="modal-wrapper">
        <div className="modal-header">
          <p></p>
          <button onClick={onRequestClose} className="modal-close-button">Close</button>
        </div>
        <div className="modal-content">
          {imgSrc && (
            <Image src={imgSrc} alt="" width={538} height={323} style={{width:'100%', height:'auto'}} />
          )}
        </div>

      </div>
    </Modal>
  )
}
