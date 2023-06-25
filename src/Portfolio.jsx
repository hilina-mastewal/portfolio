// //import propdata from './Portfolio/PortData'
// const  Portfolio=()=> {
//  function Menu() {

//   const[propdata,setPropdata]=usestate('All')
  
//   const handelMenuClick = (e) => {
//     setPropdata(e.target.textContent);
  
//   };
//   return (
//     <div  className=" bg-[#0f1b34] absolute text-white top-16 flex left-16 w-full  h-full">
// <div className=" text-4xl font-bold text-[#80b3cb] mt-10 ml-40">My Portfolio</div>
// <div className=" absolute top-24 left-[36%] font-[400] gap-20 text-[16px]  flex  justify-center items-center  text-[white] ">
//            <button onClick={handelMenuClick} >
//             All++
//           </button>
//           <button onClick={handelMenuClick} >
//             C++
//           </button>
//           <button onClick={handelMenuClick} >
//             Html/Css/js
//           </button >
//           <button onClick={handelMenuClick}>
//             React
//           </button>
//           <button  onClick={handelMenuClick}>
//              Asp.net(mvc)
//           </button>
         
//         </div>
//       <div className="w-[90%] self-center ">
//         <div
//           id="menue"
//           className="grid grid-cols-1 md:grid-cols-2 justify-items-center transform  duration-150 ease-in-out scale-90 "
//         >
//           {propdata
//             .filter((item) => (menu == "All" ? true : menu == item.type))
//             .map((item) => {
//               return (
//                 <div className=" flex flex-col  w-[80%] mb-10  " key={item.id}>
//                   <div className="flex justify-between items-center gap-3 ">
//                     <img
//                       src={item.img}
//                       className="relative rounded-[50%]  left-0 w-10 h-10 md:w-16 md:h-16  md:p-1  bg-[#484643] bg-opacity-40 "
//                     />

//                     <span className="text-white  text-[20px]">
//                       {item.Title}
//                     </span>
//                     <span className=" border-slate-400 border-t-[1px] border-dashed flex-grow "></span>
//                     <span className="text-orange-300 text-[17px]">
//                       {item.price}
//                     </span>
//                   </div>
//                   <div className="text-[#979795] text-sm ">{item.Desc}</div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//       </div>
    
//   );
// }

 
// }

// export default Portfolio;