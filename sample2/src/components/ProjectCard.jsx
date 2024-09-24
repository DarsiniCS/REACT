// import {Check, Eye, Github, Link, MessageCircleWarning,Pencil, Trash ,ThumbsUp} from 'lucide-react'
// import React from 'react'
// import { deleteProject,editProject} from '../service/api'
// import Navbar from './Navbar'

// const ProjectCard = ({ title, desc, pid, cover, id }) => {
//     const handleEdit = async (e) => {
//         e.preventDefault()
//         const projectdata = {
//             title: titleState,
//             desc: descState,
//             link: linkState,
//             coverimg: coverState
//         }
//         try {
//             const response = await editProject(id, projectdata)
//             console.log(response.status)
//             if (response.status === 200) {
//                 console.log("updated")
//                 };
//                 // fetchprojects()
            
//         } catch (error) {
//             toast.error(error)
//             toast('Error', {
//                 className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
//                 icon: <MessageCircleWarning />,
//             });
//         }
//         setvisible(false)
//     }
//     const handledelete = async () => {
//         try {
//             const response = await deleteProject(id)
//             console.log(response.status)
//             if (response.status === 200) {
//                 console.log("deleted")

//             }
//         } catch (error) {
//             console.log(error)

//         }

//     }
//     return (
//         <>
       
//             <div className="service-card w-[300px] h-[330px] shadow-lg cursor-pointer snap-start shrink-0 bg-white flex flex-col items-start gap-3 transition-all duration-300 group ">
//                 <img src={cover} alt={title} className='h-[150px] w-[100%] relative' />

//                 <p className="font-bold text-2xl  text-black/80  px-6">
//                     {title}
//                 </p>
//                 <p className="text-gray-400 text-sm  px-6">
//                     {desc}
//                 </p>
//                 <div className='w-full h-auto flex justify-center items-center'>
//                 <div className="w-[70] flex justify-start h-full items-center gap-1 ">
//                 <div className="overflow-x-visible relative w-12 h-12 overflow-y-clip group text-center hover:bg-blue-500/10 rounded-sm hover:border-b-2 hover:border-blue-500" onClick={() => setvisible(true)}>
//                             <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white">
//                                 <Pencil />
//                             </div>
//                             {/* <div className="absolute text-white font-bold -bottom-10 left-1/2 text-sm text-center whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
//                                 Edit
//                             </div> */}
//                         </div>
//                 <div className='w-full h-auto flex justify-center items-center'>
//                     <div className="w-[80%] flex justify-center h-full items-center gap-2">
//                         <button className='p-2 w-12 h-12  rounded-full border-2 border-red-500 text-red-500 font-bold' onClick={handledelete}>
//                             <Trash className='h-6 w-6' />
//                         </button>
//                     </div>
//                     <p style={{ WebkitTextStroke: '1px gray', WebkitTextFillColor: 'transparent' }} className="text-5xl font-bold self-end  px-6">
                        
//                     </p>
//                 </div>
//  {/* <div className="overflow-x-visible relative w-12 h-12 overflow-y-clip group text-center  hover:bg-red-500/20 rounded-sm hover:border-b-2 hover:border-red-500" onClick={() => { handledelete(id) }}>
//                             <div className="flex justify-center items-center w-12 h-12 rounded-full bg-red-500 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white">
//                                 <Trash />
//                             </div>
//                             {/* <div className="absolute text-white font-bold -bottom-10 left-1/2 text-sm text-center whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
//                                 Delete
//                             </div> */}
//                         {/* </div> */}
//             </div>
//             </div>
//             </div>

//         </>
//     )
// }

// export default ProjectCard



import { Check, Eye, Github, Link, MessageCircleWarning, Pencil, ThumbsUp, Trash } from "lucide-react"
import React, { useRef, useState } from 'react'
import { deleteProject, editProject } from '../service/api'
import { toast, Toaster } from "sonner"

const ProjectCard = ({ title, desc, pid, cover, id, kid, link, fetchprojects }) => {
    const [titleState, setTitleState] = useState(title);
    const [descState, setDescState] = useState(desc);
    const [linkState, setLinkState] = useState(link);
    const [coverState, setCoverState] = useState(cover);
    const [visible, setvisible] = useState(false)

    const handleEdit = async (e) => {
        e.preventDefault()
        const projectdata = {
            title: titleState,
            desc: descState,
            link: linkState,
            coverimg: coverState
        }
        try {
            const response = await editProject(id, projectdata)
            console.log(response.status)
            if (response.status === 200) {
                console.log("updated")
                toast('Project updated !', {
                    className: 'bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
                    icon: <Check />,
                });
                fetchprojects()
            }
        } catch (error) {
            toast.error(error)
            toast('Error', {
                className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
                icon: <MessageCircleWarning />,
            });
        }
        setvisible(false)
    }

    const handledelete = async (id) => {
        try {
            const response = await deleteProject(id)
            console.log(response.status)
            if (response.status === 200) {
                console.log("deleted")
                // toast.success("deleted");

                toast('Project deleted !', {
                    className: 'bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
                    icon: <Trash />,
                });
                fetchprojects()
            }
        } catch (error) {
            console.log(error)
            toast('Error', {
                className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
                icon: <MessageCircleWarning />,
            });
        }

    }
    return (
        <>
            <div className="service-card w-[300px] h-[400px] shadow-xl cursor-pointer snap-start shrink-0 bg-[#1D2F3E] flex flex-col items-start gap- transition-all duration-300">
                <img src={cover} alt={title} className='h-[150px] w-[100%] relative' />

                <p className="font-bold text-2xl group-hover:text-white text-white/80  px-6">
                    {title}
                </p>
                <p className="text-white text-sm  px-6">
                    {desc}
                </p>
                <div className='w-full h-auto flex justify-center items-center'>
                    <div className="w-[70] flex justify-start h-full items-center gap-1 ">
                     
                        <div className="overflow-x-visible relative w-12 h-12 overflow-y-clip group text-center hover:bg-blue-500/20 rounded-sm hover:border-b-2 hover:border-blue-500" onClick={() => setvisible(true)}>
                            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white">
                                <Pencil />
                            </div>
                            <div className="absolute text-white font-bold -bottom-10 left-1/2 text-sm text-center whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
                                Edit
                            </div>
                        </div>
                        <div className="overflow-x-visible relative w-12 h-12 overflow-y-clip group text-center  hover:bg-red-500/20 rounded-sm hover:border-b-2 hover:border-red-500" onClick={() => { handledelete(id) }}>
                            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-red-500 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white">
                                <Trash />
                            </div>
                            <div className="absolute text-white font-bold -bottom-10 left-1/2 text-sm text-center whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
                                Delete
                            </div>
                        </div>
                    </div>
                    <p style={{ WebkitTextStroke: '1px gray', WebkitTextFillColor: 'transparent' }} className="text-5xl font-bold self-end  px-4 w-[25%]">
                        {kid}
                    </p>
                </div>

            </div>
            {
                visible && (
                    <>
                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                            <div className=" h-[70%] w-[30%] bg-red z-50 flex flex-col  bg-white  shadow-lg ">
                                <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-green-500 bg-white text-xl font-bold shadow-sm">
                                    <div className="w-[55%]">
                                        Edit Your Project
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer" onClick={() => setvisible(!visible)} >
                                            <input type="checkbox" value="" className="sr-only peer" />
                                            <div className="peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-500 w-8 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0">
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleEdit}>
                                        <input
                                            type="text"
                                            value={titleState}
                                            onChange={(e) => setTitleState(e.target.value)}
                                            placeholder="Title"
                                            className="p-3 bg-[#f8f8f8] w-full font-bold"
                                            required
                                        />
                                        <input
                                            type="text"
                                            value={descState}
                                            onChange={(e) => setDescState(e.target.value)}
                                            placeholder="Description"
                                            className="p-3 bg-[#f8f8f8] w-full font-bold"
                                            required
                                        />
                                        <input
                                            type="text"
                                            value={linkState}
                                            onChange={(e) => setLinkState(e.target.value)}
                                            placeholder="Project Link"
                                            className="p-3 bg-[#f8f8f8] w-full font-bold"
                                            required
                                        />
                                        <input
                                            type="text"
                                            value={coverState}
                                            onChange={(e) => setCoverState(e.target.value)}
                                            placeholder="Cover URL"
                                            className="p-3 bg-[#f8f8f8] w-full font-bold"
                                            required
                                        />
                                        <button type="submit" className="text-white bg-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-sm text-md px-5 py-2.5 text-center w-full h-[15%] mt-4">Update Project</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default ProjectCard