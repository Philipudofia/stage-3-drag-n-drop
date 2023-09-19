import React from 'react';
import SignIn from './components/auth/SignIn.jsx'
import AuthDetails from './components/AuthDetails.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  const [signedIn, setSignedIn] = React.useState(false)
  console.log(signedIn)
  return (
    <div>
      {signedIn ? <React.Fragment>
        <AuthDetails 
          setSignedIn = {e=> setSignedIn(e)}
        />
        <Home />
      </React.Fragment> : ''}
      {signedIn ? '': <SignIn
        setSignedIn = {e=> setSignedIn(e)}
      />}
    </div>
  );
}

export default App;
