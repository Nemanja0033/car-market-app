import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config/firebase"

//this function storing all ad data into firestore, we are using state as parameters

export const handleCreateAd =  async (brand:string, model:string, fuel:string, engineCm:string, color:string, year:string, gearboxType:string, carBodyType:string, price:string, city:string, phone:string,) => {
    const adsCollectionRef = collection(db, "ads");
   try{
        await addDoc(adsCollectionRef, {
            brand,
            model,
            fuel,
            engineCm,
            color,
            year,
            gearboxType,
            carBodyType,
            price,
            city,
            phone,
            author:{
                username: auth.currentUser?.displayName,
                id: auth.currentUser?.uid,
            }
        } 
    );
   }
   catch(err){
    console.log('Error with add create' + err);
   }
}