import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TravelerCard from "../../components/ui/TravelerCard";
import "../../styles/TravelersSection.scss";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/app";

interface Traveler {
  id: string;
  displayName: string;
  imageUrl: string;
  description: string;
}

const TravelersSection = () => {
  const [travelers, setTravelers] = useState<Traveler[]>([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Traveler, "id">),
    }));
    setTravelers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="travelers-section">
      <div className="container">
        <h1>Наші мандрівники</h1>

        <div className="travelers-grid">
          {travelers.slice(0, 4).map((traveler) => (
            <TravelerCard
              key={traveler.id}
              name={traveler.displayName}
              avatar={traveler.imageUrl}
              description={traveler.description} onViewProfile={function (): void {
                throw new Error("Function not implemented.");
              } }            />
          ))}
        </div>

        <div className="show-all-container">
          <Link to="/Alltravellers" className="show-all-link">
            Показати все
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravelersSection;
