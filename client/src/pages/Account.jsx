import MobileContainer from "../components/MobileContainer";
import { Camera } from "lucide-react";

const Account = () => {
  return (
    <MobileContainer>
      <div className="bg-[#F7F8F9] min-h-screen">

        {/* Header */}
        <div className="bg-white px-6 py-5 shadow-sm">
          <h2 className="text-lg font-medium text-[#1D2226]">
            Account Settings
          </h2>
        </div>

        {/* Profile Section */}
        <div className="px-6 py-6">

          <div className="flex gap-4 items-start">

            <div className="relative">

              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
              />

              <div
                className="
                absolute
                bottom-0
                right-0
                w-6
                h-6
                rounded-full
                bg-[#6C25FF]
                flex
                items-center
                justify-center
                text-white
              "
              >
                <Camera size={12} />
              </div>

            </div>

            <div>
              <h3 className="font-semibold text-[#1D2226]">
                Marry Doe
              </h3>

              <p className="text-sm text-[#1D2226]">
                marrydoe@gmail.com
              </p>
            </div>

          </div>

          <p className="mt-6 text-sm leading-6 text-[#1D2226]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
          </p>

        </div>

        {/* Dashed Separator */}
        <div className="border-b border-dashed border-gray-300"></div>

      </div>
    </MobileContainer>
  );
};

export default Account;