// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";

// export default function PaymentModal({ isOpen, setIsOpen, price }) {
//   function closeModal() {
//     setIsOpen(false);
//   }

//   const launchRazorPay = () => {
//     let options = {
//       key: "rzp_test_fg1vBXpEGtpwl8",
//       amount: price * 100,
//       currency: "INR",
//       name: "Muroexe",
//       description: "Shoes Purchase",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Cirila-%D0%9C-majuskla.svg/640px-Cirila-%D0%9C-majuskla.svg.png",
//       handler: () => {
//         setIsOpen(false);
//         alert("Payment Done");
//       },
//       theme: { color: "#252525" },
//     };

//     let razorPay = new window.Razorpay(options);
//     razorPay.open();
//     // const rzp = new window.Razorpay({ key });
//     // rzp.createPayment(options);
//   };

//   return (
//     <>
//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0  overflow-y-auto z-50"
//           onClose={closeModal}
//         >
//           <div className="min-h-screen px-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0" />
//             </Transition.Child>

//             {/* This element is to trick the browser into centering the modal contents. */}
//             <span
//               className="inline-block h-screen align-middle"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                 <Dialog.Title
//                   as="h3"
//                   className="text-lg font-medium leading-6 text-gray-900"
//                 >
//                   Please make a payment
//                 </Dialog.Title>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500">
//                     Hello Please click on the below button to make a payment.
//                   </p>
//                 </div>

//                 <div className="w-full mt-4">
//                   <button
//                     type="button"
//                     className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
//                     onClick={launchRazorPay}
//                   >
//                     Pay ₹{price}
//                   </button>
//                   <button
//                     type="button"
//                     className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
//                     onClick={closeModal}
//                   >
//                     Cancel Payment
//                   </button>
//                 </div>
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// }



import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import BuyNowModal from "./BuyNowModal";

export default function PaymentModal({ isOpen, setIsOpen, price,buyNowFunction }) {
  function closeModal() {
    setIsOpen(false);
  }

  const launchRazorPay = () => {
    let options = {
      key: "rzp_test_fg1vBXpEGtpwl8",
      amount: price * 100,
      currency: "INR",
      name: "Paradise",
      description: "Food Orders",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Cirila-%D0%9C-majuskla.svg/640px-Cirila-%D0%9C-majuskla.svg.png",
      handler: () => {
        setIsOpen(false);
        toast.success("Order placed successfully");
        buyNowFunction();
      },
      theme: { color: "#252525" },
    };

    let razorPay = new window.Razorpay(options);
    razorPay.open();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto z-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Please make a payment
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Hello Please click on the below button to make a payment.
                  </p>
                </div>

                <div className="w-full mt-4">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={launchRazorPay}
                  >
                    Pay ₹{price}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={closeModal}
                  >
                    Cancel Payment
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
