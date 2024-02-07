import footerBackground from "src/assets/footer-background.png";
import { Button } from "src/components/Button";
import { ButtonColor } from "src/enums";

export const FooterContact = () => {
  return (
    <div
      className={`w-full py-5 bg-repeat bg-fixed`}
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="flex lg:flex-row flex-col h-full justify-center items-center text-lg text-white text-center">
        ZAPRASZAMY DO WSPÓŁPRACY, ZADZWOŃ DO NAS
        <span className="font-bold text-nowrap">
          &nbsp;(+48) 883 288 477&nbsp;
        </span>
        LUB
        <Button
          text="ZADAJ PYTANIE"
          className="hover:text-lime-600 m-2"
          color={ButtonColor.TRANSPARENT_TO_WHITE}
          to={"/#"}
        />
      </div>
    </div>
  );
};
