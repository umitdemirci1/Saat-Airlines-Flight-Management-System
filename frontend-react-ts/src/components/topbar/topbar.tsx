import LogoutButton from "../logout-button/logoutButton";

const Topbar = () => {
  return (
    <div className="bg-activeNavbar py-1 px-4 text-white flex justify-between items-center w-full">
      Dashboard
      <LogoutButton>logout</LogoutButton>
    </div>
  );
};

export default Topbar;
