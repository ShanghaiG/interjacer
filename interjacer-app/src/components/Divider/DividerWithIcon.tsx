import logoInterJacer from "src/assets/logo-interJacer.png";

export const DividerWithIcon = () => {
  return (
    <div className="flex items-center my-3">
      <div className={`flex-grow bg-lime-400`} style={{ height: "1px" }}></div>{" "}
      <div className="mx-4">
        <img
          src={logoInterJacer}
          alt="interjacer-logo-icon"
          className="w-6 h-6"
        />
      </div>{" "}
      <div className={`flex-grow bg-lime-400`} style={{ height: "1px" }}></div>{" "}
    </div>
  );
};

export default DividerWithIcon;
