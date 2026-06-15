const firebaseConfig = {
  apiKey: "AIzaSyBTp6MArmUWR_ugA2QX75mdZKkueVzmBUU",
  authDomain: "comp-2026-dima-p.firebaseapp.com",
  databaseURL: "https://comp-2026-dima-p-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comp-2026-dima-p",
  storageBucket: "comp-2026-dima-p.firebasestorage.app",
  messagingSenderId: "631357932478",
  appId: "1:631357932478:web:34dde6177a95aaa5b92fef",
  measurementId: "G-BSYZVJ6PXJ"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
