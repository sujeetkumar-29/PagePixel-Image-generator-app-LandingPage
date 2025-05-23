import { Element } from "react-scroll";
import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
  return (
    <section className="bg-black text-white py-16">
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border border-white/20 rounded-7xl md:overflow-hidden max-md:flex-col feature-after bg-gray-900 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative z-10 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:border border-white/20 max-md:rounded-3xl max-md:flex-320 bg-black"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <div className="w-0.5 h-16 bg-white/20" />
                    <img
                      src={icon}
                      className="w-28 h-28 object-contain"
                      alt={title}
                    />
                  </div>
                </div>

                <p className="caption text-gray-400 mb-5 max-md:mb-6">{caption}</p>
                <h2 className="max-w-[400px] mb-7 text-2xl font-bold text-white max-md:mb-6">
                  {title}
                </h2>
                <p className="mb-11 text-gray-300 max-md:mb-8">{text}</p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}

            <ul className="relative flex justify-around flex-grow px-[5%] border border-white/20 rounded-7xl max-md:hidden bg-black">
              <div className="absolute bg-white/10 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-white/10 w-[1px] h-full z-10" />

                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-white/20 rounded-full hover:border-white transition-all duration-500 shadow-md w-20 h-20">
                    <img
                      src={icon}
                      alt={title}
                      className="w-[85%] h-[85%] object-contain z-20"
                    />
                  </div>

                  <h3 className="relative z-10 max-w-36 mx-auto text-xs font-semibold text-center uppercase text-white">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
