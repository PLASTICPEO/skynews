const Loader = () => {
  return (
    <div className="animate-pulse flex">
      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg w-32 h-24 my-2"></div>
      <div>
        <div className="flex">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg w-24 h-2 m-2"></div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg w-20 h-2 m-2"></div>
        </div>
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg w-full h-2 m-2"></div>
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg w-32 h-2 m-2"></div>
      </div>
    </div>
  );
};

export default Loader;
