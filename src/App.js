import React from "react";
import IDCard from "./components/IDCard";
import profileImage from "./assets/girl.jpeg";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <IDCard 
        name="Lali" 
        job="Software Engineer" 
        email="lali8142@example.com" 
        image={profileImage} 
      />
    </div>
  );
}
