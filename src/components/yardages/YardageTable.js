// Hooks
import useGetYardages from "../../hooks/GetWithSWR/UseGetYardages";

export default function YardageTable() {
  const { yardages, isLoading, isError } = useGetYardages();

  if (isLoading || isError) return null;

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
                    className="hidden md:flex px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Club Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Yardage
                  </th>
                  <th
                    scope="col"
                    className="hidden md:inline px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Low
                  </th>
                  <th
                    scope="col"
                    className="hidden md:inline px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    High
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {yardages.userYardages.stockYardages.map((club, index) =>
                  club.name === null ? null : ( // Does not render row if no name exists for club
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
                      <td className="hidden md:flex px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{club.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {club.yardages[0]}
                        </span>
                      </td>
                      <td className="hidden md:inline px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-cyan-100 text-cyan-800">
                          {club.yardages[1]}
                        </span>
                      </td>
                      <td className="hidden md:inline px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-cyan-100 text-cyan-800">
                          {club.yardages[2]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="/"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
