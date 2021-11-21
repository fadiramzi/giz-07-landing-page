import './App.css';
import  {  BreakpointProvider } from 'react-socks';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
     <BreakpointProvider>
    <Header />
    <Body />
    <Footer />
  </BreakpointProvider>

  );
}

export default App;
