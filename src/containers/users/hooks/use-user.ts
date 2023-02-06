import { useId } from "react";
import { useMutation } from "react-relay";
import { UserFollowMutation } from "containers/users/graphql/User.mutations";
import { UserFollowMutation as TUserFollowMutation } from "containers/users/graphql/__generated__/UserFollowMutation.graphql";

export type TUser = {
  readonly followers: readonly string[];
  readonly followings: readonly string[];
  readonly fullName: string;
  readonly id: string;
  readonly userName: string;
} | null;

export const useUser = () => {
  const [followUser] = useMutation<TUserFollowMutation>(UserFollowMutation);

  const clientMutationId = useId();

  return {
    onFollow: (user: TUser) => {
      followUser({
        variables: {
          input: {
            id: user?.id!,
            clientMutationId,
          },
        },
        optimisticResponse: {
          followOrUnfollow: {
            user: {
              followers: user?.followers!,
              followings: user?.followings!,
              fullName: user?.fullName,
              id: user?.id!,
              userName: user?.userName,
            },
            clientMutationId,
          },
        },
      });
    },
  };
};
