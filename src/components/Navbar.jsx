import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div
    className='
    w-full
    h-full
    mb-10
    '
      >


<ul className="flex

place-items-center
ml-16
px-16

    w-full
    h-full
    font-[Poppins]


">
{/* revisit :
 Can be done through conditional rendering equal to number of
  cities , but since we have only  4 classes ,
   we render same tag multiple times */}


  <li className="mr-3">
    <Link to="/" className="inline-block  py-3 px-10  rounded-full bg-purple-300  text-slate-700 hover:text-white hover:bg-blue-700" href="#">London</Link>
  </li>
  <li className="mr-3">
    <Link to="/paris" className="inline-block py-3 px-10  rounded-full bg-purple-300  text-slate-700 hover:text-white hover:bg-blue-700 " href="#">Paris</Link>
  </li>
  <li className="mr-3">
    <Link to="/rome" className="inline-block  py-3 px-10  rounded-full bg-purple-300  text-slate-700 hover:text-white hover:bg-blue-700 " href="#">Rome</Link>
  </li>
  <li className="mr-3">
    <Link to="/madrid" className="inline-block  py-3 px-10  rounded-full bg-purple-300  text-slate-700 hover:text-white hover:bg-blue-700 " href="#">Madrid</Link>
  </li>
  <li className="mr-[8rem] ml-auto">
    <a className="inline-block border border-blue-900   py-3 px-10  rounded-full  text-violet-900 font-medium hover:text-white hover:bg-blue-700 " href="#">View More</a>
  </li>

</ul>
        


    </div>
  )
}

export default Navbar