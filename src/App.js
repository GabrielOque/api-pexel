import React, { useEffect, useState } from "react";

import Photos from "./components/Photos";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

const App = () => {
  const initialUrl = "https://api.pexels.com/v1/curated?page=1&per_page=40";
  const [datos, setDatos] = useState([]);
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();

  const fetchPictures = (urls) => {
    fetch(urls, {
      headers: {
        Authorization:
          "sNDO5bErXmqoZ8TB5adJy756hH2NOdUBE76EtvjN91adNF2ZwxC4nEMX",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDatos(data.photos);
        setPrev(data.prev_page);
        setNext(data.next_page);
      });
  };

  const onPrev = () => {
    fetchPictures(prev);
  };

  const onNext = () => {
    fetchPictures(next);
  };

  useEffect(() => {
    fetchPictures(initialUrl);
  }, []);

  const handleDowload = (urlImage) => {
    fetch(urlImage)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "imagen.jpeg");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <>
      <Navbar />
      <Pagination onNext={onNext} onPrev={onPrev} prev={prev} next={next} />
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-around w-11/12">
          <Photos datos={datos} handleDowload={handleDowload} />
        </div>
      </div>
      <Pagination onNext={onNext} onPrev={onPrev} prev={prev} next={next} />
    </>
  );
};

export default App;
