import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBTcn24Cx35Cw5s1jeqEnQh9gaXccv_c_8",
    authDomain: "si669-film.firebaseapp.com",
    databaseURL: "https://si669-film.firebaseio.com",
    projectId: "si669-film",
    storageBucket: "si669-film.appspot.com",
    messagingSenderId: "1085644586813",
    appId: "1:1085644586813:web:354b9a69d3c17cfdbb4f54"
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase