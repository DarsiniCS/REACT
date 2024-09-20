
import { useEffect, useState } from "react"
const Contact = () => {


  const [nulldata, setNullData] = useState(null)
  const [numberdata, setNumberData] = useState(0)
  const [stringdata, setStringData] = useState("a")
  const [booleandata, setBooleanData] = useState(true)
  const [arraydata, setArrayData] = useState([])
  const [objdata, setObjData] = useState({
    name: "",
    age: 0,
    isalive: false
  })


  if (!nulldata) {
    setNullData("Nulldata")
  }
  console.log(nulldata)
  const [visible, setvisible] = useState(false)
  return (
    <>
 
      <div className="h-[80vh] w-screen flex justify-center items-center -z-10">
        <div  className="bg-[#1D2F3E] p-3 flex flex-col text-white justify-center items-center w-55 h-20 rounded-sm ">  
          <div><i class="fa-solid fa-envelope"></i>darsiniselvaraj@gmail.com </div>
          <div className="mt-2"><i class="fa-solid fa-phone"></i>9025712644</div>
          </div>
      </div>
    </>
  )
}

export default Contact