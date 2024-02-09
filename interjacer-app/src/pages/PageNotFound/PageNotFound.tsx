import { MdQuestionMark } from "react-icons/md";

export const PageNotFound = () => {
  return (
    <div className="h-full flex justify-center flex-col items-center py-16">
      <MdQuestionMark className="text-[150px] text-slate-300" />
      <div className="text-2xl font-semibold text-slate-500 mt-3">
        Nie odnaleziono takiej strony :(
      </div>
    </div>
  );
};
