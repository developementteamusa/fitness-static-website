// When you create an new 'tsx' file, type 'tsrafce' for its boilerplate from VS Code ES7+ ReactJs snippets extension.
import { useState } from "react";
// Let's import the menu icon and closing icon from heroicons : https://heroicons.com/
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  // Let's set the 'isMenuToggled' as 'false' as its default state :
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  //  Let's check if we are above a particular screen size :
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
//   When we are the top of the page 'the background will be empty' otherwise we will have a shadow color.
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
        <div
            className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    <img alt="logo" src={Logo} />

                    {/* RIGHT SIDE */}
                    {/* if we are above a particular screen size please shown the particular code */}
                    {isAboveMediumScreens ? (
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                    </div>
                    ) : (
                        <button
                            className="rounded-full bg-secondary-500 p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                    )}
                </div>
            </div>
        </div>

        {/* This represent 'Mobile Display' when Menu toggled is flipped : MOBILE MENU MODAL */}

        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                    </button>
                </div>

                {/* MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                </div>
            </div>
        )}
    </nav>
  );
};

export default Navbar;