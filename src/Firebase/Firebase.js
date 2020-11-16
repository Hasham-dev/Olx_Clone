import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
let firebaseConfig = {
  
  apiKey: "AIzaSyAYlvi49_-4QKCKrlExnW4a_T4bUxayUgU",
    authDomain: "blogapp-hv.firebaseapp.com",
    databaseURL: "https://blogapp-hv.firebaseio.com",
    projectId: "blogapp-hv",
    storageBucket: "blogapp-hv.appspot.com",
    messagingSenderId: "80401392620",
    appId: "1:80401392620:web:5e8b6a1a8198a48d2356c9",
    measurementId: "G-0DLDLD215L" 

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Auth Class
class Firebase {
  // Authentications
  signUp(name, email, password) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.auth().onAuthStateChanged(user => {
            user
              .updateProfile({
                displayName: name
              })
              .then(() => resolve(user));
          });
        })
        .catch(er => {
          reject(er.message);
        });
    });
  }

  logIn(email, password) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);

          resolve(user.user);
        })
        .catch(er => {
          reject(er.message);
        });
    });
  }

  signOut() {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => resolve())
        .catch(er => reject(er));
    });
  }

  isSignIn() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  }

  // Firebase Storage
  store(file) {
    return new Promise((resolve, reject) => {
      firebase
        .storage()
        .ref("pic/" + file.name)
        .put(file)
        .then(n => {
          firebase
            .storage()
            .ref(n.metadata.fullPath)
            .getDownloadURL()
            .then(url => {
              resolve(url);
            })
            .catch(er => {
              reject(er);
              console.log(er);
            });
        })
        .catch(er => {
          reject(er);
          console.log(er);
        });
    });
  }

  // Firestore
  storeAd(ad, email) {
    return new Promise((resolve, reject) => {
      let publicRef = firebase
        .firestore()
        .collection("publicAds")
        .doc();

      publicRef
        .set(ad)
        .then(() => resolve())
        .catch(er => reject(er));

      let userRef = firebase
        .firestore()
        .collection(email)
        .doc();

      userRef.set(ad);
    });
  }

  getPublicAds() {
    return new Promise((resolve, reject) => {
      let publicRef = firebase.firestore().collection("publicAds");
      let ads = [];

      publicRef
        .get()
        .then(docs => {
          docs.forEach(doc => {
            ads.push(doc.data());
          });

          resolve(ads);
        })
        .catch(er => reject(er));
    });
  }

  getUserAds(email) {
    return new Promise((resolve, reject) => {
      let userRef = firebase.firestore().collection(email);
      let ads = [];

      userRef
        .get()
        .then(docs => {
          docs.forEach(doc => {
            ads.push(doc.data());
          });

          resolve(ads);
        })
        .catch(er => reject(er));
    });
  }
}
export default new Firebase();
