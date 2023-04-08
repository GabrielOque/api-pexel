import Profile from "../images/profile.png";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-end w-full h-32 bg-blue-600">
        <div className="flex">
          <div className="flex items-center">
            <a href="/" className="p-3 text-2xl font-bold uppercase ">
              Gabriel oquendo
            </a>
          </div>
          <div className="flex items-center mr-10">
            <div className="rounded-full h-28 w-28">
              <img
                src={Profile}
                alt="./profile/profile.jpeg"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
