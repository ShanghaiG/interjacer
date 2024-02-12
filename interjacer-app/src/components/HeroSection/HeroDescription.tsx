import DividerWithIcon from "../Divider/DividerWithIcon";

const HeroTitle = () => {
  return (
    <>
      <div className="text-center font-medium text-2xl  w-5/6 mx-auto flex justify-center items-center md:text-3xl mt-8 text-slate-600 font-exo-medium">
        <p>INTERJACER S.C. – DLA CIEBIE, DLA RODZINY, DLA BIZNESU</p>
      </div>
    </>
  );
};

const HeroSubtitle = () => {
  return (
    <>
      <div className="text-center  w-5/6 mx-auto flex justify-center items-center text-m md:text-lg text-slate-600 font-exo-regular">
        <p>
          Bardzo dziękujemy za zainteresowanie naszą ofertą. Jesteśmy
          przekonani, że produkty firmy INTERJACER s.c.,
          <br />
          na stałe zagoszczą w sprzedawanym przez Państwa asortymencie.
        </p>
      </div>
    </>
  );
};

export const HeroDescription = () => {
  return (
    <div className="mb-8">
      <HeroTitle />

      <div className="w-4/5 2xl:w-1/2 mx-auto">
        <DividerWithIcon />
      </div>

      <HeroSubtitle />
    </div>
  );
};
