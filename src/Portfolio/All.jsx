import { useState } from "react";
import { PortData } from "./PortData";

function All() {
  const [all, setAll] = useState(PortData);
  

  return (
    <div
      className="grid md:grid-cols-4 gap-16
    "
    >
      {all.map((alls) => (
        <div
          className=" relative left-16  flex flex-col h-[280px] w-[280px] rounded-xl bg-white transform hover:scale-110 duration-150 hover:opacity-90  "
          key={alls.id} 
        >
          <div className="flex  flex-col text-[20px]">
            <img
              src={alls.img}
              className="relative top-0  left-0 w-full h-[170px] mt-3 bg-opacity-40 "
            />
            <div className="mt-4 text-blue-900 font-bold text-lg md:text-xl">
              {alls.Title}
              <span className="text-black text-[17px] font-semibold">{alls.desc}</span>
            </div>
          </div>
          <div className="text-black text-[18px]">{alls.type } </div>
          <div className="text-blue-900  pl-[60%] text-[13px] bg-slate-300 font-bold h-10 ">Github_Link</div>
        </div>
      ))}
    </div>
  );
}

export default All;
