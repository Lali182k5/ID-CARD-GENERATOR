import React from "react";
import "./IDCard.css";

export default function IDCard({ name, job, email, image }) {
  return (
    <div className="id-card">
      <img src={image} alt={name} className="profile-image" />
      <div className="id-details">
        <h2><span>Name:</span> {name}</h2>
        <p><span>Job:</span> {job}</p>
        <p><span>Email:</span> {email}</p>
      </div>
    </div>
  );
}
