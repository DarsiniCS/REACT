
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
{/*  
      <div className="h-[80vh] w-screen flex justify-center items-center -z-10">
        <h1 className="flex flex-col justify-center items-center">GET IN TOUCH</h1>
        <div  className="bg-[#1D2F3E] p-3 flex flex-col text-white justify-center items-center w-55 h-20 rounded-sm ">  
          <div><i class="fa-solid fa-envelope"></i>darsiniselvaraj@gmail.com </div>
          <div className="mt-2"><i class="fa-solid fa-phone"></i>9025712644</div>
          </div>
      </div>
    </> */}

<div className="bg-gray-50 flex items-center justify-center min-h-screen p-6">
            <div className="bg-[#1D2F3E] rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Get in Touch</h1>
                <p className="text-white text-center mb-4">I’d love to connect with you! Here’s how you can reach me:</p>
                
                <div className="space-y-4">
                    <div className="flex items-center">
                        <span className="font-medium text-white">📞 Phone:</span>
                        <span className="ml-2 text-white">9025712644</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-medium text-white">📧 Email:</span>
                        <span className="ml-2 text-white">darsiniselvaraj@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-medium text-white">🔗 LinkedIn:</span>
                        <a href="https://www.linkedin.com/in/darsini-c-s-883a52311" target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-600 hover:text-indigo-800">View Profile</a>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-white">Feel free to reach out anytime!</p>
                </div>
            </div>
        </div>

        </>
    );
};


export default Contact;