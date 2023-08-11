
import React ,{ useState } from "react";
import './../styles/App.css';

const App = () => {
  const [showModal,setShowModel] = useState(false);
  const onClick = ()=>{
    setShowModel(true);
  }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className="child">
            <h2>Child Component</h2>
            <button onClick={onClick}>Show Modal</button>
            {showModal && <div> <h3>Modal Content</h3>
              <p>This is the modal content.</p>
            </div>}
      </div>
       
    </div>
  )
}

export default App
