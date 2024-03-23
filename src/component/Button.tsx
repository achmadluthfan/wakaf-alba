// Definisikan tipe props untuk komponen
interface ButtonProps {
  content: string;
  className: string;
}

// Komponen React yang menerima props dengan tipe yang telah ditentukan
const Button: React.FC<ButtonProps> = ({ content, className }) => {
  return (
    <button
      className={`px-[7vw] py-[2vw] border-2 text-[4vw] rounded-md border-[#016A70] ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
