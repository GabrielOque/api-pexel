const Photos = ({ datos = [], handleDowload }) => {
  return (
    <>
      {datos.map((items) => (
        <div
          key={items.id}
          className="flex flex-col justify-between p-2 mb-4 bg-blue-200 w-72 rounded-xl"
        >
          <div className="flex justify-center">
            <img className="w-60" src={items.src.original} alt="" />
          </div>
          <p className="pt-1 font-bold text-center">
            Name: {items.photographer}
          </p>
          <button
            className="px-2 py-2 font-bold text-white transition transform bg-blue-500 rounded-full hover:bg-red-500 hover:-translate-y-3 hover:scale-105"
            onClick={() => handleDowload(items.src.original)}
          >
            Descargar
          </button>
        </div>
      ))}
    </>
  );
};

export default Photos;
