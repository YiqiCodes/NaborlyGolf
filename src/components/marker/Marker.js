// DEPRECATED
// DEPRECATED
// DEPRECATED
// DEPRECATED
// DEPRECATED

// import React, { Fragment, useState } from "react";

// // Assets
// import { FlagIcon } from "@heroicons/react/outline";

// // Styles
// import "./Marker.css";
// import "antd/dist/antd.css";

// // Tailwind
// import { Dialog, Transition } from "@headlessui/react";

// const Marker = ({
//   color,
//   city,
//   country,
//   lat,
//   lng,
//   holes,
//   property,
//   hasRange,
//   isPublic,
//   rating,
// }) => {
//   const [open, setOpen] = useState(false);

//   const showModal = () => {
//     setOpen(true);
//   };

//   return (
//     <>
//       <div>
//         <div
//           key={property}
//           className="pin bounce"
//           style={{ backgroundColor: color, cursor: "pointer" }}
//           title={property}
//           onClick={showModal}
//         />
//         <div className="pulse" />
//       </div>
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog
//           as="div"
//           className="flex items-center justify-center fixed z-10 inset-0 overflow-y-auto"
//           onClose={setOpen}
//         >
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//             </Transition.Child>

//             {/* This element is to trick the browser into centering the modal contents. */}
//             <span
//               className="hidden sm:inline-block sm:align-middle sm:h-screen"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               enterTo="opacity-100 translate-y-0 sm:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             >
//               <div className="inline-block align-bottom bg-white rounded-lg px-16 py-8 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
//                 <div>
//                   <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
//                     <FlagIcon className="h-6 w-6 text-600" aria-hidden="true" />
//                   </div>
//                   <div className="mt-3 text-center sm:mt-5">
//                     <Dialog.Title
//                       as="h3"
//                       className="text-lg leading-6 font-medium text-gray-900"
//                     >
//                       {property}
//                     </Dialog.Title>
//                     <div className="mt-2">
//                       <p className="text-sm text-gray-500">
//                         <div>City: {city}</div>
//                         <div>Country: {country}</div>
//                         <div>Latitude: {lat}</div>
//                         <div>Longitude: {lng}</div>
//                         <div>{holes ? `Holes: ${holes}` : null}</div>
//                         <div>
//                           {isPublic !== undefined
//                             ? `Public: ${isPublic ? "Yes" : "No"}`
//                             : null}
//                         </div>
//                         <div>
//                           {hasRange !== undefined
//                             ? `Range: ${hasRange ? "Yes" : "No"}`
//                             : null}
//                         </div>
//                         <div>{rating ? `Rating: ${rating}` : null}</div>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-5 sm:mt-6">
//                   <button
//                     type="button"
//                     className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
//                     onClick={() => setOpen(false)}
//                   >
//                     Go back
//                   </button>
//                 </div>
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>
//     </>
//   );
// };
// export default Marker;
