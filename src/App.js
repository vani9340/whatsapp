import './App.css';
import Nav from './Components/nav';
import Integration from './Components/Integration'
import Hero from './Components/Hero';
import Conversa from './Components/Conversa';
import Feature from './Components/features';
import Card from './Components/Cards';
import Form from './Components/Form';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
    <Nav/>
    <Integration/>
    <Hero/>
    <Feature/>
    <Conversa/>
    <Card/>
    <Form/>
    <Footer/>
    </div>
  )
}

export default App;
