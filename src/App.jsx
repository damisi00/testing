import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom' ;
import VaModal from'./Components/VA-modal/VaModal';
import './App.css';
// import TaskSideBar from './Components/VA-modal/TaskSideBar';

function App() {
  const [showModal, setShowModal] = useState(false);
    
  const handleShow = () => setShowModal(true);
  const handleClose = (e) =>{
      e.preventDefault();
           setShowModal(false);
  }
  return (
    <div className="App">
      {/* <button id='create_task' onClick={handleShow}>Create Task</button> */}
      {/* <Routes>
        <Route path="/va1" element={<VaModal />} />
      </Routes> */}
      <VaModal show={showModal} onClose={handleClose}/>
  
      {/* <TaskSideBar /> */}
    </div>
  );
}

export default App;
