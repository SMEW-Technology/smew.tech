import {addDoc, collection, Timestamp} from "firebase/firestore/lite";
import {database} from "@/utils/FirebaseConfig";

// @ts-ignore
export const ContactForm = async ({ name, email, comment }) => {
    try {
        const dbInstance = collection(database, "contact");
        await addDoc(dbInstance, {
            name,
            email,
            comment,
            sentAt: Timestamp.now().toDate(),
        });
        return 0;
    } catch (err) {
        console.log(err)
        return -1;
    }
};