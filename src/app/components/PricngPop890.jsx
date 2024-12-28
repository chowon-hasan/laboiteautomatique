import React from "react";

const PricngPop890 = () => {
  return (
    <div>
      <div className="flex items-end justify-between mb-2">
        <p className="text-gray-600 text-[15px]">Prix</p>
        <hr className="flex-grow mx-2 mb-1.5 border-t border-gray-400" />
        <p className="text-[#2C80EF] text-[16px] prices">890.00 €</p>
      </div>
      <div className="flex items-end justify-between mb-2">
        <p className="text-gray-600 text-[15px]">Programmation</p>
        <hr className="flex-grow mx-2 mb-1.5 border-t border-gray-400" />
        <p className="text-[#2C80EF] text-[16px] prices">230.00 €</p>
      </div>
      <div className="flex items-end justify-between mb-2">
        <p className="text-gray-600 text-[15px]">Transport</p>
        <hr className="flex-grow mx-2 mb-1.5 border-t border-gray-400" />
        <p className="text-[#2C80EF] text-[16px] prices">19.00 €</p>
      </div>
    </div>
  );
};

export default PricngPop890;