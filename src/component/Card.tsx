import Button from "./Button";
import Image from "next/image";

// Definisikan tipe props untuk komponen
interface CardProps {
  urlImage: string;
  // width: number;
  // height: number;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  urlImage,
  // width,
  // height,
  title,
  description,
}) => {
  return (
    <div className="rounded-xl card overflow-hidden">
      <Image src={urlImage} alt="wakaf-image"></Image>
      <div className="px-[6vw] py-[4vw]">
        <p className="text-[#016A70] font-extrabold">{title}</p>
        <p className="my-[4vw]">{description}</p>
        <Button content="Wakaf Sekarang" className=" text-white bg-[#016A70]" />
      </div>
    </div>
  );
};

export default Card;
