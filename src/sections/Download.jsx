import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";

const Download = () => {
  return (
    <section className="bg-black">
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16 bg-gradient-to-br from-black via-gray-900 to-black"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/PagePixel.png"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>
               <p className="body-1 mb-10 max-w-md text-white">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavor, we've got you covered.
              </p>
               <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={url}
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-gray-700 bg-gray-800 hover:bg-gray-700 transition-all duration-500 hover:border-gray-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src={"/images/lines.svg"}
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon text-white">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
             <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-gray-700 p-6 bg-gradient-to-br from-gray-900 to-black shadow-2xl">
                <div className="relative rounded-3xl bg-gray-900 px-6 pb-6 pt-14 border border-gray-800">
                  <span className="download_preview-dot left-6 bg-red-500" />
                  <span className="download_preview-dot left-11 bg-yellow-500" />
                  <span className="download_preview-dot left-16 bg-green-500" />
                   <img
                    src="/images/screen.png"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl border border-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
           <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <img 
                  src={url} 
                  width={width} 
                  height={height} 
                  alt={title}
                  className="filter brightness-0 invert"
                />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;