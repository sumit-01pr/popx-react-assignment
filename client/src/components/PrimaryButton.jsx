const PrimaryButton = ({
  text,
  onClick,
  color = "bg-[#6C25FF]",
  textColor = "text-white",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${color} ${textColor} w-full h-12 rounded-lg font-medium`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;