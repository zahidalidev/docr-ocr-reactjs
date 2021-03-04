import Appbar from './components/Appbar'
import Footer from "./components/Footer"
import OCR from './pages/OCR';

function App() {
  return (
    <div className="App">
      {/*main Components */}
      <Appbar /> 
      <OCR />
      <Footer />
    </div>
  );
}

export default App;
