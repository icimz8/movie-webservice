import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  useEffect(()=>{
    console.log("I run only once");
  }, [])
  useEffect(()=>{
      console.log("I run when 'Counter' changes")
    }, [counter]);
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR",keyword)
    }}, [keyword]);
  return (
     <div>
       <input value={keyword}
        onChange={onChange} 
        type="text" placeholder="Search here.."/>
       <h1>{counter}</h1>
       <button onClick={onClick}>click ME </button>
     </div>
  );
}

export default App;
