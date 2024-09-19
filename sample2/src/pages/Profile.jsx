import Profilex from '../assets/img/img1.jpg'
import Navbar from '../components/Navbar'

const Profile = () => {
  return (
  <>
    <Navbar />
    <div className='min-h-screen w-full flex md:flex-row flex-col justify-center items-center bg-[#94ACBF] overflow-hidden'>
    <div className='ml-12 w-1/2 flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold text-left leading-loose'>I'm Darsini C S</h1>
      <p className='text-2xl text-left leading-relaxed'> Motivated graduate with excellent communication and organizational skills, looking to secure an HVAC apprenticeship to enhance my technical skills and knowledge.</p>

      </div>
      
      <div className=" min-h-screen w-full flex flex-col justify-center items-center">
        <img src={Profilex} alt="profile" className="rounded-full h-90 w-90" w-40 h-40 />
    </div>
    </div>
    
    

  
    
    
  </>
  );
};

export default Profile