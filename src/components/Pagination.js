const Pagination = ({ onNext, onPrev, prev, next }) => {
  const handrePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <>
      <div className="flex justify-center w-full mt-32 mb-7">
        <div className="flex justify-between w-40">
          {prev && (
            <button
              className="px-4 bg-blue-500 rounded-xl"
              onClick={handrePrev}
            >
              Prev
            </button>
          )}
          {next && (
            <button
              className="px-4 bg-blue-500 rounded-xl"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Pagination;
