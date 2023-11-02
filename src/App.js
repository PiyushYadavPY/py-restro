import './App.css';
import Herosection2 from './component/herosecction2';
import Herosection from './component/herosection';
import Navbar from './component/navbar';
import Reviews from './component/reviews';
import Footer from './component/footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Herosection2/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
