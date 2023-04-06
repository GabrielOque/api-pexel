const Photos = ({ datos = [] }) => {
  return (
    <>
      {datos.map((items) => (
        <div key={items.id} className="p-2 mb-4 bg-blue-200 w-72 rounded-xl">
          <div className="flex justify-center">
            <img className="w-60" src={items.src.original} alt="" />
          </div>
          <p className="pt-1 font-bold text-center">
            Name: {items.photographer}
            <hr />
          </p>
        </div>
      ))}
    </>
  );
};

export default Photos;
