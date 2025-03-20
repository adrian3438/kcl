'use client';
import {useState} from "react";
import ImageModal from "@/components/sub/ImageModal";
import Image from "next/image";

interface Props {
  projectImages: any;
}

export default function ProjectDetailImageList({projectImages}: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const openModal = (imgSrc: string) => {
    setModalIsOpen(true);
    setImgSrc(imgSrc);
  }
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {projectImages && projectImages.length > 0 && projectImages.map((item: any, index: number) =>
        <li key={index} onClick={() => openModal(item?.imageFile)}><Image src={item?.imageFile} alt="" width={500} height={375}/></li>
      )}
      <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} imgSrc={imgSrc}/>
    </>
  )
}
