import location from "../../assets/images/location_on.svg";
import facebook from "../../assets/images/facebookIcon.svg";
import instagram from "../../assets/images/instagramICon.svg";
import { useContact } from "./hooks/useContact";

const Contact = () => {
  const { contactForm, error, success, handleChange, handleSubmit } =
    useContact();
  return (
    <div className="bg-[#FFFFFF]  rounded">
      <div>
        <div className="grid xl:grid-cols-6 gap-6 p-8">
          <div className="col-span-4">
            <div className="flex items-center space-x-4">
              <p className="text-[#101828] xl:text-sm text-xs">
                საკონტაქტო ფორმა
              </p>
              <p
                className={`text-xs ${success ? "text-[green]" : "text-[red]"}`}
              >
                {error ? error : success}
              </p>
            </div>

            <div className="bg-[#FFFFFF] grid xl:grid-cols-2 gap-4 pt-4 appearance-none">
              <input
                onChange={handleChange}
                name="name"
                value={contactForm.name}
                type="text"
                className="bg-[#FFFFFF] placeholder:text-xs px-4 py-5 rounded-lg text-[#475467] outline-none border-2 border-[#EAECF0]"
                placeholder="სახელი"
              />
              <input
                onChange={handleChange}
                name="surname"
                value={contactForm.surname}
                type="text"
                className="bg-[#FFFFFF] px-4 py-5 rounded-lg text-[#475467] placeholder:text-xs outline-none border-2 border-[#EAECF0]"
                placeholder="გვარი"
              />
              <input
                onChange={handleChange}
                value={contactForm.number}
                type="number"
                name="number"
                className={`bg-[#FFFFFF] px-4 py-5 appearance-none rounded-lg text-[#475467] placeholder:text-xs outline-none border-2 border-[#EAECF0] [&::-webkit-inner-spin-button]:appearance-none`}
                placeholder="ტელეფონი"
              />
              <input
                onChange={handleChange}
                value={contactForm.mail}
                type="mail"
                name="mail"
                className={`bg-[#FFFFFF] px-4 py-5 rounded-lg text-[#475467] placeholder:text-xs outline-none border-2 border-[#EAECF0]`}
                placeholder="ელ.ფოსტა"
              />
            </div>
            <div className="w-full py-4">
              <textarea
                onChange={handleChange}
                name="message"
                value={contactForm.message}
                className="w-full h-28 outline-none border-2 border-[#EAECF0] placeholder:text-xs rounded-lg resize-none px-4 py-5"
                placeholder="შეტყობინება"
                maxLength={150}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#1989F0] font-[Helvetica] font-case text-[#FFFFFF] px-6 py-2.5 rounded-full"
            >
              გაგზავნა
            </button>
          </div>
          <div className="bg-[#FFFFFF] col-span-2 border-l-2 border-[#EAECF0] w-max">
            <div className="grid grid-cols-1 gap-6 text-xs xl:px-6 px-2">
              <div className="flex items-center">
                <img src={location} alt="" className="w-5" />
                <p>თბილისი, ვაჟაფშაველას 4.ბ</p>
              </div>

              <div className="flex items-center ml-1 ">
                {/* i know */}
                <a href="https://www.facebook.com/gio.davlasheridze">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://www.facebook.com/gio.davlasheridze">
                  <p className="ml-1">ფეისბუქი</p>
                </a>
              </div>

              <div className="flex items-center space-x-1 ml-1">
                <img src={instagram} alt="" />
                <p>ინსტაგრამი</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
