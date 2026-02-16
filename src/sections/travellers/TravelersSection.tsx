import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TravelerCard from "../../components/ui/TravelerCard";
import "../../styles/TravelersSection.scss";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/app";
import H2 from "@/components/ui/H2";
import Loader from "@/components/ui/Loader";

interface Traveler {
  id: string;
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
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Traveler, "id">),
    }));
    setTravelers(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="travelers-section">
      <div className="container">
        <H2>Наші мандрівники</H2>

        {loading ? (
          <Loader loading={loading} />
        ) : (
          <>
            <div className="travelers-grid">
              {travelers.slice(0, 4).map((traveler) => (
                <TravelerCard
                  key={traveler.id}
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
