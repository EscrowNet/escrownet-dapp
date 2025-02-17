import DashboardContentContainer from "@/components/DashboardContentContainer";
import Header from "../../../../components/dashboardHeader";

const SignEscrow = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <Header />
      <div className="p-6 w-full h-full">
        <DashboardContentContainer
          title="Contract Details"
          className="w-full mt-[1rem] pb-[3rem]"
        >
          <div className="flex flex-col gap-[0.5rem]">
            <div className="flex items-center gap-[0.5rem]">
              <div className="w-[0.375rem] h-[0.375rem] bg-primaryColor border-2 border-[#1A1F26]"></div>
              <p className="font-sans text-[0.875rem] leading-[1.875rem] font-[400] text-black">
                Escrow Type: Goods and Services Total
              </p>
            </div>
            <div className="flex items-center gap-[0.5rem]">
              <div className="w-[0.375rem] h-[0.375rem] bg-primaryColor border-2 border-[#1A1F26]"></div>
              <p className="font-sans text-[0.875rem] leading-[1.875rem] font-[400] text-black">
                Escrow Amount: $10,000
              </p>
            </div>
            <div className="flex items-center gap-[0.5rem]">
              <div className="w-[0.375rem] h-[0.375rem] bg-primaryColor border-2 border-[#1A1F26]"></div>
              <p className="font-sans text-[0.875rem] leading-[1.875rem] font-[400] text-black">
                Parties Involved: 0x74949...794, Seller 0x84839...854
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem] mt-[1rem]">
            <h2 className="text-black font-sans font-[600] text-[1rem] leading-[1.5625rem]">
              Milestone Section
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-[#E5E5E5]">
                    <th className="px-4 py-2 border border-gray-300 text-left text-[0.92894rem] font-medium text-black font-sans leading-[0.84819rem]">
                      Milestone Name
                    </th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-[0.92894rem] font-medium text-black font-sans leading-[0.84819rem]">
                      Condition
                    </th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-[0.92894rem] font-medium text-black font-sans leading-[0.84819rem]">
                      Percentage
                    </th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-[0.92894rem] font-medium text-black font-sans leading-[0.84819rem]">
                      Amount ($)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      1. Initial Payment
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      Payment held in escrow
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      25%
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      2500
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      2. Goods Delivery
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      Delivery confirmation
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      25%
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      2500
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      3. Receipt Confirmation
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      Buyer approves receipt
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      25%
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      2500
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      4. Final Approval
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      Seller delivers all goods
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      25%
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-[0.77413rem] font-inter text-black">
                      2500
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem] mt-[1rem]">
            <h2 className="text-black font-sans font-[600] text-[1rem] leading-[1.5625rem]">
              Terms & Conditions
            </h2>
            <p className="w-[65%] text-black font-sans font-[400] text-[0.875rem] leading-[1.5625rem]">
              The funds for each milestone will be released based on the agreed
              conditions outlined above. Any disputes regarding milestones will
              be resolved as per the platform’s arbitration rules. This contract
              is binding once both parties sign or approve it on-chain.
            </p>
          </div>
          <div className="flex items-center justify-center mt-[2rem]">
            <button
              type="button"
              className="bg-primaryColor font-sans text-[0.875rem] leading-[1.5625rem] text-white h-[2.625rem] w-[17.25rem] rounded-[0.25rem]"
            >
              Sign Escrow contract
            </button>
          </div>
        </DashboardContentContainer>
      </div>
    </div>
  );
};
export default SignEscrow;
