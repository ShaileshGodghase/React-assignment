import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Unauthorised } from "../components/Unauthorised";
import { add } from "../../store/userSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export interface IUserInput {
  firstName: string;
  lastName: string;
  email: string;
}

export const Add = () => {
  const [userInput, setUserInput] = useState<IUserInput>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = uuid().slice(0, 8);
    dispatch(add({ id, ...userInput }));
    setUserInput({
      firstName: "",
      lastName: "",
      email: "",
    });
    navigate("/view");
  };

  if (!isLoggedIn) {
    return <Unauthorised />;
  }
  return (
    <>
      <section className="bg-gray-900 text-white h-screen w-full">
        <form onSubmit={submitHandler} className="w-full mx-auto pt-8 max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                value={userInput.firstName}
                onChange={handleInputChange}
                name="firstName"
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="first-name"
                type="text"
                placeholder="John"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                value={userInput.lastName}
                onChange={handleInputChange}
                name="lastName"
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                value={userInput.email}
                onChange={handleInputChange}
                name="email"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                required
                type="email"
                placeholder="john@gmail.com"
              />
            </div>
          </div>
          <button
            className="block w-full p-3 text-center rounded-sm text-gray-900 font-bold bg-violet-400"
            type="submit"
          >
            Add
          </button>
        </form>
      </section>
    </>
  );
};
