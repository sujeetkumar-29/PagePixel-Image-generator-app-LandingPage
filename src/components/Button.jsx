import clsx from "clsx";
import { Marker } from "./Marker.jsx";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span
        className="
          relative flex items-center min-h-[60px] px-4 rounded-2xl overflow-hidden
          bg-black group-hover:bg-gray-800 transition-colors duration-300 ease-in-out
        "
      >
        <span className="absolute -left-1">
          <Marker markerFill={markerFill} />
        </span>

        {icon && (
          <img
            src={icon}
            alt="icon"
            className="w-10 h-10 mr-5 object-contain z-10"
          />
        )}

        <span className="relative z-10 font-poppins font-bold text-p1 uppercase text-white">
          {children}
        </span>
      </span>

      {/* Glow effect wrapper - make sure you have CSS for these classes */}
      <span className="glow-before glow-after opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </>
  );

  const baseClasses =
    "relative p-0.5 rounded-2xl shadow-md group bg-black hover:shadow-lg hover:shadow-gray-700 transition-shadow duration-300";

  return href ? (
    <a className={clsx(baseClasses, containerClassName)} href={href}>
      <Inner />
    </a>
  ) : (
    <button className={clsx(baseClasses, containerClassName)} onClick={onClick}>
      <Inner />
    </button>
  );
};

export default Button;
