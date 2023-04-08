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
            <hr />
          </p>
          <button
            className="p-2 mt-2 mb-2 font-bold bg-red-400 rounded-lg hover:bg-blue-700"
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
