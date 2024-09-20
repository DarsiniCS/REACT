import Profilex from '../assets/img/imgg1.jpeg'

const Profile = () => {
  return (
  <>
    {/* <Navbar /> */}
    <div className='min-h-screen w-full flex md:flex-row flex-col justify-center items-center bg-white  overflow-hidden'>
    <div className='px-12 ml-12 mb-13 flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold text-left leading-loose'>I'm Darsini C S</h1>
      <p className='text-2xl text-left leading-loose mr-20'> Motivated graduate with excellent communication and organizational skills, looking to secure an HVAC apprenticeship to enhance my technical skills and knowledge.I thrive in collaborative environments and enjoy tackling complex challenges, continuously seeking to expand my knowledge in the ever-evolving tech landscape.</p>

      </div>
      
      <div className="min-h-screen w-full flex flex-col justify-center items-center mr-40">
        <img src={Profilex} alt="profile" className="rounded-full h-80 w-80 justify-center items-center" w-30 h-30 />
    </div>
    </div>
    
    

  
    
    
  </>
  );
};

export default Profile