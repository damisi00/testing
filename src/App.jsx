
// import { Routes, Route } from 'react-router-dom' ;
import VaModal1 from'./Components/VA-modal/VaModal1';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LayoutModal from './Components/VA-modal/LayoutModal';


function App() {
  // const [showModal, setShowModal] = useState(false);
    
  // const handleShow = () => setShowModal(true);
  // const handleClose = () =>{
  //     // e.preventDefault();
  //          setShowModal(false);
  // }
  return (
    <div className="App">
      {/* <button id='create_task' onClick={handleShow}>Create Task</button> */}
      {/* <Routes>
        <Route path="/va1" element={<VaModal />} />
      </Routes> */}
        <LayoutModal />
         <VaModal1 />
      {/* </LayoutModal> */}
    </div>
  );
}

export default App;
