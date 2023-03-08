import Design from "./Design";
import Navbar from "./Navbar";
import Rules from "./Rules";
import Stars from "./Stars";
import TeamRegister from "./TeamRegister";

const Profile = () => {
  return (
    <div className="w-full h-[100vh] profile relative">
      <Navbar />
      <Stars />
      <Design />
      <div className="flex items-center justify-around w-full h-full">
        <div className="w-[80%] flex justify-between h-[500px] bg-transparent">
          <TeamRegister />
          <Rules />
        </div>
      </div>
    </div>
  );
};
export default Profile;
