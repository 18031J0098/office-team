import {Route, Routes} from 'react-router-dom'
import Deepak from './components/Deepak'
import Aakash from './components/Aakash'
import DasBro from './components/DasBro'
import Rohit from './components/Rohit'
import SriRam from './components/SriRam'
import Header from './components/Header'

const App =() => (
  <>
  <Header />
   <Routes>
  <Route exact path="/" element={<Deepak />} />
  <Route exact path="/aakash" element={<Aakash />} />
  <Route exact path="/dasbro" element={<DasBro />} />
  <Route exact path="/rohit" element={<Rohit />} />
  <Route exact path="/sriram" element={<SriRam />} /> 
  </Routes> 
  </>
)
export default App