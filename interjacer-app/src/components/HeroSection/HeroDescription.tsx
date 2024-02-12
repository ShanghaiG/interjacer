import DividerWithIcon from "../Divider/DividerWithIcon";

const HeroTitle = () => {
  return (
    <>
      <div className="text-center font-medium text-3xl mt-8 text-slate-600 font-exo-medium">
        <p>INTERJACER S.C. – DLA CIEBIE, DLA RODZINY, DLA BIZNESU</p>
      </div>
    </>
  );
};

const HeroSubtitle = () => {
  return (
    <>
      <div className="text-center text-lg text-slate-600 font-exo-regular">
        <p>
          Bardzo dziękujemy za zainteresowanie naszą ofertą. Jesteśmy
          przekonani, że produkty firmy INTERJACER s.c.,
          <br />
          na stałe zagoszczą w sprzedawanym przez Państwa asortymencie.
        </p>
      </div>
    </>
    //Potrzebne tutaj zrobienie czytaj więcej buttona
  );
};

export const HeroDescription = () => {
  return (
    <div className="mb-8">
      <HeroTitle />

      <div className="w-1/2 mx-auto">
        <DividerWithIcon />
      </div>

      <HeroSubtitle />
    </div>
  );
};
