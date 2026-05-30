import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import InputField from "../components/InputField";

const Register = () => {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="flex flex-col min-h-screen px-6 pt-8">

        <h1 className="text-3xl font-bold text-[#1D2226] leading-tight">
          Create your
          <br />
          PopX account
        </h1>

        <div className="mt-8">

          <InputField
            label="Full Name*"
            placeholder="Marry Doe"
          />

          <InputField
            label="Phone number*"
            placeholder="Marry Doe"
          />

          <InputField
            label="Email address*"
            placeholder="Marry Doe"
          />

          <InputField
            label="Password*"
            placeholder="Marry Doe"
            type="password"
          />

          <InputField
            label="Company name"
            placeholder="Marry Doe"
          />

          <div className="mt-4">
            <p className="text-sm text-[#1D2226]">
              Are you an Agency?*
            </p>

            <div className="flex gap-6 mt-3">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  defaultChecked
                  className="accent-[#6C25FF]"
                />
                Yes
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  className="accent-[#6C25FF]"
                />
                No
              </label>
            </div>
          </div>

        </div>

        <div className="mt-auto pb-8">
          <button
            onClick={() => navigate("/account")}
            className="
              w-full
              h-12
              rounded-md
              bg-[#6C25FF]
              text-white
              font-medium
            "
          >
            Create Account
          </button>
        </div>

      </div>
    </MobileContainer>
  );
};

export default Register;