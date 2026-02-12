import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TravelerCard from "../../components/ui/TravelerCard";
import "../../styles/TravelersSection.scss";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/app";

interface Traveler {
  displayName: string;
  imageUrl: string;
  description: string;
}

const TravelersSection = () => {
  const [travelers, setTravelers] = useState<Traveler[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs.map((doc) => doc.data() as Traveler);
    setTravelers(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="travelers-section">
      <div className="container">
        <h1 className="section-title">Наші мандрівники</h1>

        {loading ? (
          <div className="loader" />
        ) : (
          <>
            <div className="travelers-grid">
              {travelers.slice(0, 4).map((traveler, i) => (
                <TravelerCard
                  key={i}
                  name={traveler.displayName}
                  avatar={traveler.imageUrl}
                  description={traveler.description}
                />
              ))}
            </div>

            <div className="show-all-container">
              <Link to="/travellers" className="show-all-link">
                Показати всіх
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TravelersSection;
