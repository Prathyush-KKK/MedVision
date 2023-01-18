import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzYuto0bu8yOYwR-_hA183No0qRdWXMJk",
  authDomain: "medvision-1674037784779.firebaseapp.com",
  projectId: "medvision-1674037784779",
  storageBucket: "medvision-1674037784779.appspot.com",
  messagingSenderId: "73190017924",
  appId: "1:73190017924:web:dd0c00270d0b0acb24abd1",
  measurementId: "G-W4YFVJESNC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    //firebase login
    const result = await signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        // console.log(user.email);
        // localStorage.setItem()
        localStorage.setItem("name", user.displayName);
        localStorage.setItem("email", user.email);

        // alert(user.displayName);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // alert(errorMessage);
      });
    //console.log(result);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { auth, signInWithGoogle };
