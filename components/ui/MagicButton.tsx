import React from "react";

const MagicButton = ({
  title,
  handleClick,
  otherClasses,
}: {
  title: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div>
      <button className="p-[3px] w-full rounded-lg focus:outline-none md:w-60 md:mt-10 relative">
        <div
          className={`absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg ${otherClasses}`}
        />
        <div className="p-2 bg-black-200 rounded-[6px] gap-2 relative group transition duration-200 text-white hover:bg-transparent">
          {title}
        </div>
      </button>
    </div>
  );
};

export default MagicButton;
