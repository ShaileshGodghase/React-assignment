import { Table } from "../components/Table";
import { useAppSelector } from "../../store/hooks";
import { Unauthorised } from "../components/Unauthorised";

export const View = () => {
  const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);

  if (!isLoggedIn) {
    return <Unauthorised />;
  }
  return (
    <>
      <section className="bg-gray-900 h-screen flex justify-center items-start py-10 text-white">
        <div>
          <h3 className="text-2xl font-bold leading-none sm:text-5xl">
            List of Users
            <Table />
          </h3>
        </div>
      </section>
    </>
  );
};
