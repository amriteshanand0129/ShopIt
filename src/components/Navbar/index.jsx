import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="flex bg-lime-400	p-4 text-stone-800 ">
      <div>
        <h1 onClick={() => navigate('/')} className="text-2xl hover: cursor-pointer">Shop It</h1>
      </div>
      <nav className="ml-auto flex gap-10">
        <span className="material-symbols-outlined text-3xl hover: cursor-pointer">favorite</span> 
        <span onClick={() => navigate("/cart")} className="material-symbols-outlined text-3xl hover: cursor-pointer">shopping_cart</span>
        <span className="material-symbols-outlined text-3xl hover: cursor-pointer">account_circle</span>
      </nav>
    </header>
  );
};
