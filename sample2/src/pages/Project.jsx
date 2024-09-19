import Profilex from '../assets/img/imgg2.jpg'
import Profiley from '../assets/img/imgg3.jpg'
import Profilez from '../assets/img/imgg4.jpg'
import Navbar from "../components/Navbar";

const Project = () => {
  return (
    <>
     <Navbar/>
     {/* <div className=" w-full h-full flex flex-col bg-white justify-start items-start">
   
      <div className="ml-6 8h-30 w-[30%] mt-16 flex flex-col justify-center align-center text-center bg-[#1D2F3E] text-white">
        <h1 className="font-extrabold text-2xl text-center">Tourism Website</h1>
      <div className="mt-3">Develop an interactive tourism website showcasing local attractions, accommodations, and travel tips to enhance visitor experiences. Include booking features and user-generated content for a personalized touch.</div>
    </div>
    </div> */}
    <div className="flex justify-center items-center min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="ml-4 h-[100%] bg-[#1D2F3E] shadow-md rounded-lg p-6">
    <img src={Profilex} alt="profile" className="oject-cover h-30 w-50 justify-center items-center" w-30 h-30 />
      <h2 className="text-2xl text-white font-semibold text-center mt-2">Tourism Website</h2>
      <p className="mt-4 text-white mb-2">Develop an interactive tourism website showcasing local attractions, accommodations, and travel tips to enhance visitor experiences. Include booking features and user-generated content for a personalized touch.</p>
    </div>

    <div className="h-[100%] bg-[#1D2F3E] shadow-md rounded-lg p-6">
    <img src={Profiley} alt="profile" className="oject-cover h-30 w-70 justify-center items-center" w-30 h-30 />
      <h2 className="text-2xl font-semibold text-center text-white mt-2">Mobile Access Application App</h2>
      <p className="mt-4 text-white leading-loose">Develop a mobile access application to securely manage user permissions and access control, focusing on a user-friendly interface and robust security features. Utilize a cross-platform framework and integrate with existing security systems for seamless operation.</p>
    </div>

    <div className="mr-4 h-[100%] bg-[#1D2F3E] shadow-md rounded-lg p-6">
    <img src={Profilez} alt="profile" className="oject-cover h-30 w-50 justify-center items-center" w-30 h-30 />
      <h2 className="text-2xl text-white font-semibold text-center mt-2">Exam Seating Arrangement</h2>
      <p className="mt-4 text-white leading-loose">Develop a console-based application to manage exam seating arrangements, allowing administrators to assign seats and students to check their assignments. Key features include user authentication, seating management, and easy data storage.</p>
    </div>
  </div>
</div>
    </>
  )
}
 
export default Project