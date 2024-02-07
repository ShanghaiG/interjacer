import { FooterLinkData } from "src/types";
import { FooterSection } from "../FooterSection/FooterSection";
import { Link } from "react-router-dom";

interface FooterInfoProps {
  className?: string;
  linkData: FooterLinkData[];
}

export const FooterInfo = ({ className, linkData }: FooterInfoProps) => {
  return (
    <FooterSection title={"WIĘCEJ INFORMACJI"} className={className}>
      <ul className="list-disc ml-5 text-neutral-400 text-sm">
        {linkData.map((item, index) => (
          <li key={index}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </FooterSection>
  );
};
