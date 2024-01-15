import { Link, NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { ChangeMode } from "../Redux/Features/Features";
import { setUserData } from "../Redux/Features/Features";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mode = useSelector((state) => state.Features.mode);
  const userData = useSelector((state) => state.Features.userData);
  const numItemsInCart = useSelector((state) => state.CartState.numItemsInCart);

  const handleMode = () => {
    dispatch(ChangeMode());
  };

  const handleLogOut = () => {
    dispatch(setUserData(null));
    toast.success("Successfully Logged Out");
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <div>
      <div className=" bg-neutral text-neutral-content">
        {!userData && (
          <div className="max-w-6xl px-5 py-2 mx-auto flex gap-5 justify-end top">
            <Link to={"/login"} className="link link-hover text-xc sm:text-sm">
              Sign in / Guest
            </Link>
            <Link
              to={"/register"}
              className="link link-hover text-xc sm:text-sm"
            >
              Create Account
            </Link>
          </div>
        )}
        {userData && (
          <div className="max-w-6xl px-5 py-2 mx-auto flex gap-5 justify-end top">
            <h1 className="text-[white]">Hello {userData.userName}</h1>
            <button
              onClick={handleLogOut}
              className="text-[#057AFF] border rounded-2xl px-2"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
      <div className="border-gray-300">
        <div className="max-w-6xl px-5 py-3 mx-auto flex justify-between">
          <Link className="btn btn-primary text-3xl iteems-center  logo">
            C
          </Link>
          {userData && (
            <div className="flex items-center gap-10 nav">
              <NavLink to={"/"} className="p-2 rounded-md" >
                Home
              </NavLink>
              <NavLink to={"/about"} className="p-2 rounded-md" >
                About
              </NavLink>
              <NavLink to={"/products"}  className="p-2 rounded-md">
                Products
              </NavLink>
             
              <NavLink to={"/checkout"} className="p-2 rounded-md" >
                Checkout
              </NavLink>
             
            </div>
          )}
          <div className="flex items-center ">
            <button onClick={handleMode}>
              {mode == "dark" ? (
                <svg
                  className="swap-on fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              ) : (
                <FaMoon style={{ fontSize: "23px" }} />
              )}
            </button>
            <Link className="btn btn-ghost btn-circle btn-md ml-4" to="/checkout">
              <div className="indicator">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
                <span className="badge badge-sm badge-primary indicator-item">
                  {numItemsInCart}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
