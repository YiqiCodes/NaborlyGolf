import axios from "axios";

// Auth
import { useAuth0 } from "@auth0/auth0-react";

// Hooks
import useGetYardages from "../../hooks/GetWithSWR/UseGetYardages";

export default function YardageTable() {
  const { user } = useAuth0();
  const { yardages, isLoading, isError } = useGetYardages();

  if (!yardages || !yardages.userYardages || isLoading || isError) return null;

  const handleDelete = (club) => {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_URL}/yardages/deleteYardages`,
      data: { user: user.email, club: club },
    });
    window.location.reload();
  };

  return (
    <div className="flex w-full bg-white relative flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Club
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Yardage
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {yardages.userYardages.stockYardages
                  .sort((a, b) => b.yardage - a.yardage)
                  .map((club, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {club.club}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {club.yardage}
                        </span>
                      </td>
                      <td className="flex whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6 md:pr-0">
                        {/* eslint-disable-next-line */}
                        <a
                          className="text-red-600 hover:text-red-900"
                          onClick={() => {
                            handleDelete(club.club);
                          }}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
