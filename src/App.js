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
import CurrentExhibition from './Components/CurrentExhibition'

function App( props ) {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)
  // const [, updateState] = useState();
  // const forceUpdate = useCallback(() => updateState({}), []);

	useEffect(() => {
		firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
	})

  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={ CurrentExhibition } />
      <Route path="/artists" component={ Artists } />
      <Route path="/about" component={ About } />
      <Route exact path="/viewing-room/login" component={ Login } />
      <Route path="/viewing-room/main" component={ Catalogue } />
      <Route path="/exhibitions" component={ Exhibitions } />
    </Router>
  );
}

export default App;
