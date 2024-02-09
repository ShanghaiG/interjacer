import { FooterLinkData } from "src/types";
import { FooterSection } from "../FooterSection/FooterSection";
import { Link } from "react-router-dom";
import { useNavigationContext } from "src/hooks";

interface FooterInfoProps {
  className?: string;
  linkData: FooterLinkData[];
}

export const FooterInfo = ({ className }: FooterInfoProps) => {
  const links = useNavigationContext();

  return (
    <FooterSection title={"WIĘCEJ INFORMACJI"} className={className}>
      <ul className="list-disc ml-5 text-neutral-400 text-sm">
        {links.map((item, index) => (
          <li key={index}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </FooterSection>
  );
};
