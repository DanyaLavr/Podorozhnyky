import React from "react";
import { useNavigate, Link } from "react-router-dom";
import TravelerCard from "../../components/ui/TravelerCard";
import "../../styles/TravelersSection.scss";
import travelers from "../../lib/firebase/travelers.json";

interface Traveler {
  id: number;
  name: string;
  avatar: string;
  description: string;
}

const TravelersSection  = () => {
  const navigate = useNavigate();

  const handleViewProfile = (id: number) => {
    navigate(`/travellers/${id}`);
  };


  return (
    <section className="travelers-section">
      <div className="container">
        <h1>Наші мандрівники</h1>

        <div className="travelers-grid">
          {travelers.slice(0, 4).map((traveler: Traveler) => (
            <TravelerCard
              key={traveler.id}
              name={traveler.name}
              avatar={traveler.avatar}
              description={traveler.description}
              onViewProfile={() => handleViewProfile(traveler.id)}
            />
          ))}
        </div>
        <Link to="/Alltravellers">Показати все</Link>
        <div className="show-all-container"></div>
      </div>
    </section>
  );
};

export default TravelersSection;
