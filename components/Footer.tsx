import Logo from "../public/svg/Logo";

const Footer = () => {
  return (
    <footer className="bg-primaryColor  text-white py-4 md:py-6 px-6 md:px-[120px] md:pb-[40px] fixed bottom-0 left-0 w-full flex justify-between items-center text-sm md:text-base leading-5">
      <div className="mb-4 md:mb-0">
        <Logo />
      </div>

      <span className="mb-1 md:mb-0">Beta Version</span>
    </footer>
  );
};

export default Footer;
