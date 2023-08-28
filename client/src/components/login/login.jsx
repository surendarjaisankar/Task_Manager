import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { envi } from "../../environment";
import Navbar from "../Navbar";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Navbar/>
        <div className="row m-0 mt-5 align-items-center justify-content-center">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-body m-0">
                <div className="h5 text-center">Login</div>
                <form
                  onSubmit={handleSubmit(async (data) => {
                    try {
                      console.log(data);
                      // eslint-disable-next-line no-unused-vars
                      const res = await axios.post(
                        `${envi.api_url}users/login`,
                        data
                      );
                      toast.success("Login successfully");
                      navigate("/home");
                    } catch (error) {
                      toast.error(error.response.data.msg, {});
                    }
                  })}
                >
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <label htmlFor="username" className="form-label">
                        Email
                      </label>
                      <input
                        {...register("email", { required: "This is required" })}
                        type="email"
                        maxLength={35}
                        className="form-control"
                        placeholder="Email"
                        id="username"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <label htmlFor="password" className="form-label mt-4">
                        Password
                      </label>
                      <input
                        {...register("password", {
                          required: "This is required",
                        })}
                        type="password"
                        maxLength={50}
                        className="form-control"
                        placeholder="Password"
                        id="password"
                      />
                    </div>
                    <button className="btn btn-primary mt-3" type="submit">
                      Submit
                    </button>
                  
                      <Link className="nav-link col-md-12 col-sm-12 col-12 mt-3" to={"/register"}>Don&apos;t have an account? Register here</Link>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
