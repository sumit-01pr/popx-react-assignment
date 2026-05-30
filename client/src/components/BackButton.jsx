import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 mb-8 text-[#1D2226] font-medium"
    >
      <ArrowLeft size={10} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;