import { useState } from 'react'

function App() {
  const [array, setArray] = useState([null, null, null, null, null, null, null, null, null])
  const [newValue,setnewValue] = useState(true)

  const change = (n) => {
    const newArray = [...array]

    if (newValue == true) {
      newArray[n] = "X"
    }
    else {
      newArray[n] = "O"
    }

    if(newArray[0] == "O" && newArray[1] == "O" && newArray[2] == "O"){
       console.log("gano O")
    }
    if(newArray[3] == "O" && newArray[4] == "O" && newArray[5] == "O"){
      console.log("gano O")
   }
   if(newArray[6] == "O" && newArray[7] == "O" && newArray[8] == "O"){
    console.log("gano O")
   }
   if(newArray[0] == "O" && newArray[3] == "O" && newArray[6] == "O"){
    console.log("gano O")
   }
   if(newArray[0] == "O" && newArray[1] == "O" && newArray[2] == "O"){
    console.log("gano O")
   }
    setnewValue(!newValue)
    setArray(newArray)

    console.log(newArray);

  }
  return (
    <>
      <div className='TaTeTi'> TA TE TI</div>
      <div className='container'>
        <div className="item" onClick={() => change(0)}>{array[0]}</div>
        <div className="item" onClick={() => change(1)}>{array[1]}</div>
        <div className="item" onClick={() => change(2)}>{array[2]}</div>
        <div className="item" onClick={() => change(3)}>{array[3]}</div>
        <div className="item" onClick={() => change(4)}>{array[4]}</div>
        <div className="item" onClick={() => change(5)}>{array[5]}</div>
        <div className="item" onClick={() => change(6)}>{array[6]}</div>
        <div className="item" onClick={() => change(7)}>{array[7]}</div>
        <div className="item" onClick={() => change(8)}>{array[8]}</div>
      </div>
    </>
  )
}
export default App
