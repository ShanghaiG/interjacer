import { FooterSection } from "../FooterSection/FooterSection";
import { FooterQuickContactData } from "src/types";

interface FooterQuickContactProps {
  className?: string;
  contactsData: FooterQuickContactData[];
}

export const FooterQuickContact = ({
  className,
  contactsData,
}: FooterQuickContactProps) => {
  return (
    <FooterSection title={"SZYBKI KONTAKT"} className={className}>
      <ul>
        {contactsData.map((item, index) => (
          <li key={index} className="flex flex-row items-center gap-3 mt-3">
            <div className="text-lime-500">{item.icon}</div>
            <div className="text-sm text-neutral-400">{item.text}</div>
          </li>
        ))}
      </ul>
    </FooterSection>
  );
};
