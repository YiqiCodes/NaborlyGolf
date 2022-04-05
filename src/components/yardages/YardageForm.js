/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

// Antd
import { notification } from "antd";

// Auth
import { useAuth0 } from "@auth0/auth0-react";

export default function YardageForm() {
  const { user } = useAuth0();
  const [formData, setFormData] = useState({
    club: "Driver",
    yardage: null,
  });
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "club") {
      setFormData((formData) => ({
        ...formData,
        club: value,
      }));
    } else {
      setFormData((formData) => ({
        ...formData,
        yardage: parseInt(value),
      }));
    }
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "No mulligans on the tour",
      description: "Please double check and try again.",
    });
  };

  const openNotificationWithIconSubmit = (type) => {
    notification[type]({
      message: "Successfully updated club",
      description: "Please double check and try again.",
    });
  };

  const handleSubmit = () => {
    if (!formData.yardage) {
      openNotificationWithIcon("error");
    } else {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URL}/yardages/postYardages`,
        data: { user: user.email, clubAdded: formData },
      });
      openNotificationWithIconSubmit("success");
      setOpen(!open);
      window.location.reload();
    }
  };
  return (
    <>
      {/* Button that renders modal to add club */}
      <div className="w-full h-auto flex justify-center align-baseline  bg-gray-50 text-right sm:p-8">
        <button
          onClick={() => setOpen(!open)}
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Club
        </button>
      </div>
      {/* Modal that allows user to make post request */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="w-full relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-9/12">
                <div className="flex w-full bg-white relative mt-10 sm:mt-0">
                  <div className="md:grid md:grid-cols-2 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <div className="block text-sm font-medium text-gray-700">
                                Select Club
                              </div>
                              <select
                                onChange={(e) => handleChange(e)}
                                name="club"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option>Driver</option>
                                <option>3 Wood</option>
                                <option>5 Wood</option>
                                <option>3 Hybrid</option>
                                <option>4 Hybrid</option>
                                <option>4 Iron</option>
                                <option>5 Iron</option>
                                <option>6 Iron</option>
                                <option>7 Iron</option>
                                <option>8 Iron</option>
                                <option>9 Iron</option>
                                <option>Pitching Wedge</option>
                                <option>Gap Wedge</option>
                                <option>Sand Wedge</option>
                                <option>Loft Wedge</option>
                              </select>
                            </div>

                            <div className="col-span-6" />
                            <div>
                              <label
                                htmlFor="yardage"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Yardage
                              </label>
                              <div className="mt-1">
                                <input
                                  onChange={(e) => handleChange(e)}
                                  type="number"
                                  name="yardages"
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-auto sm:text-sm border-gray-300 rounded-md p-2"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => {
                              handleSubmit();
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
