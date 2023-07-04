import { useNavigate } from "react-router-dom";

type ButtonCtaProps = {
  type: "button" | "submit";
  text: string;
};
const ButttonCta = ({ type, text }: ButtonCtaProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "button") {
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-dark-navy text-white font-bold rounded-lg p-[18px] hover:bg-gradient-to-bl from-[#FF6A3A] to-[#FF527B] transition-colors duration-300"
      type={type}
    >
      {text}
    </button>
  );
};
export default ButttonCta;
