import Image from "next/image";
import aboutUs from "@/public/assets/image/tentang_kami.png";
import Button from "../../component/Button";

const About = () => {
  return (
    <section className="relative top-[72px]">
      <div className=" px-[6vw] py-[7vw]">
        <div>
          <Image src={aboutUs} alt="tentang_kami" className="h-[50%]"></Image>
        </div>
        <div>
          <h3 className="mb-[1vw] mt-[4vw]">Tentang Kami</h3>
          <p className="text-justify">
            Wakaf Al Barokah adalah lembaga wakaf yang berada dibawah naungan
            Yayasan Al-Barokah Yogyakarta. Wakaf Albarokah bertujuan untuk
            meningkatkan manfaat wakaf bagi masyarakat. Wakaf Albarokah telah
            mengelola berbagai macam wakaf, baik wakaf tanah, bangunan, maupun
            uang. Lembaga ini mengelola dan mengembangkan wakaf secara
            profesional dan transparan, serta meningkatkan kesadaran masyarakat
            tentang pentingnya wakaf.
          </p>
          <Button
            content="Wakaf Sekarang"
            className="bg-[#016A70] text-white my-[3vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
