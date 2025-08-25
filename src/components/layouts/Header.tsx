import { siteConfig } from "../../config/site";
import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";
import { ModeToggle } from "../mode-toogle";
function Header() {
  return (
    <header className="w-full border-b fixed top-0 z-50 bg-background">
      <nav className="container flex items-center h-16 mx-auto">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="flex flex-1 item-center justify-end space-x-4 lg:mr-0 mr-8">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
