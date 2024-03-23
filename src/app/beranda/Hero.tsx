import bgHero from "@/public/assets/background/bg.svg";
import Image from "next/image";
import Button from "../../component/Button";

const Hero = () => {
  return (
    <section>
      <div className="relative z-10 top-[72px] h-[calc(100vh-72px)] flex items-center justify-center">
        <div className="flex h-[100%] w-full justify-center items-center">
          <div className=" h-[90%] w-[90%]  flex flex-col gap-y-[4vw] items-center justify-center ">
            <div className=" absolute bg-[#FBFAFF] w-full h-full z-[-2]"></div>
            <Image
              src={bgHero}
              alt="bg-hero"
              className="absolute z-[-1] top-0 w-auto h-full"
            ></Image>

            <h1 className=" text-center">Wakaf Alba</h1>
            <p className="text-center w-full mb-[2vw] md:text-lg ">
              The right way to fund and incubate your DeFi startup
            </p>
            <div className="flex flex-col gap-y-[2vw] my-[vw]">
              <Button
                content="Wakaf Sekarang"
                className="bg-[#016A70] text-white"
              />
              <Button content="Daftar Fundraising" className=" text-green-1 " />
            </div>
            <div className="w-[95%]">
              <h3 className=" text-center mb-[2vw]">Update Perolehan Wakaf</h3>
              <div className="flex bg-[#016A70] justify-between rounded-xl px-[6vw] py-[7vw]">
                <div className="text-center">
                  <p className="text-white">1000</p>
                  <p className="text-[#F5F7E4]">Donatur</p>
                </div>
                <div className="text-center">
                  <p className="text-white">3</p>
                  <p className="text-[#F5F7E4]">Jumlah Program</p>
                </div>
                <div className="text-center">
                  <p className="text-white">999</p>
                  <p className="text-[#F5F7E4]">Perolehan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
