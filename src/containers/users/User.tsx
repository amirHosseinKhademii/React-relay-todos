import { ICPersonMinus } from "icons/ICPersonMinus";
import { ICPersonPlus } from "icons/ICPersonPlus";
import { authAtom } from "providers/atoms/auth-atoms";
import { useRecoilValue } from "recoil";
import { TUser, useUser } from "./hooks/use-user";

export const User = ({ user }: { user: TUser }) => {
  const { onFollow } = useUser();
  const { user: userId } = useRecoilValue(authAtom);

  if (user?.id === userId) return null;
  return (
    <div
      className="w-full bg-cyan-100 p-3 rounded flex items-center justify-between"
      key={user?.id}
    >
      <span className="text-gray-500"> {user?.fullName}</span>
      {user?.followers.includes(userId!) ? (
        <ICPersonMinus
          className="w-6 text-gray-500 cursor-pointer"
          onClick={() => onFollow(user)}
        />
      ) : (
        <ICPersonPlus
          className="w-6 text-cyan-500 cursor-pointer"
          onClick={() => onFollow(user)}
        />
      )}
    </div>
  );
};
