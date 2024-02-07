import { FooterSection } from "./components/FooterSection/FooterSection";
import { FooterContact } from "./components/FooterContact/FooterContact";
import { FooterAbout } from "./components/FooterAbout/FooterAbout";
import { FooterInfo } from "./components/FooterInfo/FooterInfo";
import { FooterQuickContact } from "./components/FooterQuickContact/FooterQuickContact";
import { FaPhone } from "react-icons/fa6";
import { RiMailSendLine } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
export const Footer = () => {
  return (
    <div className="">
      <FooterContact />
      <div className="bg-gradient-to-b from-neutral-600 to-neutral-700 p-10 pb-2 flex justify-center">
        <div className="max-w-7xl w-screen">
          <div className="grid grid-cols-3 gap-5">
            <FooterAbout className="col-span-3 md:col-span-1" />
            <FooterInfo
              className="col-span-3 md:col-span-1"
              linkData={[
                { name: "Home", to: "" },
                { name: "O firmie", to: "" },
                { name: "Produkty", to: "" },
                { name: "Współpraca", to: "" },
                { name: "Dostawa", to: "" },
                { name: "Kontakt", to: "" },
              ]}
            />
            <FooterQuickContact
              className="col-span-3 md:col-span-1"
              contactsData={[
                {
                  icon: <FaPhone />,
                  text: "(+48) 883 288 477 lub (+48) 512 836 018",
                },
                { icon: <RiMailSendLine />, text: "Interjacer@Interjacer.pl" },
                {
                  icon: <MdLocationPin />,
                  text: "96-300 Żyrardów Ul. Żeromskiego 38a",
                },
              ]}
            />
          </div>
          <FooterSection className="mt-10">
            <div className="flex justify-between text-neutral-400 text-sm">
              <div>Info #1</div>
              <div>Info #2</div>
            </div>
          </FooterSection>
        </div>
      </div>
    </div>
  );
};
