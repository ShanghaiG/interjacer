import logoInterJacerWithText from "src/assets/logo-interjacer-text.png";
interface FooterAboutProps {
  className?: string;
}

export const FooterAbout = ({ className }: FooterAboutProps) => {
  return (
    <div className={className}>
      <img src={logoInterJacerWithText} className="h-[50px]" />
      <div className="text-neutral-400 text-xs text-justify mt-5">
        Firma INTERJACER s.c. jest wyłącznym i bezpośrednim importerem z
        Hiszpanii wysokiej jakości towarów firmy AROM.sa, oraz zajmuje się ich
        wyłączną dystrybucją na terenie całego kraju.
      </div>
    </div>
  );
};
