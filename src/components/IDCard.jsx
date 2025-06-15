import React, { useRef } from "react";
import "./IDCard.css";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export default function IDCard({ name, job, email, image }) {
  const cardRef = useRef(null);

  const handleDownload = () => {
    htmlToImage.toPng(cardRef.current).then((dataUrl) => {
      download(dataUrl, `${name}-idcard.png`);
    });
  };

  return (
    <div className="card-wrapper">
      <div className="id-card" ref={cardRef}>
        <img src={image} alt={name} className="profile-image" />
        <div className="id-details">
          <h2>{name}</h2>
          <p><strong>Job:</strong> {job}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      </div>
      <button className="download-button" onClick={handleDownload}>Download ID Card</button>
    </div>
  );
}
