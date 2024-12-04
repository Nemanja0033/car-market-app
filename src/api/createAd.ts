import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config/firebase"
import { AdDataType } from "../types/AdDataType";

//this function storing all ad data into firestore, we are using state as parameters

const adsCollectionRef = collection(db, "ads");

    export const handleCreateAd =  async ({brand, model, fuel, engineCm, color, year, gearboxType, carBodyType, price, city, phone, imageUrl}: AdDataType) => {
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
                imageUrl,
                author:{
                    username: auth.currentUser?.displayName,
                    id: auth.currentUser?.uid,
                },
            }
        );
        location.reload();
    }