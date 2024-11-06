import { useRouter } from "next/navigation";
import { useState } from "react";
import VoiceModal from "../../Modal/page";

function ContentVoice() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGeneration = () => {
    router.push("/Generation");
  };

  const handleVoiceModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-row gap-8 bg-white p-4">
        <div className="relative basis-1/3 overflow-hidden rounded">
          <p className="text-base font-bold pb-8">Script</p>
          <textarea
            id="message"
            rows={25}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ></textarea>
        </div>
        <div className="relative basis-1/3 overflow-hidden rounded">
          <div className="flex flex-col gap-2">
            <p className="text-base font-bold pb-6">Voice-Over</p>
            <button
              onClick={handleVoiceModal}
              className="flex bg-[#E5E5E5] items-center w-max rounded-lg p-2 px-3 text-xs"
            >
              Play Voice Over
            </button>
            <p className="text-sm">Voice Over Selector</p>
            <select
              id="countries"
              className="bg-[#E5E5E5] h-8 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              defaultValue="" // sets default empty value
            >
              <option value=""></option> <option value="US">1</option>
              <option value="CA">2</option>
              <option value="FR">3</option>
              <option value="DE">4</option>
            </select>
            <p className="text-sm pt-1">Speed (1.00x)</p>
            <span className="flex flex-row align-middle items-center gap-3 -mt-2">
              <label
                htmlFor="default-range"
                className="block text-sm text-gray-900 dark:text-white"
              >
                slow
              </label>
              <input
                id="default-range"
                type="range"
                value="50"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <label
                htmlFor="default-range"
                className="block text-sm text-gray-900 dark:text-white"
              >
                fast
              </label>
            </span>
            <p className="text-sm pt-1">Stability</p>
            <span className="flex flex-row align-middle items-center gap-3 -mt-2">
              <label
                htmlFor="default-range"
                className="block text-sm text-gray-900 dark:text-white"
              >
                Variable
              </label>
              <input
                id="default-range"
                type="range"
                value="50"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <label
                htmlFor="default-range"
                className="block text-sm text-gray-900 dark:text-white"
              >
                Stable
              </label>
            </span>
            <p className="text-sm pt-1">Clarity + Similarity</p>
            <span className="flex flex-row align-middle items-center gap-3 -mt-2">
              <label
                htmlFor="default-range"
                className="block text-sm text-gray-900 dark:text-white"
              >
                Low
              </label>
              <input
                id="default-range"
                type="range"
                value="50"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <label
                htmlFor="default-range"
                className="block text-sm text-gray-900 dark:text-white"
              >
                High
              </label>
            </span>
            <div className="flex items-center pt-2 pb-2">
              <input
                id="checked-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Speaker Boost
              </label>
            </div>
            <button className="bg-[#E5E5E5] items-center w-full rounded-lg p-2 px-3 text-xs">
              Restore Default Settings
            </button>
            <button className="bg-[#E5E5E5] items-center w-full rounded-lg p-2 px-3 text-xs">
              Generate Voice Over
            </button>
            <button
              onClick={handleGeneration}
              className="bg-[#E5E5E5] items-center w-full rounded-lg p-2 px-3 text-xs"
            >
              Process Video & LipSync
            </button>
          </div>
        </div>
        <div className="relative basis-1/3 overflow-hidden rounded">
          <p className="text-base font-bold">Video Preview</p>
          <video className="w-full h-[340px] rounded-lg" controls>
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Test Video
          </video>
          <p className="text-base font-bold pt-2">Tags</p>
          <p className="text-sm pt-2">Brand</p>
          <select
            id="countries"
            className="bg-[#E5E5E5] h-8 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            defaultValue="" // sets default empty value
          >
            <option value=""></option> <option value="US">1</option>
            <option value="CA">2</option>
            <option value="FR">3</option>
            <option value="DE">4</option>
          </select>

          <p className="text-sm pt-2">Product</p>

          <select
            id="countries"
            className="bg-[#E5E5E5] h-8 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            defaultValue="" // sets default empty value
          >
            <option value=""></option> <option value="US">1</option>
            <option value="CA">2</option>
            <option value="FR">3</option>
            <option value="DE">4</option>
          </select>
        </div>
      </div>

      {isModalOpen && <VoiceModal onClose={closeModal} />}
    </>
  );
}

export default ContentVoice;
