import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import PrimaryButton from "../components/PrimaryButton";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="h-screen flex flex-col justify-end px-7 pb-10">

        <h1 className="text-3xl font-bold text-[#1D2226]">
          Welcome to PopX
        </h1>

        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <div className="mt-8 space-y-3">

          <PrimaryButton
            text="Create Account"
            onClick={() => navigate("/register")}
          />

          <PrimaryButton
            text="Already Registered? Login"
            color="bg-[#CEBAFB]"
            textColor="text-black"
            onClick={() => navigate("/login")}
          />

        </div>
      </div>
    </MobileContainer>
  );
};

export default Welcome;