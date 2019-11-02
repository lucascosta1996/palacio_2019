import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
  apiKey: "AIzaSyDQyMY0xYH4eNML9Sa-xrjchsF0ZK5y73c",
  authDomain: "palacioxyz-1ba8b.firebaseapp.com",
  databaseURL: "https://palacioxyz-1ba8b.firebaseio.com",
  projectId: "palacioxyz-1ba8b",
  storageBucket: "palacioxyz-1ba8b.appspot.com",
  messagingSenderId: "671224123755",
  appId: "1:671224123755:web:9cfb09979809251d"
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
		return this.auth.signOut()
  }

  async newsletter(name, email) {
    await this.db.doc(`newsletter/${email}`).set({
      name: name,
      email: email
    }).then( (response) => { return response })
  }
  
  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    .then( (response) => {
      return
    } )
    .catch( (error) => {
      alert(error)
    } )
    await this.db.doc(`users/${email}`).set({
      name: name,
      email: email
    }).then( (response) => {
      return
    } )
    .catch( (error) => {
      alert( error )
    } )
		return this.auth.currentUser.updateProfile({
			displayName: name
    })
    .then( (response) => {
      return
    } )
  }

  async getEnglishText( en ) {
    let json = {}
    await this.db.collection( 'en' ).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        json = Object.assign( doc.data(), en )
      })
    })
    .catch( error => {
      console.log( 'error', error )
    } )
    
    return json
  }
  
  isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
  }
  
  getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
  }
  
  isLoggedIn() {
    return this.auth.currentUser
  }
}

export default new Firebase