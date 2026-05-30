import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import InputField from "../components/InputField";

const Login = () => {
    const navigate = useNavigate();

    return (
        <MobileContainer>
            <div className="px-6 pt-10">
                
                <h1 className="text-3xl font-bold text-[#1D2226]">
                    Signin to your <br /> PopX account
                </h1>

                <p className="text-gray-400 mt-3 text-lg">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit,
                </p>

                <div className="mt-8">
                    <InputField
                        label="Email Address"
                        placeholder="Enter email address"
                    />

                    <InputField
                        label="Password"
                        placeholder="Enter password"
                        type="password"
                    />

                    <button
                        onClick={() => navigate("/account")}
                        className="
              w-full
              h-12
              rounded-md
              bg-[#CBCBCB]
              text-white
              font-medium
              mt-3
            "
                    >
                        Login
                    </button>
                </div>

            </div>
        </MobileContainer>
    );
};

export default Login;