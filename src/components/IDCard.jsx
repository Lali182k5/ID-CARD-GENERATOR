import React, { useRef } from "react";
import "./IDCard.css";
import htmlToImage from "html-to-image";
import download from "downloadjs";

export default function IDCard({ name, job, email, image }) {
  const cardRef = useRef(null);

  const handleDownload = () => {
    htmlToImage.toPng(cardRef.current).then((dataUrl) => {
      download(dataUrl, `${name}-idcard.png`);
    });
  };

  return (
    <div>
      <div className="id-card" ref={cardRef}>
        <img src={image} alt={name} className="profile-image" />
        <div className="id-details">
          <h2><span>Name:</span> {name}</h2>
          <p><span>Job:</span> {job}</p>
          <p><span>Email:</span> {email}</p>
        </div>
      </div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}
