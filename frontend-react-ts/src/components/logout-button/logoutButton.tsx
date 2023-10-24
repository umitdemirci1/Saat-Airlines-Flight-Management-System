import { Link } from "react-router-dom";

const Button = ({ children }: any) => {
  enum buttonType {
    logout,
  }

  return (
    <Link to="/login">
      <button className="px-4 py-2 bg-stone-900 text-xs rounded-sm text-white w-[116px] text-center">
        {children}
      </button>
    </Link>
  );
};

export default Button;
