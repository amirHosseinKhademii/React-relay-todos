import { TUseUsers, useUsers } from "./hooks/use-users";

export const Users = ({ ids }: TUseUsers) => {
  const { users } = useUsers({ ids });

  return (
    <div className=" w-1/3 self-end  flex flex-col  bg-white rounded py-1 px-2 ">
      {users.map((user) => (
        <div className="text-[10px] text-gray-700" key={user.id}>
          {user.fullName}
        </div>
      ))}
    </div>
  );
};
