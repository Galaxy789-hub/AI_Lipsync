import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-row p-4 gap-4 mt-8">
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-6 md:ml-60 ml-36 sm:ml-5"></div>
      <div className="grid grid-cols-4 gap-4 bg-[#3f3f3f] p-4">
        <Image
          src="/assets/product_6.jpeg"
          className="cursor-pointer h-auto hover:grayscale-0 transition-all duration-300 filter grayscale rounded-lg m-auto"
          layout="responsive"
          width={400}
          height={500}
          alt=""
          draggable="false"
          style={{ userSelect: "none" }}
        />
        <Image
          src="/assets/product_5.jpeg"
          className="cursor-pointer hover:grayscale-0 transition-all duration-300 filter grayscale rounded-lg m-auto"
          layout="responsive"
          width={400}
          height={500}
          alt=""
          draggable="false"
          style={{ userSelect: "none" }}
        />
        <Image
          src="/assets/product_11.jpeg"
          className="cursor-pointer h-auto hover:grayscale-0 transition-all duration-300 filter grayscale rounded-lg m-auto"
          layout="responsive"
          width={400}
          height={500}
          alt=""
          draggable="false"
          style={{ userSelect: "none" }}
        />
        <Image
          src="/assets/product_5.jpeg"
          className="cursor-pointer h-auto hover:grayscale-0 transition-all duration-300 filter grayscale rounded-lg min-h-[410px] "
          layout="responsive"
          width={400}
          height={500}
          alt=""
          draggable="false"
          style={{ userSelect: "none" }}
        />
      </div>
    </div>
  );
}

export default Footer;
