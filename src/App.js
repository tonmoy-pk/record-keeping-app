import './App.css';
import Haeader from './components/Haeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function App() {

  const [date, setDate] = useState("");
  const [target, setTarget] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Haeader/>
      <div className='form'>
        <Stack spacing={2} direction="row">
          <TextField value={date} onChange={(e) => setDate(e.target.value)} id="outlined-basic" label="Date" variant="outlined" />
          <TextField value={target} onChange={(e) => setTarget(e.target.value)} id="outlined-basic" label="Target" variant="outlined" />
          <Button variant="contained"><AddIcon/></Button>
        </Stack>
      </div>
      
    </div>
  );
}

export default App;
