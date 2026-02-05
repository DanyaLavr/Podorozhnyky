import React from "react";
import { useNavigate } from "react-router-dom";
import TravelerCard from "../components/ui/TravelerCard";
import "../styles/AllTravelersPage.scss";
import travelers from "../lib/firebase/travelers.json";

const AllTravelersPage: React.FC = () => {
  const navigate = useNavigate();

  const handleViewProfile = (id: number) => {
    navigate(`/travelers/${id}`); 
  };

  const handleGoBack = () => {

    const section = document.querySelector(".travelers-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/"); 
    }
  };

  return (
    <section className="all-travelers-page">
      <div className="container">
        <button className="back-btn" onClick={handleGoBack}>
          Показати менше
        </button>

        <h1>Мандрівники</h1>

        <div className="travelers-grid">
          {travelers.map((traveler) => (
            <TravelerCard
              key={traveler.id}
              name={traveler.name}
              avatar={traveler.avatar}
              description={traveler.description}
              onViewProfile={() => handleViewProfile(traveler.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTravelersPage;
