export default function MilestoneSection() {
  return (
    <section className="gap-2 flex flex-col w-full h-fittext-black">
      <h3 className="font-semibold text-base leading-[25px]">
        Milestone Section
      </h3>
      <table>
        <thead>
          <tr className="bg-[#E5E5E5] text-left">
            <th
              scope="col"
              className="border-[#828282] border-[0.68px] p-2 font-normal text-xs xl:text-sm leading-[10.96px]"
            >
              Milestone Name
            </th>
            <th
              scope="col"
              className="border-[#828282] border-[0.68px] p-2 font-normal text-xs xl:text-sm leading-[10.96px]"
            >
              Condition
            </th>
            <th
              scope="col"
              className="border-[#828282] border-[0.68px] p-2 font-normal text-xs xl:text-sm leading-[10.96px]"
            >
              Percentage
            </th>
            <th
              scope="col"
              className="border-[#828282] border-[0.68px] p-2 font-normal text-xs xl:text-sm leading-[10.96px]"
            >
              Amount ($)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              1. initial Deposit
            </td>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              -Payment held in escrow
            </td>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              -25%
            </td>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              -2500
            </td>
          </tr>
          <tr>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              2. Goods Delivered
            </td>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              -Delivery confirmation
            </td>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              -25%
            </td>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              -2500
            </td>
          </tr>
          <tr>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              3. Receipt Confirmation
            </td>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              -Buyer approves receipt
            </td>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              -25%
            </td>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              -2500
            </td>
          </tr>
          <tr>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              4. Final Approval
            </td>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              -Seller delivers all goods
            </td>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              -25%
            </td>
            <td className="border-[#828282] border-[0.68px] p-2 font-normal text-[10px] xl:text-sm leading-[10.96px]">
              -2500
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
