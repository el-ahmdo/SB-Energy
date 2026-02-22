const Products = () => {
  return (
    <div
      id="products"
      className="md:min-h-70 w-full flex md:flex-row flex-col px-2 py-10 justify-between items-center md:px-30 bg-[#333333] text-white gap-10">
      <div className="flex-1 w-full border border-[#FFFFFF1A] bg-[#FFFFFF1A] p-4 flex flex-col gap-2 min-h-30 rounded-2xl shadow relative ">
        <p className="text-[30px] font-semibold">1000MT</p>

        <p className="text-[16px] font-thin">Bitumen 60/70 In Stock</p>
        <div className="absolute top-0 right-0 w-10 h-10 bg-[#004AAD] flex justify-center items-center  rounded-tr-2xl rounded-bl">
          <img
            src="/Assets/bitumen.svg"
            width="20px"
            height="20px"
            alt="Logo"
          />
        </div>
      </div>
      <div className="flex-1 w-full border border-[#FFFFFF1A] bg-[#FFFFFF1A] p-4 flex flex-col gap-2 min-h-30 rounded-2xl shadow relative ">
        <p className="text-[30px] font-semibold">1000MT</p>

        <p className="text-[16px] font-thin">Bitumen 60/70 In Stock</p>
        <div className="absolute top-0 right-0 w-10 h-10 bg-[#00BF63] flex justify-center items-center  rounded-tr-2xl rounded-bl">
          <img
            src="/Assets/reliable.svg"
            width="20px"
            height="20px"
            alt="Logo"
          />
        </div>
      </div>
      <div className="flex-1 w-full border border-[#FFFFFF1A] bg-[#FFFFFF1A] p-4 flex flex-col gap-2 min-h-30 rounded-2xl shadow relative ">
        <p className="text-[30px] font-semibold">1000MT</p>

        <p className="text-[16px] font-thin">Bitumen 60/70 In Stock</p>
        <div className="absolute top-0 right-0 w-10 h-10 bg-[#DB0707] flex justify-center items-center  rounded-tr-2xl rounded-bl">
          <img src="/Assets/Expert.svg" width="20px" height="20px" alt="Logo" />
        </div>
      </div>
      <div className="flex-1 w-full border border-[#FFFFFF1A] bg-[#FFFFFF1A] p-4 flex flex-col gap-2 min-h-30 rounded-2xl shadow relative ">
        <p className="text-[30px] font-semibold">1000MT</p>

        <p className="text-[16px] font-thin">Bitumen 60/70 In Stock</p>
        <div className="absolute top-0 right-0 w-10 h-10 bg-[#004AAD] flex justify-center items-center  rounded-tr-2xl rounded-bl">
          <img
            src="/Assets/Premium.svg"
            width="20px"
            height="20px"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
