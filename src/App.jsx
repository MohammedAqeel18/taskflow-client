import { useState } from "react";


function App(){
  const [count,setCount]= useState(2)

  return(
    <>
    <div> 
    
    <button onClick={()=>setCount(count+2)} className="bg-green-600 "> Count: {count}</button>  
    </div>
    </>
  )
}

export default App;