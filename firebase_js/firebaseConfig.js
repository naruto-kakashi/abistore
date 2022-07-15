const firebaseConfig = {
    apiKey: "AIzaSyD24tCsJDYN6L0B0Sz8c9YmAeGN6VeSWvQ",
    authDomain: "abistock-adfb2.firebaseapp.com",
    projectId: "abistock-adfb2",
    storageBucket: "abistock-adfb2.appspot.com",
    messagingSenderId: "558630162607",
    appId: "1:558630162607:web:7f3ba4f92359f6d9e0845a"
  };
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const storage=firebase.storage();