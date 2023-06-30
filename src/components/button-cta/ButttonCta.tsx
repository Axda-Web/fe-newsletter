type ButtonCtaProps = {
  type: "button" | "submit";
  text: string;
};
const ButttonCta = ({ type, text }: ButtonCtaProps) => {
  return (
    <button
      className="w-full bg-dark-navy text-white font-bold rounded-lg p-[18px] hover:bg-gradient-to-bl from-[#FF6A3A] to-[#FF527B] transition-colors duration-1000"
      type={type}
    >
      {text}
    </button>
  );
};
export default ButttonCta;

// TODO: Button transition effect is not working, find why.
