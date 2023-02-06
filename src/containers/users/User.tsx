import { ICPersonPlus } from "icons/ICPersonPlus";
import { TUser, useUser } from "./hooks/use-user";

export const User = ({ user }: { user: TUser }) => {
  const { onFollow } = useUser();
  return (
    <div
      className="w-full bg-cyan-100 p-3 rounded flex items-center justify-between"
      key={user?.id}
    >
      <span className="text-gray-500"> {user?.fullName}</span>
      <ICPersonPlus
        className="w-6 text-cyan-500 cursor-pointer"
        onClick={() => onFollow(user)}
      />
      {/* <ICPersonMinus className="w-6 text-gray-500 cursor-pointer" /> */}
    </div>
  );
};
