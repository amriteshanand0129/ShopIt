import { useLogin } from "../../context/login-context";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { loginDispatch, email, password } = useLogin();
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const data = await userLogin(email, password);
    loginDispatch({
      type: "TOKEN",
      payload: {
        token: data,
      },
    });
    console.log(data);
    if (data?.access_token) {
      navigate("/");
    }
  };

  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };

  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };

  const borderStyle = {
    border: "1px solid grey",
  };

  return (
    // <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[400px] p-10">
    //   <h2 className="flex justify-center text-2xl">Login</h2>
    //   <div className="flex flex-col gap-2">
    //     <span>Email *</span>
    //     <input className="border-b-2" onChange={onEmailChange} required type="email" placeholder="Email" />
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <span>Password *</span>
    //     <input className="border-b-2" onChange={onPasswordChange} required type="password" placeholder="Password" />
    //   </div>
    //   <div className="mx-4">
    //   <button  className="button btn-primary btn-icon cart-btn d-flex text-xl align-center justify-center gap cursor btn-margin">Login</button>
    //   </div>
    // </form>
    <div className="login-outer">
      <div class="center-align-button">
        <div class="btn-group">
          <button class="btn btn-outline-dark active" id="signInBtn" onclick="displaySignIn()">
            Sign In
          </button>
          <button class="btn btn-outline-dark" id="signUpBtn" onclick="displaySignUp()">
            Sign Up
          </button>
        </div>
      </div>
      <div id="login">
        <form id="loginForm" action="/login_user" method="post">
          <div className="mb-3">
            <label for="userId">Username</label><br />
            <input type="text" id="userId" name="userId" className="form-control" style={borderStyle} />
          </div>
          <div className="mb-3">
            <label for="password">Password</label><br />
            <input type="password" id="password" name="password" className="form-control" style={borderStyle} />
          </div>
          <div className="center-align-button mt-4">
            <button type="submit" className="btn btn-dark" id="signinSubmit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
