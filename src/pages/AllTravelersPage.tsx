import React from "react";
import { useNavigate } from "react-router-dom";
import TravelerCard from "../components/ui/TravelerCard";
import "../styles/AllTravelersPage.scss";
import travelers from "../lib/firebase/travelers.json";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/lib/firebase/app";
import { useEffect } from "react";

export default function AllTravelersPage  ()  {
 /*  const navigate = useNavigate();

  const handleViewProfile = (id: number) => {
    navigate(`/travelers/${id}`);
  };  
 */


  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="all-travelers-page">
      <div className="container">
        <button className="back-btn" onClick={() => {
          
        }}>
          Показати менше 
        </button>

        <h1>Мандрівники</h1>

        <div className="travelers-grid">
       {/*    {travelers.map((traveler) => (
            <TravelerCard
              key={traveler.id}
              name={traveler.name}
              avatar={traveler.avatar}
              description={traveler.description}
              onViewProfile={() => handleViewProfile(traveler.id)}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
};

