 import firebase from 'firebase'

 const config = {
    apiKey: "AIzaSyDW3cd8iaojWK8T9kyvySchtEmK8jUIxzA",
    authDomain: "medifah-bd0cd.firebaseapp.com",
    databaseURL: "https://medifah-bd0cd.firebaseio.com",
    projectId: "medifah-bd0cd",
    storageBucket: "medifah-bd0cd.appspot.com",
    messagingSenderId: "44676147069"
  };
  const fire = firebase.initializeApp(config);

  export default fire
