import { useState } from "react";
import { GrTrigger } from "react-icons/gr";

const ListElement = ({ date, problem, setIsOpen, idx }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-sm h-200 m-4 rounded-lg overflow-hidden shadow-lg cursor-pointer relative overflow-hidden"
      onClick={() => setIsOpen(idx)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between h-16 p-2 pl-4 gap-4 border-gray-100 bg-mute-orange text-white">
        <div className="flex items-center gap-4 ">
          <GrTrigger />
          <b>Trigger</b>
        </div>
        <p className="mr-4">{date}</p>
      </div>
      <div className="relative h-full">
        <div className="flex flex-col gap-2 p-4 ">
          <p className="font-bold">{problem}</p>
          <div
            className={`absolute inset-0 bg-mute-orange flex items-center justify-center transition-transform duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-white text-md">See more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListElement;
