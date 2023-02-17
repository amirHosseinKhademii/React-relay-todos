import { ICComments } from "icons/ICComments";
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
    <div className="w-full bg-cyan-100 p-3 rounded flex flex-col space-y-2">
      <div className=" flex items-center justify-between">
        <span className="text-gray-500"> {user?.fullName}</span>
        <div className="flex items-center space-x-2">
          <ICComments
            className=" text-green-300 w-5 mx-auto cursor-pointer "
            //onClick={onCommentsToggle}
          />
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
      </div>
      <form className="flex items-center space-x-2">
        <textarea className="h-8 rounded w-full px-2 pt-1" />
        <button className="bg-cyan-500 text-white rounded px-2 py-1">
          Send
        </button>
      </form>
    </div>
  );
};
