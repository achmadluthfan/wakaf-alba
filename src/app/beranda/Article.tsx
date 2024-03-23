import articleImage from "@/public/assets/image/artikel.png";
import CardArticle from "../../component/CardArticle";

const Article = () => {
  return (
    <section className="relative top-[72px]">
      <div className="px-[6vw] py-[7vw]">
        <div>
          <h2 className="text-center">Berita dan Artikel Terbaru</h2>
        </div>
        <div className="mt-[6vw] flex flex-col gap-y-[7vw]">
          <CardArticle
            // width={100}
            // height={100}
            title="Rakornas BWI, Wakil Presiden: Wakaf Uang Capai Rp 2,361 Triliun dan Tanah Wakaf 57.263 Hektare"
            urlImage={articleImage}
            urlArticle="/article"
            description="WAKAFDT.OR.ID | JAKARTA — Wakil Presiden KH Ma’ruf Amin menyebut angka fantastis yang terkait wakaf di Indonesia. Berdasarkan catatan Badan Wakaf Indonesia (BWI), Wakil Presiden"
          />
          <CardArticle
            // width={100}
            // height={100}
            title="Rakornas BWI, Wakil Presiden: Wakaf Uang Capai Rp 2,361 Triliun dan Tanah Wakaf 57.263 Hektare"
            urlImage={articleImage}
            urlArticle="/article"
            description="WAKAFDT.OR.ID | JAKARTA — Wakil Presiden KH Ma’ruf Amin menyebut angka fantastis yang terkait wakaf di Indonesia. Berdasarkan catatan Badan Wakaf Indonesia (BWI), Wakil Presiden"
          />
          <CardArticle
            // width={100}
            // height={100}
            title="Rakornas BWI, Wakil Presiden: Wakaf Uang Capai Rp 2,361 Triliun dan Tanah Wakaf 57.263 Hektare"
            urlImage={articleImage}
            urlArticle="/article"
            description="WAKAFDT.OR.ID | JAKARTA — Wakil Presiden KH Ma’ruf Amin menyebut angka fantastis yang terkait wakaf di Indonesia. Berdasarkan catatan Badan Wakaf Indonesia (BWI), Wakil Presiden"
          />
        </div>
      </div>
    </section>
  );
};

export default Article;
