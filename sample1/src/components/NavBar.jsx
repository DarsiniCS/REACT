const NavBar=({appname})=>
{
    // console.log(appname)
    // const {name,rollno}=appname; //Deconstructing method
    return (
    <div className="w-full h-[5vh] grad-blue-bg text-white flex justify-center items-center">
      
       {appname.name}
       {appname.rollno}
       {/* {name}
       {rollno} */}
    </div>
)
}
export default NavBar;