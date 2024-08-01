import React, { useState, useEffect } from 'react';
import useFetch from "../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/countByType");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 2));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  const startIndex = currentIndex * 2;
  const displayedImages = images.slice(startIndex, startIndex + 2);
  const displayedData = data?.slice(startIndex, startIndex + 2);

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {displayedData && displayedImages.map((img, i) => (
            <div className="pListItem" key={i}> 
              <img
                src={img}
                alt=""
                className="pListImg"
              />
              <div className="pListTitles">
                <h1>{displayedData[i]?.type}</h1>
                <h2>{displayedData[i]?.count} {displayedData[i]?.type}</h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
