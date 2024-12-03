import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { auth, db } from "../../config/firebase"

//this function create user and store the data in db

export const createUser = async () => {
    const userCollectionRef = collection(db, "users");
    const userQuery = query(userCollectionRef, where("userId", "==", auth.currentUser?.uid));
    const querySnapshot = await getDocs(userQuery);

    if(querySnapshot.empty){
        await addDoc(userCollectionRef, {
            username: auth.currentUser?.displayName,
            userId: auth.currentUser?.uid
        })
    }
}