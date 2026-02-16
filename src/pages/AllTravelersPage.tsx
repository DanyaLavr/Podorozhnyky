import { useEffect, useState } from "react";
import TravelerCard from "../components/ui/TravelerCard";
import "../styles/AllTravelersPage.scss";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/app";
import H1 from "@/components/ui/H1";
import Loader from "@/components/ui/Loader";

interface Traveler {
  id: string;
  displayName: string;
  imageUrl: string;
  description: string;
}

export default function AllTravelersPage() {
  const [travelers, setTravelers] = useState<Traveler[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Traveler, "id">),
      }));
      setTravelers(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="all-travelers-page">
      <div className="container">
        <H1 variant="dark">Мандрівники</H1>

        {loading ? (
          <Loader loading={loading} />
        ) : (
          <>
            <div className="travelers-grid">
              {travelers.slice(0, visibleCount).map((traveler) => (
                <TravelerCard

                  key={traveler.id}
                  name={traveler.displayName}
                  avatar={traveler.imageUrl}
                  description={traveler.description} id={traveler.id} />
              ))}
            </div>

            {visibleCount < travelers.length && (
              <div className="show-more-container">
                <button
                  className="show-more-btn"
                  onClick={() => setVisibleCount(travelers.length)}
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
