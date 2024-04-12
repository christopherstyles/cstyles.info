import { VscCheck } from "react-icons/vsc";

import { IRole } from "./project";

export default function RolesTable({ roles }: { roles: IRole[] }): JSX.Element {
  return (
    <table className="max-w-fit divide-y divide-gray-700 break-words">
      <thead>
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold sm:pl-0"
          >
            Backend?
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-center text-sm font-semibold"
          >
            Frontend?
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold"
          >
            Project
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold"
          >
            Technologies
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        {roles.map((role, index) => (
          <tr key={`role-${index}`}>
            <td className="content-start whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">
              {role.backend ? (
                <VscCheck className="mx-auto" color="currentColor" size={18} />
              ) : (
                ""
              )}
            </td>
            <td className="content-start whitespace-nowrap px-3 py-4 text-sm">
              {role.frontend ? (
                <VscCheck className="mx-auto" color="currentColor" size={18} />
              ) : (
                ""
              )}
            </td>
            <td className="content-baseline whitespace-nowrap px-3 py-4 text-sm">
              {role.project}
            </td>
            <td className="content-baseline whitespace-nowrap px-3 py-4 text-sm">
              {role.technologies}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
