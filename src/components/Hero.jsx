import React, { useState } from "react";
import PropertyCard from "./Card";

import Data from '../dataset/Data.json'
import { Link, useParams } from "react-router-dom";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";

// __________________structure of dataset__________________
// link:"https://www.airbnb.com/rooms/30722148"
// price :{currency: '$', value: 157, period: 'night'}
// rating :4.97
// subtitles: (3) ['Period Pimlico hideaway (self contained annexe)', '1 bed', 'Feb 29 – Mar 5']
// thumbnail  : "https://a0.muscache.com/im/pictures/b445f225-af7c-4f8e-9f68-f48c1a931e2e.jpg?im_w=720"
// title  :"Apartment in London"

const Hero = () => {
  const [visible, setVisible] = useState(6);

  const { city } = useParams();
  // current city tab
  console.log(city);

  // function to show 3 more cards
  const showMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <>
      <div
        className="flex 
flex-row 
flex-wrap 

ml-16
px-16

"
      >
        {/* for london  */}
        {city === undefined
          ? Data.london.slice(0, visible).map((data, index) => {
              return (
                <div className="basis-1/3  mb-6 " key={index}>
                 <Link to={'/london/'+index}>  
                 {/* Link redirects to propertypage component */}
                   <PropertyCard data={data} />
                 </Link>
                </div>
              );
            })
          : ""}

        {/* for paris  */}
        {city === "paris"
          ? Data.paris.slice(0, visible).map((data, index) => {
              return (
                <div className="basis-1/3  mb-6" key={index}>
                  <Link to={'/paris/'+index}>
                   <PropertyCard data={data} />
                 </Link>
                </div>
              );
            })
          : ""}

        {/* for madrid  */}
        {city === "madrid"
          ? Data.madrid.slice(0, visible).map((data, index) => {
              return (
                <div className="basis-1/3  mb-6" key={index}>
                 <Link to={'/madrid/'+index}>
                   <PropertyCard data={data} />
                 </Link>
                </div>
              );
            })
          : ""}

        {/* for rome  */}
        {city === "rome"
          ? Data.rome.slice(0, visible).map((data, index) => {
              return (
                <div className="basis-1/3  mb-6" key={index}>
                  <Link to={'/rome/'+index}>
                   <PropertyCard data={data} />
                 </Link>
                </div>
              );
            })
          : ""}
      </div>
      <button
        className=" py-3 px-7  justify-self-center rounded-full bg-purple-800  text-white hover:text-white hover:bg-blue-700"
        onClick={showMore}
      >
        <HourglassEmptyOutlinedIcon className=" ml-0 mr-2" />
        Show More
      </button>
    </>
  );
};

export default Hero;
