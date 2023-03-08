const TeamRegister = () => {
  return (
    <div className="text-slate-300">
      <h1 className="text-3xl font-bold text-slate-100">Team Registration</h1>
      <div className="flex flex-col mt-4">
        <label htmlFor="" className="text-xl">Create a Team</label>
        <div>
          <input
            type="text"
            placeholder="Create your team"
            className="border outline-none px-3 py-2 rounded-lg focus:border-red-500 my-2 w-[300px]"
          />
          <button className="bg-red-500 ml-4 my-4 py-2 px-8 rounded-lg text-white font-semibold cursor-pointer text-lg hover:bg-red-600">
            Create
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="" className="text-xl">Join a Team</label>
        <div>
          <input
            type="text"
            placeholder="Enter the code to join the team"
            className="border outline-none px-3 py-2 rounded-lg focus:border-red-500 my-2 w-[300px]"
          />
          <button className="bg-red-500 ml-4 my-4 py-2 px-8 rounded-lg text-white font-semibold cursor-pointer text-lg hover:bg-red-600">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};
export default TeamRegister;
