import React, { useEffect, useState } from "react";

import Photos from "./components/Photos";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

const App = () => {
  const initialUrl = "https://api.pexels.com/v1/curated?page=1&per_page=12";
  const [datos, setDatos] = useState([]);
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();
  const [isReady, setIsReady] = useState(false);

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
        setIsReady(true);
      });
  };

  const onPrev = () => {
    fetchPictures(prev);
  };

  const onNext = () => {
    fetchPictures(next);
  };

  const onSearch = (idSearch) => {
    setIsReady(false);
    const query = idSearch;
    console.log(query);
    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=12`, {
      headers: {
        Authorization:
          "sNDO5bErXmqoZ8TB5adJy756hH2NOdUBE76EtvjN91adNF2ZwxC4nEMX",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(datos);
        setDatos(data.photos);
        setPrev(data.prev_page);
        setNext(data.next_page);
        setIsReady(true);
      });
    console.log(next);
    //.catch((err) => console.error(err));
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
      {isReady && (
        <>
          <Navbar />
          <Pagination onNext={onNext} onPrev={onPrev} prev={prev} next={next} />
          <Search onSearch={onSearch} />
          <div className="flex justify-center w-full">
            <div className="flex flex-wrap justify-around w-11/12">
              <Photos datos={datos} handleDowload={handleDowload} />
            </div>
          </div>
          <div className="mb-10 -mt-36">
            <Pagination
              onNext={onNext}
              onPrev={onPrev}
              prev={prev}
              next={next}
            />
          </div>
        </>
      )}
      {!isReady && (
        <div className="flex justify-center w-full mt-10 md:mt-40">
          <p className="text-lg font-bold">Cargando...</p>
        </div>
      )}
    </>
  );
};

export default App;
