import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../../store/appSlice";

interface IUserInput {
  username: string;
  password: string;
}
export const SignIn = () => {
  const [userInput, setUserInput] = useState<IUserInput>({
    username: "",
    password: "",
  });

  const USERNAME = useAppSelector((state) => state.app.username);
  const PASSWORD = useAppSelector((state) => state.app.password);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userInput.username, userInput.password);
    if (userInput.username === USERNAME && userInput.password === PASSWORD) {
      dispatch(login());
      navigate("/view");
    } else {
      alert("Wrong username or password");
    }
  };

  const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);
  if (isLoggedIn) {
    return (
      <>
        <div className="w-[50%] mx-auto">
          <h1 className="text-xl font-bold my-3">Already Logged In</h1>
          <button
            className="block w-full p-3 text-center rounded-sm text-gray-900 font-bold bg-violet-400"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <section className="w-[80%] mx-auto pt-4 ">
        <div className="mx-auto w-[50%] p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
          <h1 className="text-2xl font-bold text-center">Sign In</h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-gray-400">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={userInput.username}
                onChange={handleInputChange}
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 border-2 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-gray-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={userInput.password}
                onChange={handleInputChange}
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
            </div>
            <button
              className="block w-full p-3 text-center rounded-sm text-gray-900 font-bold bg-violet-400"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
