import Button from "../../component/Button";
const AboutWakaf = () => {
  const datas = [
    {
      title: "Orang yang berwakaf (al-waqif)",
      description:
        "Syarat-syarat al-waqif ada empat, pertama orang yang berwakaf ini mestilah memiliki secara penuh harta itu, artinya dia merdeka untuk mewakafkan harta itu kepada sesiapa yang ia kehendaki. Kedua dia mestilah orang yang berakal, tak sah wakaf orang bodoh, orang gila, atau orang yang sedang mabuk. Ketiga dia mestilah baligh. Dan keempat dia mestilah orang yang mampu bertindak secara hukum (rasyid). Implikasinya orang bodoh, orang yang sedang muflis dan orang lemah ingatan tidak sah mewakafkan hartanya.",
    },
    {
      title: "Benda yang diwakafkan (al-mauquf)",
      description:
        "Harta yang diwakafkan itu tidak sah dipindahmilikkan, kecuali apabila ia memenuhi beberapa persyaratan yang ditentukan oleh ah; pertama barang yang diwakafkan itu mestilah barang yang berharga Kedua, harta yang diwakafkan itu mestilah diketahui kadarnya. Jadi apabila harta itu tidak diketahui jumlahnya (majhul), maka pengalihan milik pada ketika itu tidak sah. Ketiga, harta yang diwakafkan itu pasti dimiliki oleh orang yang berwakaf (wakif). Keempat, harta itu mestilah berdiri sendiri, tidak melekat kepada harta lain (mufarrazan) atau disebut juga dengan istilah (ghaira shai’).",
    },
    {
      title: "Orang yang menerima manfaat wakaf (al-mauquf ‘alaihi)",
      description:
        "Dari segi klasifikasinya orang yang menerima wakaf ini ada dua macam, pertama tertentu (mu’ayyan) dan tidak tertentu (ghaira mu’ayyan). Yang dimasudkan dengan tertentu ialah, jelas orang yang menerima wakaf itu, apakah seorang, dua orang atau satu kumpulan yang semuanya tertentu dan tidak boleh dirubah. Sedangkan yang tidak tentu maksudnya tempat berwakaf itu tidak ditentukan secara terperinci, umpamanya seseorang sesorang untuk orang fakir, miskin, tempat ibadah, dll. Persyaratan bagi orang yang menerima wakaf tertentu ini (al-mawquf mu’ayyan) bahwa ia mestilah orang yang boleh untuk memiliki harta (ahlan li al-tamlik), Maka orang muslim, merdeka dan kafir zimmi yang memenuhi syarat ini boleh memiliki harta wakaf. Adapun orang bodoh, hamba sahaya, dan orang gila tidak sah menerima wakaf. Syarat-syarat yang berkaitan dengan ghaira mu’ayyan; pertama ialah bahwa yang akan menerima wakaf itu mestilah dapat menjadikan wakaf itu untuk kebaikan yang dengannya dapat mendekatkan diri kepada Allah. Dan wakaf ini hanya ditujukan untuk kepentingan Islam saja.",
    },
    {
      title: "Lafadz atau ikrar wakaf (sighah)",
      description:
        "Syarat-syarat Shigah Berkaitan dengan isi ucapan (sighah) perlu ada beberapa syarat. Pertama, ucapan itu mestilah mengandungi kata-kata yang menunjukKan kekalnya (ta’bid). Tidak sah wakaf kalau ucapan dengan batas waktu tertentu. Kedua, ucapan itu dapat direalisasikan segera (tanjiz), tanpa disangkutkan atau digantungkan kepada syarat tertentu. Ketiga, ucapan itu bersifat pasti. Keempat, ucapan itu tidak diikuti oleh syarat yang membatalkan. Apabila semua persyaratan diatas dapat terpenuhi maka penguasaan atas tanah wakaf bagi penerima wakaf adalah sah. Pewakaf tidak dapat lagi menarik balik pemilikan harta itu telah berpindah kepada Allah dan penguasaan harta tersebut adalah orang yang menerima wakaf secara umum ia dianggap pemiliknya tapi bersifat ghaira tammah.",
    },
  ];

  interface CardDetailProps {
    title: string;
    desc: string;
  }

  const CardDetail: React.FC<CardDetailProps> = ({ title, desc }) => {
    return (
      <div className="flex gap-x-[3vw] bg-white rounded-lg px-[4vw] py-[8vw] aboutWakaf-shadow">
        <div>✅</div>
        <div>
          <h4 className="text-[#23155B] font-semibold mb-[2vw]">{title}</h4>
          <p className="text-[#928CAB]">{desc}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative top-[72px]">
      <div className="px-[6vw] py-[7vw] flex flex-col gap-y-[5vw]">
        <div>
          <h2 className="mb-[4vw] text-center">
            <span className="text-[#23155B]">Tentang</span> Wakaf
          </h2>
          <p>
            "Wakaf" adalah istilah penyerahan harta benda milik pribadi (al-ain)
            secara permanen untuk menikmati manfaatnya (al-manfa'ah) pada tujuan
            sosial, keagamaan, atau kemanusiaan. Harta benda yang diwakafkan
            tidak boleh diambil kembali atau diwariskan, melainkan dimanfaatkan
            terus-menerus sesuai dengan tujuan yang ditentukan oleh pewakaf.
          </p>
        </div>
        <div>
          <h3 className="text-[#23155B] font-semibold mb-[4vw]">
            Keutamaan Wakaf
          </h3>
          <p className="mb-[4vw]">
            ذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ مِنْ
            صَدَقَةٍ جَارِيَةٍ وَعِلْمٍ يُنْتَفَعُ بِهِ وَوَلَدٍ صَالِحٍ يَدْعُو
            لَه
          </p>
          <p>
            “Jika seseorang meninggal dunia, maka terputuslah amalannya kecuali
            tiga perkara (yaitu): sedekah jariyah, ilmu yang dimanfaatkan, atau
            do’a anak yang shalih” (HR. Muslim no. 1631)
          </p>
        </div>
        <div>
          <h3 className="text-[#23155B] font-semibold mb-[4vw]">
            Rukun dan Syarat Wakaf
          </h3>
          <div className="mb-[4vw] flex flex-col gap-y-[6vw] ">
            {datas.map((data, index) => (
              <CardDetail
                key={index}
                title={data.title}
                desc={data.description}
              />
            ))}
          </div>
          <Button
            content="Wakaf Sekarang"
            className="bg-[#016A70] text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutWakaf;
