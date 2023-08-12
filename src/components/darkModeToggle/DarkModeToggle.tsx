const DarkModeToggle = () => {
  const mode = "light";

  return (
    <div className="relative flex justify-between items-center w-[42px] h-[24px] border-[1.5px] border-primary rounded-[30px] p-[2px] cursor-pointer">
      <div className="text-[12px]">🌙</div>
      <div className="text-[12px]">🌞</div>
      <div
        className="w-[15px] h-[15px] bg-primary rounded-full absolute"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
