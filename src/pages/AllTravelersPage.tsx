import { useEffect, useState } from "react";
import TravelerCard from "../components/ui/TravelerCard";
import "../styles/AllTravelersPage.scss";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/app";

interface Traveler {
  displayName: string;
  imageUrl: string;
  description: string;
}

export default function AllTravelersPage() {
  const [travelers, setTravelers] = useState<Traveler[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
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
    <section className="all-travelers-page">
      <div className="container">
        <h1 className="page-title">Мандрівники</h1>

        {loading ? (
          <div className="loader" />
        ) : (
          <>
            <div className="travelers-grid">
              {travelers.slice(0, visibleCount).map((traveler, i) => (
                <TravelerCard
                  key={i}
                  name={traveler.displayName}
                  avatar={traveler.imageUrl}
                  description={traveler.description}
                />
              ))}
            </div>

            {visibleCount < 12 && (
              <div className="show-more-container">
                <button
                  className="show-more-btn"
                  onClick={() => setVisibleCount(12)}
                >
                  Показати всіх
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
