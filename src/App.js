import { Component } from "react";
import { Redirect, Switch, Route } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"
import { createWorker } from 'tesseract.js';

import Appbar from './components/Appbar'
import Footer from "./components/Footer"
import AboutUs from './pages/AboutUs';
import OCR from './pages/OCR';
import Translator from "./components/Translator"

class App extends Component {

  state = {
    currentFile: null,
    scannedText: "",
    loading: 1,
  }

  handleChangeImage = (e) => {
    this.setState({ currentFile: e.target.files[0] })
  }

  saveFile = async (history) => {
    try {
      const worker = createWorker({
        logger: m => this.setState({ loading: (Math.floor(m.progress * 100) / 100) * 100 }),
      });

      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(this.state.currentFile);
      this.setState({ scannedText: text, loading: 1 });
      history.push('/translator')

    } catch (error) {
      alert(error)
      this.setState({ loading: 1 });
    }
  }

  render() {
    const { scannedText, loading } = this.state;

    return (
      <div className="App">
        <ToastContainer autoClose={5000} position={toast.POSITION.TOP_RIGHT} />

        <Route render={(props) => <Appbar {...props} />} />

        <Switch>
          <Route path="/" exact render={(props) => <OCR {...props} onCurrentFile={this.state.currentFile} onHandleChangeImage={this.handleChangeImage} onSaveFile={this.saveFile} onLoading={loading} />} />
          <Route path="/translator" exact render={(props) => <Translator {...props} onScannedText={scannedText} />} />
          <Route path="/aboutus" exact render={(props) => <AboutUs {...props} />} />
          <Redirect to="/" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
