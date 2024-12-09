import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import AdCard from "../components/AdCard"

const Ads = () => {

  const [adData, setAdData] = useState<any[]>([]);
  const collectionRef = collection(db, "ads");

  useEffect(() => {
      const fetchData = async () => {
          const data = await getDocs(collectionRef);
          setAdData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }

      fetchData();
  }, [])

  return (
    <div className="flex justify-center">
      <div className="flex-row w-1/2">
        {adData.map((ad) => (
          <AdCard brand={ad.brand} model={ad.model} fuel={ad.fuel} engineCm={ad.engineCm} color={ad.color} year={ad.year} gearboxType={ad.gearboxType} carBodyType={ad.carBodyType} price={ad.price} imageUrl={ad.imageUrl} city={ad.city} phone={ad.phone} />
        ))}
      </div>
    </div>
  )
}

export default Ads