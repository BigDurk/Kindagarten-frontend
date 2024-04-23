import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { childLog} from "../../Redux/Actions/UserAction";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";

const ChildLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/childprofile";

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(childLog(email, password));
  };
  console.log("email", email, "pass", password);

  const childLogin = useSelector((state) => state.childLogin);
  const { childInfo, loading, error } = childLogin;
  console.log(error);
  React.useEffect(() => {
    if (childInfo) {
      navigate(redirect);
    }
  }, [navigate, childInfo, redirect]);
  return (
    <>
      <div className="login-wrapper py-5">
        <div className="container">
          <div className="row gx-5 justify-content-center align-items-center">
            <div className="col-md-6 col-12 d-md-block d-none ">
              <img src="/images/log.png" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 mt-3">
              <div className="login-container">
                <div className="login-card">
                  <div className="header-logo m-auto">
                    <img
                      src="https://kindergarten.thimpress.com/demo-3/wp-content/uploads/sites/6/2019/02/logo-03.png"
                      className="img-fluid log"
                    />
                  </div>
                  {loading && <Loading />}
                  {error && <Error variant="danger">{error}</Error>}
                  <h2 className="text-center">Child Login</h2>
                  <form onSubmit={(e) => handleLogin(e)}>
                    <div className="login-input">
                      <div>
                        <label className="mb-2">Enter email</label>
                        <input
                          type="email"
                          value={email}
                          // required={true}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mt-4 mb-4">
                        <label className="mb-2">Enter password</label>
                        <input
                          type="password"
                          value={password}
                          // required={true}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <button className="login-btn mb-4" disabled={loading}>
                      Sign In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildLogin;
