import { Redirect, Switch, Route } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"

import Appbar from './components/Appbar'
import Footer from "./components/Footer"
import AboutUs from './pages/AboutUs';
import OCR from './pages/OCR';


function App() {

  return (
    <div className="App">
      <ToastContainer autoClose={5000} position={toast.POSITION.TOP_RIGHT} />

      <Route render={(props) => <Appbar {...props} />} />

      <Switch>
        <Route path="/" exact render={(props) => <OCR {...props} />} />
        <Route path="/aboutus" exact render={(props) => <AboutUs {...props} />} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
