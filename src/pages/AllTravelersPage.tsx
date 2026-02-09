import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TravelerCard from "../components/ui/TravelerCard";
import "../styles/AllTravelersPage.scss";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/app";

interface Traveler {
  id: string;
  name: string;
  avatar: string;
  description: string;
}

export default function AllTravelersPage() {
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
    <section className="all-travelers-page">
      <div className="container">
        <h1>Мандрівники</h1>

        <div className="travelers-grid">
          {travelers.slice(0, 12).map((traveler) => (
            <TravelerCard
              key={traveler.id}
              name={traveler.name}
              avatar={traveler.avatar}
              description={traveler.description} onViewProfile={function (): void {
                throw new Error("Function not implemented.");
              } }            />
          ))}
        </div>

        <div className="show-less-container">
          <Link to="/" className="show-less-link">
            Показати менше
          </Link>
        </div>
      </div>
    </section>
  );
}
