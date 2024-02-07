export const ButtonColor = {
  TRANSPARENT_TO_WHITE:
    "bg-transparent hover:bg-white text-white hover:text-black border-white",
  WHITE_TO_GREEN:
    "bg-white border-lime-500 text-black hover:bg-lime-500 hover:text-white",
} as const;

export type ButtonColor = (typeof ButtonColor)[keyof typeof ButtonColor];
