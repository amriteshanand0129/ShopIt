import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/login-context";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isAccountDropDownOpen, setisAccountDropDownOpen] = useState(false);
  const { token, loginDispatch } = useLogin();

  const onLoginClick = () => {
    if (token?.access_token) navigate("/auth/login");
    else {
      loginDispatch({
        type: "LOGOUT",
      });

      navigate("/auth/login");
    }
  };

  return (
    <header className="flex fixed-top bg-zinc-200 border-b-2 pt-4 px-4 pb-2 text-stone-800">
      <div>
        <h1 onClick={() => navigate("/")} className="text-3xl hover: cursor-pointer">
          Shop It
        </h1>
      </div>
      <nav className="ml-auto pr-10 flex gap-10">
        <span className="material-symbols-outlined text-3xl hover: cursor-pointer">favorite</span>
        <span onClick={() => navigate("/cart")} className="material-symbols-outlined text-3xl hover: cursor-pointer">
          shopping_cart
        </span>
        <div className="relative">
          {token?.access_token ? (
            <span onClick={() => setisAccountDropDownOpen(!isAccountDropDownOpen)} className="material-symbols-outlined text-3xl hover: cursor-pointer">
              person
            </span>
          ) : (
            <span onClick={() => setisAccountDropDownOpen(!isAccountDropDownOpen)} className="material-symbols-outlined text-3xl hover: cursor-pointer">
              account_circle
            </span>
          )}
          {isAccountDropDownOpen && (
            <div className="absolute">
              <button onClick={onLoginClick} className="text-xl ">
                {token?.access_token ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
