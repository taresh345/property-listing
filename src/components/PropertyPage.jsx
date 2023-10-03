import React from "react";
import { Link, useParams } from "react-router-dom";
import Data from '../dataset/Data.json'
import PropertyCard from "./Card";

const PropertyPage = () => {
  const { city, id } = useParams();

  return (
    <>
      <div className="flex flex-row justify-center">
        {/* LONDON */}
        {city == "london" ? (
          <div className="basis-1/3  mb-6" key={id}>
            <Link to="/">
              <PropertyCard data={Data.london[id]} />
            </Link>
          </div>
        ) : (
          ""
        )}

        {/* PARIS */}
        {city == "paris" ? (
          <div className="basis-1/3  mb-6" key={id}>
            <Link to="/">
              <PropertyCard data={Data.london[id]} />
            </Link>
          </div>
        ) : (
          ""
        )}

        {/* MADRID */}
        {city == "madrid" ? (
          <div className="basis-1/3  mb-6" key={id}>
            <Link to="/">
              <PropertyCard data={Data.london[id]} />
            </Link>
          </div>
        ) : (
          ""
        )}

        {/* rome */}
        {city == "rome" ? (
          <div className="basis-1/3  mb-6" key={id}>
            <Link to="/">
              <PropertyCard data={Data.london[id]} />
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </> //closing
  );
};

export default PropertyPage;
