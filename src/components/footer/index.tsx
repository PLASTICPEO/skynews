const Footer = () => {
  return (
    <>
      <div className="xl:hidden visible flex items-center justify-center fixed bottom-0 left-0 h-24 w-full bg-[#FFFFFF] border-t-2 border-[#EAECF0] z-30">
        <div className="flex items-center justify-center space-x-4 font-Helvetica">
          <div className="flex flex-col items-center justify-center">
            <span className="material-symbols-outlined">home</span>
            <p className="text-lg font-case font-Helvetica">მთავარი</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="material-symbols-outlined">search</span>
            <p className="text-lg font-case font-Helvetica">ძიება</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="material-symbols-outlined">play_arrow</span>
            <p className="text-lg font-case font-Helvetica">ვიდეო</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="material-symbols-outlined">widgets</span>
            <p className="text-lg font-case font-Helvetica">ქვიზები</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="material-symbols-outlined">mail</span>
            <p className="text-lg font-case font-Helvetica">კონტაქტი</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
