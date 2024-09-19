import NavBar from "./components/NavBar.jsx";

const App = () => {
  const Appname="DARSINI";
  return (
    <>
   <div className="h-screen w-screen flex flex-col justify-start items-start">
    <NavBar appname={Appname}/>
   </div>
     </>
  )
}

export default App;

