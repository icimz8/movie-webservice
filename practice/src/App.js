import {useState, useEffect} from "react";

function App(){
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
const deleteBtn = (event) => {
  event.target.parentNode.remove();
}

  return(
    <div>
      <h1>🛒check-list ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text"/>
        <button>add</button>
      </form>
      <hr/>
      {toDos.map((item, index) => (
          <li key={index}>{item} <button onClick={deleteBtn}>❌</button></li>  
        ))}
    </div>
  )
}
export default App;
