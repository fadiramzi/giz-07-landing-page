import './App.css';
import  {  BreakpointProvider } from 'react-socks';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  return (
     <BreakpointProvider>
    <Header />
    <Body />
  </BreakpointProvider>

  );
}

export default App;
