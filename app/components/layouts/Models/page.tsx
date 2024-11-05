import Image from "next/image";

function Models() {
  return (
    <div className="flex flex-row p-4 gap-4 mt-8 items-center">
      <div className="max-w-sm items-center text-center rounded overflow-hidden shadow-lg mt-6 md:ml-20 ml-5">
        <p className="text-xl font-bold leading-6 text-gray-300 items-center">
          Your Characters
        </p>
        <p className="text-sm leading-6 text-gray-500 text-wrap">
          All the characters created by you
        </p>
        <div className="flex flex-col items-center justify-center w-full p-2 h-auto relative sm:p-4 md:p-6 lg:p-8">
          <Image
            src="/assets/upload.jpeg"
            className="cursor-pointer w-full h-auto opacity-50 rounded-t-lg sm:w-3/4 md:w-2/3 lg:w-1/2"
            width={300}
            height={380}
            alt=""
            draggable="false"
            style={{ userSelect: "none" }}
          />
          <svg
            className="absolute inset-0 m-auto w-12 h-12 text-emerald-600 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-6 lg:h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-gray-800 font-bold text-base py-2 px-4 w-full rounded-b-lg sm:text-sm md:text-base lg:text-lg">
            Create your character
          </button>
        </div>
      </div>
      <div>
        <p className="text-4xl font-bold leading-6 text-white mb-6">
          Preset Fashion Models
        </p>
        <div className="grid grid-cols-4 gap-4 bg-[#3f3f3f] px-4 py-1 min-h-[400px] rounded-lg ">
          <div className="max-w-sm rounded-lg overflow-hidden items-center flex">
            <Image
              src="/assets/character_1.jpg"
              className="cursor-pointer w-full min-h-[350px] rounded-lg select-none custom-touch-callout-none"
              layout="responsive"
              width={400}
              height={400}
              alt=""
              draggable="false"
              style={{ userSelect: "none" }}
            />
          </div>
          <div className="max-w-sm rounded-lg overflow-hidden items-center flex">
            <Image
              src="/assets/character_2.jpg"
              className="cursor-pointer w-full min-h-[350px] rounded-lg select-none custom-touch-callout-none"
              layout="responsive"
              width={400}
              height={400}
              alt=""
              style={{ userSelect: "none" }}
              draggable="false"
            />
          </div>
          <div className="max-w-sm rounded-lg overflow-hidden items-center flex ">
            <Image
              src="/assets/product_7.jpeg"
              className="cursor-pointer w-full min-h-[350px] rounded-lg select-none custom-touch-callout-none"
              layout="responsive"
              width={400}
              height={400}
              alt=""
              style={{ userSelect: "none" }}
              draggable="false"
            />
          </div>
          <div className="max-w-sm rounded-lg overflow-hidden items-center flex">
            <Image
              src="/assets/character_1.jpg"
              className="cursor-pointer w-full min-h-[350px] rounded-lg select-none custom-touch-callout-none"
              layout="responsive"
              width={400}
              height={400}
              alt=""
              style={{ userSelect: "none" }}
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Models;
