import React from "react";
import Image from "next/image";

type MonInputProps = {
  amount: string;
};

const MMonOutput = ({ amount }: MonInputProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <p>Received mMON</p>
        <p className="flex items-center gap-1">Balance: 0.00 mMON</p>
      </div>
      <div className="h-14 w-full border-1 border-gray-100 rounded-xl overflow-hidden px-12 relative">
        <Image
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
          src="/favicon.png"
          alt="Mon"
          width={24}
          height={24}
        />
        <input
          type="number"
          placeholder="0.00"
          name=""
          id=""
          className="w-full h-full  focus:border-none focus:outline-none text-xl font-bold "
          value={amount}
        />

      </div>
    </div>
  );
};

export default MMonOutput;
