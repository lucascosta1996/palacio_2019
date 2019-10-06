import React, { useEffect ,useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import LanguageOptions from './Components/Language/LanguageOptions'
import Navigation from './Components/Navigation/Navigation'
import Artists from './Components/Artists/Artists'
import About from './Components/About/About'
import Copyright from './Components/Copyright/Copyright'
import Login from './Components/Login/Login'
import firebase from './firebase'
import Catalogue from './Components/Catalogue/Catalogue'
import Exhibitions from './Components/Exhibitions/Exhibitions'

function App( props ) {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})

  return (
    <Router>
      <Navigation />
      <Route exact path="/" render={ () => <Copyright position="absolute" /> } />
      <Route path="/artists" component={ Artists } />
      <Route path="/about" component={ About } />
      <Route exact path="/viewing-room/login" component={ Login } />
      <Route path="/viewing-room/catalogue" component={ Catalogue } />
      <Route path="/exhibitions" component={ Exhibitions } />
    </Router>
  );
}

export default App;
