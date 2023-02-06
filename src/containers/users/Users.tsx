import { ICPersonMinus } from "icons/ICPersonMinus";
import { ICPersonPlus } from "icons/ICPersonPlus";
import { useUsers } from "./hooks";
import { User } from "./User";

export const Users = () => {
  const { data } = useUsers();

  return (
    <div className="rounded p-4 shadow-md flex flex-col space-y-2 bg-slate-400 antialiased w-full ">
      {data?.users?.edges?.map(({ node: user }) => (
        <User key={user?.id} {...{ user }} />
      ))}
    </div>
  );
};
