import threeway from "../../assets/threeway.png";
import devdungeon from "../../assets/devdungeon.png";
import hack2skill from "../../assets/hack2skill.png";
import snapper from "../../assets/snapper.png";
const Partners = () => {
  const sponsorsData = [
    {
      type: "Silver Sponsor",
      name: "Snapper Future Tech",
      img: snapper,
    },
    {
      type: "Growth Partner",
      name: "Three Way Studio",
      img: threeway,
    },
    {
      type: "Platform Partner",
      name: "Hack 2 Skill",
      img: hack2skill,
    },
  ];
  return (
    <div id="sponsor" className="bg-[rgba(26,21,5,0.6)] relative py-10 md:px-24 sm:px-8 px-4  w-[100%] min-h-[60vh]">
      <h1 className="text-center mb-8 font-[Varela] text-[#ee2a7b] font-bold text-5xl">
        Our Sponsors
      </h1>
      <div>
        {sponsorsData.map((sponsors) => {
          return (
            <div className="my-6 flex flex-col items-center">
              <h1 className="text-yellow-600 md:w-[450px] w-[100%] text-center bg-[rgba(255,255,255,0.1)] font-semibold font-[Urbanist] text-2xl px-6 py-2 rounded-md">
                {sponsors.type}
              </h1>
              <img
                className="md:max-w-[300px] max-w-[250px] mt-4"
                src={sponsors.img}
                alt=""
              />
            </div>
          );
        })}
      </div>

      <h1 className="text-center mb-8 mt-8 font-[Varela] text-[#ee2a7b] font-bold text-5xl">
        Coorganizers
      </h1>
      <div className="my-6 flex flex-col items-center">
        <img
          className="md:max-w-[300px] max-w-[250px] mt-4"
          src={devdungeon}
          alt=""
        />
      </div>
    </div>
  );
};
export default Partners;
