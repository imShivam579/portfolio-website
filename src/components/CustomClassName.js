const wrapper = `wrapper mx-auto my-0 w-[90%] max-w-[1280px] relative`;
const navbar =
  "navbar fixed md:absolute left-0 top-0 right-0 z-10 h-[var(--nav-height)]";
const navbar_wrapper = `h-full py-6 xl:py-8 flex items-center justify-between mx-auto`;
const navbar_brandLogo = "text-gray-100 hover:text-gray-200";
const navbar_mainMenu = "main-menu md:flex hidden";
const navbar_mobileMenu = "mobile-menu flex md:hidden bg-black z-50 ";
const navbar_mobileMenuUL =
  "h-full w-full flex flex-col justify-center items-center";
const navbar_menuBG =
  "h-screen left-0 right-0 opacity-0 fixed top-0 hidden w-full z-10";
const navbar_menuItems =
  "menu-items absolute top-0 left-0 h-screen w-full bg-primary-100";
export {
  wrapper,
  navbar,
  navbar_wrapper,
  navbar_brandLogo,
  navbar_mainMenu,
  navbar_mobileMenu,
  navbar_menuBG,
  navbar_menuItems,
  navbar_mobileMenuUL,
};
