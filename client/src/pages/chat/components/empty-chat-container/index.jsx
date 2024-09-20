import { SiFreepik } from "react-icons/si";

const EmptyChatContainer = () => {
  return (
    <div className="flex-1 md:bg-[#1c1d25] md:flex  flex-col justify-center items-center hidden duration-1000 transition-all">
      <SiFreepik className="text-[280px] mr-6 mt-4 text-purple-500"/>
      <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl transition-all duration-1000 text-center">
        <h3 className="poppins-medium">
          Hello
          <span className="text-purple-500">! </span> Welcome to 
           <span className="text-purple-500"> R2-D2 </span><span >.</span>
        </h3>
        <h4 className="poppins-medium text-[20px]"> Please Select Messages </h4>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
