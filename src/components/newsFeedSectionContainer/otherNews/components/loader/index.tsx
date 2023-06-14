const Loader = () => {
  return (
    <div className="animate-pulse text-[Helvetica] mt-2">
      <div className="xl:flex hidden">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg w-32 h-24 my-2"></div>
        <div>
          <div className="flex">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg w-24 h-2 m-2"></div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg w-20 h-2 m-2"></div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg w-96 h-3 m-2"></div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg w-60 h-3 m-2"></div>
        </div>
      </div>
      <div className="mt-4 flex justify-center items-center text-sm text-[#475467] space-x-2 border-t-2 border-[#F2F4F7] p-6">
        <p className="text-center mb-1.5">...</p>
        <p>იტვირთება</p>
      </div>
    </div>
  );
};

export default Loader;
