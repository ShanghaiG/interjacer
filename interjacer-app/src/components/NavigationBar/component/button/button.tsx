import { twMerge } from "tailwind-merge";

interface NavbarButtonProps {
  text: string;
  className?: string;
}

export const NavbarButton = ({ text, className }: NavbarButtonProps) => {
  return (
    <div
      className={twMerge(
        "flex items-center duration-300 cursor-pointer ",
        "hover:text-white text-slate-500 hover:bg-lime-500 bg-white",
        "h-full px-3 font-medium text-lg",
        className
      )}
    >
      {text}
    </div>
  );
};
