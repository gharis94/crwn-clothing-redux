import {    initializeApp  } from "firebase/app";

import {getFirestore,doc,getDoc,getDocs,setDoc,collection,writeBatch,query} from 'firebase/firestore'
import {getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB4R-OZwZISOVeQrojyBgUT208spmKTaVs",
    authDomain: "crwn-clothing-redux.firebaseapp.com",
    projectId: "crwn-clothing-redux",
    storageBucket: "crwn-clothing-redux.appspot.com",
    messagingSenderId: "388735510044",
    appId: "1:388735510044:web:cf88c45f7653990e7ea1d9"
};

 initializeApp(firebaseConfig);

//firestore

export const db = getFirestore();

// this method is use to upload data to firestore
export const addCollectionAndDocuments = async(collectionkey,objectToadd)=>{
    const collectionRef = collection(db,collectionkey);

    const batch = writeBatch(db);
    objectToadd.forEach(object=>{
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object)
    })
    await batch.commit();
    console.log("done")
};

//fetching data from firestore
export const getCollectionAndDocments =async()=>{
    
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);
    
    const querySnap = await getDocs(q);
    
    return querySnap.docs.map(docsnapshot=>docsnapshot.data())
    /*const categoryMap = querySnap.docs.reduce((acc,docSnap)=>{
        console.log(docSnap.data())
        const {title,items} = docSnap.data();
        acc[title.toLowerCase()] = items;
        return acc;
    },{})*/

   // return categoryMap;
};

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

//signin with google popup
export const GooglePopup = () => signInWithPopup(auth,provider);

//signin with email and password
export const SignAuthUserWithEmailAndPassword =async(email,password)=>{
    if(!email || !password)return;

    return await signInWithEmailAndPassword(auth,email,password);
};

//creating user details in auth
export const CreateAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password)return;

    return createUserWithEmailAndPassword(auth,email,password);
};

//sign out 
export const SignOutUser =async()=>await signOut(auth);


//creating user details in firestore

export const CreateUserDocFromAuth =async(userauth,otherprops={})=>{
    if(!userauth)return;

    const userDoc = doc(db,'users',userauth.uid);

    
    const userSnap = await getDoc(userDoc);

    
    if(!userSnap.exists()){
        const{displayName,email} = userauth;
        const CreatedAt = new Date();
        try{
            await setDoc(userDoc,{
                displayName,
                email,
                CreatedAt,
                ...otherprops
            })
        }catch(error){
            console.log("ERROR:",error.message)
        }
    }
};


//listner
export const onAuthStateChanedListner=(callback)=>{
   return onAuthStateChanged(auth,callback);
}