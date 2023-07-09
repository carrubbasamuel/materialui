import { Box } from '@mui/system';
import './App.css';
import ModalCart from './Components/Cart';
import Griglia from './Components/Griglia';
import Navbar from './Components/Navbar';
import Header from './Components/Paper';

function App() {
  return (
    <Box >
      <Navbar />
      
      <Header />
      <ModalCart />
      
      <Griglia />
    </Box>

  );
}

export default App;
