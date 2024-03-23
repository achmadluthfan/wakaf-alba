import Link from "next/link";
import Image from "next/image";
import arrowImage from "@/public/assets/icon/arrow-right.svg";

// Definisikan tipe props untuk komponen
interface CardProps {
  urlImage: string;
  title: string;
  description: string;
  urlArticle: string;
}

const Card: React.FC<CardProps> = ({
  urlImage,
  title,
  description,
  urlArticle,
}) => {
  return (
    <div className="rounded-xl card overflow-hidden">
      <Image src={urlImage} alt="wakaf-image"></Image>
      <div className="px-[6vw] py-[4vw]">
        <p className="text-[#016A70] font-extrabold">{title}</p>
        <p className="my-[4vw]">{description}</p>
        <Link href={urlArticle} className="font-extrabold uppercase">
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default Card;
