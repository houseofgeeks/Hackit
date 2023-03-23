const Sponsor = () => {
  return (
    <div className="bg-[rgba(26,21,5,0.6)] relative py-10 md:px-0 sm:px-8 px-4  w-[100%] min-h-[60vh]">
      <h1 className="text-center mb-8 font-[Varela] text-[#ee2a7b] font-bold text-5xl">
        Why Sponsor Us ?
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="md:w-[500px] w-[100%] p-10 rounded-lg bg-[rgb(255,255,255,0.1)]">
          <p className="text-slate-200">
            Our sponsors from the past iterations have enjoyed a distinctive,
            and marketable appearance along with a significant media presence.
            You will be marketed in a variety of ways, such as on posters,
            hoardings, websites, etc. As our hackathon will be conducted
            offline, students will be exposed to your quality products, which
            will lead to your growth
          </p>
          <a href="https://drive.google.com/file/d/1bIgd-44hUsIx-lAFCGUwV2LLqvPOH24e/view?usp=share_link" target='_blank'>
            <button className="fold-btn mt-4 font-[Varela]">
              <b>View Brouchure</b>
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1GfMO4tU1mux7ZIWFsnOUDX1a0EIkJbNZ/view?usp=share_link"
            target="_blank"
          >
            <button className="fold-btn mt-4 ml-8 font-[Varela]">
              <b>Code of Conduct</b>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sponsor;
