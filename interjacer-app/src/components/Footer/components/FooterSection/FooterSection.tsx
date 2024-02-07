interface FooterSectionProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export const FooterSection = ({
  title,
  children,
  className,
}: FooterSectionProps) => {
  return (
    <section className={className}>
      {title && <div className="text-white font-semibold text-sm">{title}</div>}
      <div className="w-full border-b-2 border-neutral-500 my-3"></div>
      <div>{children}</div>
    </section>
  );
};
