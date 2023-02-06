import { TUseUsers, useUsers } from "./hooks/use-users";

export const UsersLiked = ({ ids }: TUseUsers) => {
  const { data } = useUsers({ ids });

  return (
    <div className=" w-1/3 self-end  flex flex-col  bg-white rounded py-1 px-2 ">
      {data.usersByIds.edges?.map((user) => (
        <div className="text-[10px] text-gray-700" key={user.node?.id}>
          {user.node?.fullName}
        </div>
      ))}
    </div>
  );
};
