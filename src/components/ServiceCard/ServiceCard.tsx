import React from "react";
import { ServiceCardProps } from "@/Utils/type/type";

function ServiceCard({ icon, title, description, extraClass }: ServiceCardProps) {
  return (
    <div
      className={`group bg-[#101624] p-6 w-[350px] min-h-[435px] rounded-xl text-white shadow-lg 
      hover:scale-105 hover:shadow-xl transition-transform duration-300 flex flex-col 
      items-center border border-white/10 text-center cursor-pointer ${extraClass}`}
    >
      {/* Icon inside black circle with light white border */}
      <div
        className="w-[90px] h-[90px] flex items-center justify-center rounded-full
       bg-[#070D1B] mb-7 mt-10 shadow-md border border-white/30 
       group-hover:border-yellow-400 group-active:border-yellow-400"
      >
        <div className="text-4xl text-white group-hover:text-yellow-400 group-active:text-yellow-400">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-7 group-hover:text-yellow-400 group-active:text-yellow-400">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#9EA2AD] text-sm leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
