import React from "react";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

const PropertyCard = ({ data }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-sm bg-sky-50 ">
      {
    data.thumbnail?
    <img className="w-full h-[350px] min-h-fit" src={data.thumbnail} alt={data.title} /> :
    console.log('not found ')      
      }

      <div className="px-6 py-4 ">
        <div className=" text-slate-700   font-medium text-2xl mb-10">
          {data.title}
        </div>

        <div className="flex flex-row place-content-center gap-1">
          {/* wrapper tag  */}
          <div
          
          >
            <DescriptionOutlinedIcon className="flex flex-col text-fuchsia-950 " />
            <p className=" mt-3 my-3 text-gray-950  font-semibold text-xs w-28">
              {data.subtitles[0]}
            </p>
          </div>
          <div
          
          >
            <BedroomParentOutlinedIcon className="flex flex-col text-fuchsia-950" />
            <p className=" mt-3 text-gray-950  font-semibold text-xs w-28">
              {data.subtitles[1]}
            </p>
          </div>
          <div
          
          
          >
            <EventAvailableIcon className="flex flex-col text-fuchsia-950" />
            <p className=" mt-3 text-gray-950  font-semibold text-xs w-28">
              {data.subtitles[2]}
            </p>
          </div>



        </div>
      </div>



<div className=" flex flex-row  items-center mb-10">

    <div className="flex flex-row  items-end pl-5 "
  >
     <p className="text-2xl font-semibold text-blue-800">{data.price.currency}{data.price.value}</p><p>/{data.price.period}</p>
     
     


    </div>


    <div className=" ml-auto pr-10">

  <ul>
      <li >
      <button className="inline-block border border-blue-900   py-3 px-10  rounded-full  text-violet-900 font-bold hover:text-white hover:bg-blue-700 " href="#">Read More</button>
    </li>
    
  </ul>


    </div>


</div>






    </div> //end div do not remove 
  );
};

export default PropertyCard;
