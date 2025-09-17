import React from "react";

type SelectOptionProps = {
  setIsStaking: (value: boolean) => void;
  isStaking: boolean;
};

const SelectOption: React.FC<SelectOptionProps> = ({ setIsStaking, isStaking }) => {
  return (
    <div className="w-[360px] sm:w-[400px] md:w-[500px] bg-base-100 items-center border border-gray-700/50 shadow-2xl p-2  rounded-xl overflow-hidden">
      <div className="flex  justify-between relative w-full h-full rounded-xl overflow-hidden">
        <OptionBtn isStaking={isStaking} onClick={() => setIsStaking(true)}>
          Stake
        </OptionBtn>
        <OptionBtn isStaking={!isStaking} onClick={() => setIsStaking(false)}>
          Unstake
        </OptionBtn>
        {/* <div className="absolute h-full w-1/2 right-0 left-0 bg-teal-200 -z-1"></div> */}
      </div>
    </div>
  );
};

const OptionBtn: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  isStaking?: boolean;
}> = ({ children, onClick, isStaking }) => {
  return (
    <button
      className={`flex-[50%] cursor-pointer py-2 text-xl font-semibold text-neutral-content  ${isStaking ? "bg-gradient-to-r from-primary to-secondary text-accent-content" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SelectOption;
