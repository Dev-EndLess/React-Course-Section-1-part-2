import './App.css';
import Avatar from './components/Avatar'
import Name from './components/Name';
import Buttons from './components/Buttons';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Avatar />
      <Name />
      <Buttons />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}

export default App;
