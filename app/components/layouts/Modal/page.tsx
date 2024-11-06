import { useState, useEffect, useRef } from "react";

interface VoiceModalProps {
  onClose: () => void;
}

function VoiceModal({ onClose }: VoiceModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 overflow-auto"
      >
        <div ref={modalRef} className="relative p-4 w-[1000px] max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between md:p-5 rounded-t dark:border-gray-600">
              <h3 className="text-xl font-bold text-black">
                Voice Over Selection
              </h3>
            </div>
            <form className="flex items-center w-full p-4">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black-500 block w-full ps-10 p-2.5  "
                  placeholder="Search for a voice"
                  required
                />
              </div>
            </form>
            <span className="text-lg font-bold text-black p-4">
              Recently Used
            </span>
            <div className="p-4 md:p-5 space-y-4">
              <div className="w-full flex flex-col gap-2">
                <span className="flex flex-row bg-[#F5F5F5] h-10 w-full align-middle items-center justify-between p-2 rounded-lg">
                  <p className="text-sm">Olivia: French, Soft, ASMR</p>
                  <span>
                    <button className=" bg-[#E5E5E5] p-2 rounded-lg h-8 text-sm align-middle items-center">
                      Play
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-8 align-middle items-center ml-4">
                      SELECT VOICE
                    </button>
                  </span>
                </span>
                <span className="flex flex-row bg-[#F5F5F5] h-10 w-full align-middle items-center justify-between p-2 rounded-lg">
                  <p className="text-sm">Joe Rogan: English, dynamic, action</p>
                  <span>
                    <button className=" bg-[#E5E5E5] p-2 rounded-lg h-8 text-sm align-middle items-center">
                      Play
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-8 align-middle items-center ml-4">
                      SELECT VOICE
                    </button>
                  </span>
                </span>
                <span className="flex flex-row bg-[#F5F5F5] h-10 w-full align-middle items-center justify-between p-2 rounded-lg">
                  <p className="text-sm">Bill Sithers: English, deep, old</p>
                  <span>
                    <button className=" bg-[#E5E5E5] p-2 rounded-lg h-8 text-sm align-middle items-center">
                      Play
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-8 align-middle items-center ml-4">
                      SELECT VOICE
                    </button>
                  </span>
                </span>
                <span className="flex flex-row bg-[#F5F5F5] h-10 w-full align-middle items-center justify-between p-2 rounded-lg">
                  <p className="text-sm">
                    Paul: Italian, dynamic, professional
                  </p>
                  <span>
                    <button className=" bg-[#E5E5E5] p-2 rounded-lg h-8 text-sm align-middle items-center">
                      Play
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-8 align-middle items-center ml-4">
                      SELECT VOICE
                    </button>
                  </span>
                </span>
              </div>
            </div>

            <span className="text-lg font-bold text-black p-4">
              Professional Voices
            </span>
            <div className="p-4 md:p-5 space-y-4">
              <div className="w-full flex flex-col gap-2">
                <span className="flex flex-row bg-[#F5F5F5] h-10 w-full align-middle items-center justify-between p-2 rounded-lg">
                  <p className="text-sm">Olivia: French, Soft, ASMR</p>
                  <span>
                    <button className=" bg-[#E5E5E5] p-2 rounded-lg h-8 text-sm align-middle items-center">
                      Play
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-8 align-middle items-center ml-4">
                      SELECT VOICE
                    </button>
                  </span>
                </span>
                <span className="flex flex-row bg-[#F5F5F5] h-10 w-full align-middle items-center justify-between p-2 rounded-lg">
                  <p className="text-sm">Joe Rogan: English, dynamic, action</p>
                  <span>
                    <button className=" bg-[#E5E5E5] p-2 rounded-lg h-8 text-sm align-middle items-center">
                      Play
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-8 align-middle items-center ml-4">
                      SELECT VOICE
                    </button>
                  </span>
                </span>
                <span className="flex flex-row bg-[#F5F5F5] h-10 w-full align-middle items-center justify-between p-2 rounded-lg">
                  <p className="text-sm">Bill Sithers: English, deep, old</p>
                  <span>
                    <button className=" bg-[#E5E5E5] p-2 rounded-lg h-8 text-sm align-middle items-center">
                      Play
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-8 align-middle items-center ml-4">
                      SELECT VOICE
                    </button>
                  </span>
                </span>
                <span className="flex flex-row bg-[#F5F5F5] h-10 w-full align-middle items-center justify-between p-2 rounded-lg">
                  <p className="text-sm">
                    Paul: Italian, dynamic, professional
                  </p>
                  <span>
                    <button className=" bg-[#E5E5E5] p-2 rounded-lg h-8 text-sm align-middle items-center">
                      Play
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-8 align-middle items-center ml-4">
                      SELECT VOICE
                    </button>
                  </span>
                </span>
              </div>
            </div>

            <span className="text-lg font-bold text-black p-4">
              Cloned Voices
            </span>
            <div className="p-4 md:p-5 space-y-4">
              <div className="w-full flex flex-col gap-2">
                <span className="flex flex-row bg-[#F5F5F5] h-10 w-full align-middle items-center justify-between p-2 rounded-lg">
                  <p className="text-sm">Olivia: French, Soft, ASMR</p>
                  <span>
                    <button className=" bg-[#E5E5E5] p-2 rounded-lg h-8 text-sm align-middle items-center">
                      Play
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-8 align-middle items-center ml-4">
                      SELECT VOICE
                    </button>
                  </span>
                </span>
                <span className="flex flex-row bg-[#F5F5F5] h-10 w-full align-middle items-center justify-between p-2 rounded-lg">
                  <p className="text-sm">Joe Rogan: English, dynamic, action</p>
                  <span>
                    <button className=" bg-[#E5E5E5] p-2 rounded-lg h-8 text-sm align-middle items-center">
                      Play
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-8 align-middle items-center ml-4">
                      SELECT VOICE
                    </button>
                  </span>
                </span>
                <span className="flex flex-row bg-[#F5F5F5] h-10 w-full align-middle items-center justify-between p-2 rounded-lg">
                  <p className="text-sm">Bill Sithers: English, deep, old</p>
                  <span>
                    <button className=" bg-[#E5E5E5] p-2 rounded-lg h-8 text-sm align-middle items-center">
                      Play
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-8 align-middle items-center ml-4">
                      SELECT VOICE
                    </button>
                  </span>
                </span>
                <span className="flex flex-row bg-[#F5F5F5] h-10 w-full align-middle items-center justify-between p-2 rounded-lg">
                  <p className="text-sm">
                    Paul: Italian, dynamic, professional
                  </p>
                  <span>
                    <button className=" bg-[#E5E5E5] p-2 rounded-lg h-8 text-sm align-middle items-center">
                      Play
                    </button>
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-8 align-middle items-center ml-4">
                      SELECT VOICE
                    </button>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VoiceModal;
