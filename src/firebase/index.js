import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyALMLRwQ2DIrNgosPZUOk6lGv_9_Q18WcM',
  authDomain: 'codec-iclasses.firebaseapp.com',
  databaseURL: 'https://codec-iclasses.firebaseio.com',
  projectId: 'codec-iclasses',
  storageBucket: 'codec-iclasses.appspot.com',
  messagingSenderId: '187062855079',
  appId: '1:187062855079:web:67e14a1383d56d2238c282'
}

// Initialize Firebase
const fireApp = firebase.initializeApp(firebaseConfig)
export default fireApp.firestore()
