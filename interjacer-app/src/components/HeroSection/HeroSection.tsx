import Divider from "../Divider/Divider";
import { HeroDescription } from "./HeroDescription";
import HeroGrid from "./HeroGrid";

import grid1 from "src/assets/grid-1.jpg";
import grid2 from "src/assets/grid-2.jpg";
import grid3 from "src/assets/grid-3.jpg";

// const items = [
//   {
//     image: grid1,
//     title: "O FIRMIE",
//     text: `Firma AROM.sa to firma rodzinna, która powstała w roku 1971 w Murcii w Hiszpanii.
//         Specjalizuje się w produkcji i wprowadzaniu do sprzedaży produktów do higieny osobistej,
//         kosmetyków dla dzieci i dorosłych oraz szerokiej gamy chemii gospodarczej i odświeżaczy
//         powietrza.Obecnie firma prowadzi sprzedaż swoich towarów do ponad 120 krajów na świecie
//         na wszystkich kontynentach.`,
//   },
//   {
//     image: grid2,
//     title: "OFERTA",
//     text: (
//       <span>
//         Firma INTERJACER s.c. zajmuje się importem i dystrybucją towarów
//         hiszpańskiej firmy AROM.sa , która jest między innymi:
//         <br />
//         – producentem środków czystości pod marką ARRIXACA
//         <br />
//         – kosmetyków do pielęgnacji ciała pod marką S’NONAS
//         <br />
//         – artykułów do pielęgnacji dla dzieci pod marką TROMPY
//         <br />– innych marek np. La Abulea, Copa de Plata, NUKY , itp.
//       </span>
//     ),
//   },
//   {
//     image: grid3,
//     title: "ZAPRASZAMY DO WSPÓŁPRACY",
//     text: (
//       <span>
//         -hurtownie i sklepy z branży chemiczno-kosmetycznej
//         <br />
//         -hurtownie i salony fryzjersko-kosmetyczne
//         <br />
//         -firmy sprzątające
//         <br />
//         -spółdzielnie i wspólnoty mieszkaniowe
//         <br />
//         -biura i instytucje publiczne
//         <br />
//         -firmy i zakłady pracy
//       </span>
//     ),
//   },
// ];
const items = [
  {
    image: grid1,
    title: "O FIRMIE",
    text: `Firma AROM.sa to rodzinna firma, która została założona w 1971 roku w Murcii, w Hiszpanii.
          Specjalizuje się w produkcji i dystrybucji produktów higienicznych, kosmetyków dla dzieci i dorosłych,
          a także oferuje szeroką gamę chemii gospodarczej i odświeżaczy powietrza. Obecnie firma prowadzi sprzedaż
          swoich produktów do ponad 120 krajów na całym świecie.`,
  },
  {
    image: grid2,
    title: "OFERTA",
    text: (
      <span>
        Firma INTERJACER s.c. zajmuje się importem i dystrybucją towarów
        hiszpańskiej firmy AROM.sa, która jest między innymi:
        <ul className="list-disc list-inside">
          <li>producentem środków czystości pod marką ARRIXACA,</li>
          <li>
            producentem kosmetyków do pielęgnacji ciała pod marką S’NONAS,
          </li>
          <li>
            dostawcą artykułów do pielęgnacji dla dzieci pod marką TROMPY,
          </li>
          <li>oraz oferuje inne marki, np. La Abuela, Copa de Plata, NUKY.</li>
        </ul>
      </span>
    ),
  },
  {
    image: grid3,
    title: "ZAPRASZAMY DO WSPÓŁPRACY",
    text: (
      <ul className="list-disc list-inside">
        <li>Hurtownie i sklepy z branży chemiczno-kosmetycznej,</li>
        <li>Hurtownie i salony fryzjersko-kosmetyczne,</li>
        <li>Firmy sprzątające,</li>
        <li>Spółdzielnie i wspólnoty mieszkaniowe,</li>
        <li>Biura i instytucje publiczne,</li>
        <li>Firmy i zakłady pracy.</li>
      </ul>
    ),
  },
];

export const HeroSection = () => {
  return (
    <>
      <HeroDescription />

      <div className="w-1/2 mx-auto mt-2">
        <Divider />
      </div>

      <div className="w-1/2 mx-auto mt-6">
        <HeroGrid items={items} />
      </div>
    </>
  );
};
