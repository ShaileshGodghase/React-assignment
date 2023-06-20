import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

export const Table = () => {
  const User = useAppSelector((state) => state.user);

  return (
    <section>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <colgroup>
              <col className="w-5" />
              <col className="w-5" />
              <col className="w-5" />
              <col className="w-5" />
            </colgroup>
            <thead>
              <tr className="dark:bg-gray-700">
                <th className="p-3">No.</th>
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            {User.map((user, index) => {
              return (
                <tbody
                  key={user.id}
                  className="border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <tr>
                    <td className="px-3 text-2xl font-medium dark:text-gray-400">
                      {index + 1}
                    </td>
                    <td className="px-3 py-2">
                      <p>{user.firstName}</p>
                    </td>
                    <td className="px-3 py-2">
                      <span>{user.lastName}</span>
                    </td>
                    <td className="px-3 py-2">
                      <p>{user.email}</p>
                    </td>
                    <td className="px-3 py-2">
                      <Link to={`/edit/${user.id}`}>
                        <svg
                          className="w-5 h-5 cursor-pointer"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#ffffff"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title></title>{" "}
                            <g id="Complete">
                              {" "}
                              <g id="edit">
                                {" "}
                                <g>
                                  {" "}
                                  <path
                                    d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                  ></path>{" "}
                                  <polygon
                                    fill="none"
                                    points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                                    stroke="#ffffff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                  ></polygon>{" "}
                                </g>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
            {User.length === 0 && (
              <tbody>
                <tr>
                  <td>Nothing To Show..</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </section>
  );
};
