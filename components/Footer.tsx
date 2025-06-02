import Logo from "../public/svg/Logo";

const Footer = () => {
  return (
    <footer className="bg-primaryColor dark:bg-dark-surface text-white dark:text-dark-text-primary py-4 md:py-6 px-6 md:px-[120px] md:pb-[40px] fixed bottom-0 left-0 w-full flex justify-between items-center text-sm md:text-base leading-5 border-t dark:border-dark-border transition-colors duration-300">
      <div className="mb-4 md:mb-0">
        <span className="dark:text-dark-accent">
          <Logo />
        </span>
      </div>

      <span className="mb-1 md:mb-0 text-white/80 dark:text-dark-text-secondary">
        Beta Version
      </span>
    </footer>
  );
};

export default Footer;
