import Link from "next/link";
const Footer = () => {
  return (
    <section className="top-[72px] relative">
      <div className="bg-[#016A70]">
        <div className="px-[8vw] py-[13vw] flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-2">
            <Link href="/tentang-kami">
              <h3 className="text-cream">Tentang Kami</h3>
            </Link>
            <p className="text-white">
              Wakaf Al Barokah adalah Lembaga Wakaf yang berdiri dari Yayasan
              Al-Barokah Yogyakarta, yang bertempat di Jl. Gotong Royong
              No.1107, Karangwaru, Kec. Tegalrejo, Kota Yogyakarta, Daerah
              Istimewa Yogyakarta 55241
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-cream">Kontak Kami</h3>
            <div>
              <p className="text-white font-normal">
                Kantor Sekretariat : Jl. Gotong Royong No.1107, Karangwaru, Kec.
                Tegalrejo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55241
              </p>
              <p className="text-white">Email : albapesantren@gmail.com</p>
              <p className="text-white">Whatsapp Admin : 081903571959</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
