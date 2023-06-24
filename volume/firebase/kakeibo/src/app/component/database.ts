//import { Component } from "react";
import firebaseApp from "./firebaseApp";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, set } from "firebase/database";

//const admin = require("firebase-admin");

//const serviceAccount = require("./keyfile.json");

//admin.initializeApp({
//  credential: admin.credential.cert(serviceAccount),
//  databaseURL: "https://kakeibo-59131-default-rtdb.asia-southeast1.firebasedatabase.app"
//});


const database = getDatabase(firebaseApp);

export default function setData() {
    // Setting the data.
    var cartId = 1;
    const data = {
    cartId: cartId,
    products: [
        { 
            'title' : 'product1',
            'price': 50
        },
        { 
            'title' : 'product2',
            'price': 30
        },
        { 
            'title' : 'product3',
            'price': 70
        },     
    ],
    }
    set(ref(database), {
        username: "aaa",
        email: "example.com",
    }).then( () => {
    // Success.
    } ).catch( (error: any) => {
        console.log(error);
    } );

    return;
}







