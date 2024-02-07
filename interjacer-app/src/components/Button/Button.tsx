import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { ButtonColor } from "src/enums";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  onClick?: () => void;
  to?: string;
  className?: string;
  color?: ButtonColor;
}

export const Button = ({
  text,
  onClick,
  to,
  className,
  color = ButtonColor.WHITE_TO_GREEN,
  ...buttonProps
}: ButtonProps) => {
  const renderButton = () => {
    return (
      <button
        className={twMerge(
          "border-2 p-1 duration-150",
          color,
          to ? "" : className
        )}
        onClick={onClick}
        {...buttonProps}
      >
        &nbsp;{text}&nbsp;
      </button>
    );
  };

  return (
    <>
      {to ? (
        <Link className={className} to={to}>
          {renderButton()}
        </Link>
      ) : (
        renderButton()
      )}
    </>
  );
};
