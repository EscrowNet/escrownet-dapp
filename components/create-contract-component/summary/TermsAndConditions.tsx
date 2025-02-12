export default function TermsAndConditions() {
  return (
    <div className="font-semibold w-full text-base xl:text-lg leading-[30px] text-black">
      <h3>Terms & Conditions </h3>
      <div className="gap-2 flex flex-col w-full">
        <span className="inline-block font-normal text-sm xl:text-base leading-[30px]">
          The funds for each milestone will be released based on the agreed
          conditions outlined above.
        </span>
        <span className="inline-block font-normal text-sm xl:text-base leading-[30px]">
          Any disputes regarding milestones will be resolved as per the
          platform's arbitration rules.
        </span>
        <span className="inline-block font-normal text-sm xl:text-base leading-[30px]">
          This contract is binding once both parties sign or approve it
          on-chain.
        </span>
      </div>
    </div>
  );
}
