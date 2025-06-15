import React, { useState } from "react";
import IDCard from "./components/IDCard";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    email: "",
    image: null,
    imagePreview: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: previewUrl,
      }));
    }
  };

  return (
    <div className="app-container">
      <form className="input-form">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="job" placeholder="Job" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="file" accept="image/*" onChange={handleImageChange} required />
      </form>

      {formData.imagePreview && (
        <IDCard
          name={formData.name}
          job={formData.job}
          email={formData.email}
          image={formData.imagePreview}
        />
      )}
    </div>
  );
}
