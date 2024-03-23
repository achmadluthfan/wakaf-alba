import Card from "../../component/Card";
import wakafImage from "@/public/assets/image/wakaf.png";

const Program = () => {
  return (
    <section className="relative top-[72px]">
      <div className="px-[6vw] py-[7vw]">
        <div>
          <h2 className="text-center">Program Wakaf Saat Ini</h2>
        </div>
        <div className="mt-[6vw] flex flex-col gap-y-[7vw]">
          <Card
            urlImage={wakafImage}
            // width={100}
            // height={100}
            title="Pembangunan Masjid Albarokah"
            description="Pembangunan ini akan dilaksanakan di daerah Karangwaru Kota Tegalrejo"
          />
          <Card
            urlImage={wakafImage}
            // width={100}
            // height={100}
            title="Pembangunan Masjid Albarokah"
            description="Pembangunan ini akan dilaksanakan di daerah Karangwaru Kota Tegalrejo"
          />
          <Card
            urlImage={wakafImage}
            // width={100}
            // height={100}
            title="Pembangunan Masjid Albarokah"
            description="Pembangunan ini akan dilaksanakan di daerah Karangwaru Kota Tegalrejo"
          />
        </div>
      </div>
    </section>
  );
};

export default Program;
