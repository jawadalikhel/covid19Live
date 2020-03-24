import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCRoEVc6mu1c8JZgw8yXHCl2ob_j_dIl40",
    authDomain: "covid19livedata.firebaseapp.com",
    databaseURL: "https://covid19livedata.firebaseio.com",
    projectId: "covid19livedata",
    storageBucket: "covid19livedata.appspot.com",
    messagingSenderId: "484302017330",
    appId: "1:484302017330:web:31cdadc0c3faaafbebbd2b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;