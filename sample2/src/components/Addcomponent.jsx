// import { Plus } from 'lucide-react'
// import React, { useRef, useState } from 'react'
// import { addProject } from '../service/api'
// import { Toaster, toast } from 'sonner'
// const AddComponent = () => {
//     const titleref = useRef(null)
//     const descref = useRef(null)
//     const linkref = useRef(null)
//     const coverref = useRef(null)

//     const handleAdd = async (e) => {
//         e.preventDefault()
//         const projectdata = {
//             title: titleref.current.value,
//             desc: descref.current.value,
//             link: linkref.current.value,
//             coverimg: coverref.current.value
//         }
//         try {
//             const response = await addProject(projectdata)
//             console.log(response.status)
//             if (response.status === 201) {
//                 console.log("added")

//             }
//         } catch (error) {
//             toast.error(error)

//         }
//         setvisible(false)
//     }

//     const [visible, setvisible] = useState(false)
//     return (
//         <>
//             {/* <button onClick={() => setvisible(true)} className='flex justify-center items-center text-white bg-purple-500 px-2 py-1 rounded-sm'>
//                 Add
//                 <Plus className='h-6 w-6 ml-2' />
//             </button> */}
//             <button 
//   onClick={() => setvisible(true)} 
//   className='flex justify-center items-center text-white bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 mt-4'
// >
//   Add
//   <Plus className='h-6 w-6 ml-2' />
// </button>

//             {
//                 visible && (
//                     <>
//                         {/* <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
//                             <div className=" h-[75%] w-[30%] bg-red z-50 flex flex-col  bg-white  ">
//                                 <div className="w-full h-[25%] flex flex-row justify-start px-10 items-center border-2 text-purple-500 bg-white text-xl font-bold">
//                                     <div className="w-[70%]">
//                                         Add Your Projects
//                                     </div>
//                                     <div className="w-1/2 flex justify-end">
//                                         <label className="relative inline-flex items-center cursor-pointer" onClick={() => setvisible(!visible)} >
//                                             <input type="checkbox" value="" className="sr-only peer" />
//                                             <div className="peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-500 w-8 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0">
//                                             </div>
//                                         </label>
//                                     </div>
//                                 </div>
//                                 <div className="w-full h-[150%] flex flex-row justify-center items-center">
//                                     <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleAdd}>
//                                         <input type="text" ref={titleref} name="" id="title" placeholder="Title" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-b-2 hover:border-purple-200  focus:border-purple-600" required />
//                                         <input type="text" ref={descref} name="" id="desc" placeholder="Description" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3" required />
//                                         <input type="text" ref={linkref} name="" id="Link" placeholder="Project Link" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3" required />
//                                         <input type="text" ref={coverref} name="" id="cover" placeholder="Cover URL" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3" required />
//                                         <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-sm text-md px-5 py-2.5 text-center w-full h-[15%] mt-4">Add Project</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div> */}
//                         <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
//   <div className="h-[75%] w-[30%] bg-red z-50 flex flex-col bg-white">
//     <div className="w-full h-[25%] flex flex-row justify-start px-10 items-center border-2 text-purple-500 bg-white text-xl font-bold">
//       <div className="w-[70%]">Add Your Projects</div>
//       <div className="w-1/2 flex justify-end">
//         <label className="relative inline-flex items-center cursor-pointer" onClick={() => setvisible(!visible)}>
//           <input type="checkbox" value="" className="sr-only peer" />
//           <div className="peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-500 w-8 h-8 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0"></div>
//         </label>
//       </div>
//     </div>
    
//     <div className="w-full h-[150%] flex flex-row justify-center items-center">
//       <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleAdd}>
//         <input type="text" ref={titleref} id="title" placeholder="Title" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-200 focus:border-purple-600 focus:border-b-2" required />
//         <input type="text" ref={descref} id="desc" placeholder="Description" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-200 focus:border-purple-600 focus:border-b-2 mb-3" required />
//         <input type="text" ref={linkref} id="Link" placeholder="Project Link" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-200 focus:border-purple-600 focus:border-b-2 mb-3" required />
//         <input type="text" ref={coverref} id="cover" placeholder="Cover URL" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-200 focus:border-purple-600 focus:border-b-2 mb-3" required />
        
//         <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-sm text-md px-5 py-2.5 mt-6 w-full transform hover:scale-105 transition-transform">
//           Add Project
//         </button>
//       </form>
//     </div>
//   </div>
// </div>

//                         <Toaster richColors />
//                     </>
//                 )
//             }
//         </>
//     )
// }

// export default AddComponent




import { Plus } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { addProject } from '../service/api'
import { Toaster, toast } from 'sonner'
const AddComponent = () => {
    const titleref = useRef(null)
    const descref = useRef(null)
    const linkref = useRef(null)
    const coverref = useRef(null)

    const handleAdd = async (e) => {
        e.preventDefault()
        const projectdata = {
            title: titleref.current.value,
            desc: descref.current.value,
            link: linkref.current.value,
            coverimg: coverref.current.value
        }
        try {
            const response = await addProject(projectdata)
            console.log(response.status)
            if (response.status === 201) {
                console.log("added")

            }
        } catch (error) {
            toast.error(error)

        }
        setvisible(false)
    }

    const [visible, setvisible] = useState(false)
    return (
        <>
           
          <div className="flex justify-end">
  <button 
    onClick={() => setvisible(true)} 
    className='flex justify-center items-center bg-[#1D2F3E] text-white hover:bg-blue-600 px-4 py-2 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 mt-4 float-right'
  >
    Add Your Projects
    <Plus className='h-6 w-6 ml-2' />
  </button>
</div>


            {
                visible && (
                    <>
                      
                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
  <div className="h-[75%] w-[30%] bg-red z-50 flex flex-col bg-white">
    <div className="w-full h-[25%] flex flex-row justify-start px-10 items-center border-2 bg-[#1D2F3E] text-white text-xl font-bold">
      <div className="w-[70%]">Add Your Projects</div>
      <div className="w-1/2 flex justify-end">
        <label className="relative inline-flex items-center cursor-pointer" onClick={() => setvisible(!visible)}>
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-500 w-8 h-8 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0"></div>
        </label>
      </div>
    </div>
    
    <div className="w-full h-[150%] flex flex-row justify-center items-center">
      <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleAdd}>
        <input type="text" ref={titleref} id="title" placeholder="Title" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-200 focus:border-purple-600 focus:border-b-2" required />
        <input type="text" ref={descref} id="desc" placeholder="Description" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-200 focus:border-purple-600 focus:border-b-2 mb-3" required />
        <input type="text" ref={linkref} id="Link" placeholder="Project Link(GitHub)" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-200 focus:border-purple-600 focus:border-b-2 mb-3" required />
        <input type="text" ref={coverref} id="cover" placeholder="Image Cover URL" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-200 focus:border-purple-600 focus:border-b-2 mb-3" required />
        
        <button type="submit" className="bg-[#1D2F3E] text-white focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-sm text-md px-5 py-2.5 mt-6 w-full transform hover:scale-105 transition-transform">
          Add
        </button>
      </form>
    </div>
  </div>
</div>

                        <Toaster richColors />
                    </>
                )
            }
        </>
    )
}

export default AddComponent