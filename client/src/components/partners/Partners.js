import threeway from "../../assets/threeway.png";
import devdungeon from "../../assets/devdungeon.png";
import hack2skill from "../../assets/hack2skill.png";
import snapper from "../../assets/snapper.png";
import jetBrains from '../../assets/jetBrains.png';
import tezos from '../../assets/tezos.png';
import foundership from '../../assets/foundership.png';
import taskade from '../../assets/taskade.png';
import balsamiq from '../../assets/balsamiq.png';
import cybrance from '../../assets/cybrance.png';
import fueler from '../../assets/fueler.png';
import streamyard from '../../assets/streamyard.png';
import wolfram from '../../assets/wolfram.png';
import desicrypto from '../../assets/desicrypto.png';
import paycoin from '../../assets/paycoin.png';
import quillbot from '../../assets/quillbot.webp';
import thinkAgain from '../../assets/thinkAgain.png';
import xyz from '../../assets/xyz.png';

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
    {
      type: "Academic Partner",
      name: "Hack 2 Skill",
      img: jetBrains,
    },
    {
      type: "Prize Pool Partner",
      name: "Hack 2 Skill",
      img: tezos,
    },
    {
      type: "Community Partner",
      name: "Hack 2 Skill",
      img: [foundership,paycoin],
    },
    {
      type: "Ecosystem Partner",
      name: "Hack 2 Skill",
      img: [taskade, balsamiq, cybrance, fueler, streamyard, wolfram,xyz,thinkAgain],
    },
    {
      type: "Knowledge Partner",
      name: "Hack 2 Skill",
      img: quillbot,
    },
    {
      type: "Outreach Partner",
      name: "Hack 2 Skill",
      img: desicrypto,
    },
  ];
  return (
    <div
      id="sponsor"
      className="bg-[rgba(26,21,5,0.6)] relative py-10 md:px-24 sm:px-8 px-4  w-[100%] min-h-[60vh]"
    >
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
              <a href={sponsors.url} target="_blank">
                <img
                  className="md:max-w-[300px] max-w-[250px] mt-4"
                  src={sponsors.img}
                  alt=""
                /></a>
              {
                (sponsors.type === 'Ecosystem Partner' || sponsors.type === 'Community Partner') && sponsors.img.map((img, i) => <img className='md:max-w-[300px] max-w-[250px]' src={img} />)
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Partners;
