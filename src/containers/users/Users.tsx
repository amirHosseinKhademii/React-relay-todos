import { ICPersonMinus } from "icons/ICPersonMinus";
import { ICPersonPlus } from "icons/ICPersonPlus";
import { useUsers } from "./hooks";

export const Users = () => {
  const { data } = useUsers();

  return (
    <div className="rounded p-4 shadow-md flex flex-col space-y-2 bg-slate-400 antialiased w-full ">
      {data?.users?.edges?.map((user) => (
        <div
          className="w-full bg-cyan-100 p-3 rounded flex items-center justify-between"
          key={user.node?.id}
        >
          <span className="text-gray-500"> {user.node?.fullName}</span>
          <ICPersonPlus className="w-6 text-cyan-500 cursor-pointer" />
          {/* <ICPersonMinus className="w-6 text-gray-500 cursor-pointer" /> */}
        </div>
      ))}
    </div>
  );
};
