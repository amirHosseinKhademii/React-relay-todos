import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { UsersByIdsQuery } from "containers/users/graphql/Users.queries";
import { UsersByIdsQuery as TUsersByIdsQuery } from "containers/users/graphql/__generated__/UsersByIdsQuery.graphql";
import { UsersPaginationFrgament } from "containers/users/graphql/__generated__/UsersPaginationFrgament.graphql";
import { UsersFragment } from "containers/users/graphql/Users.fragment";
import { UsersFragment$key } from "containers/users/graphql/__generated__/UsersFragment.graphql";
import { useTransition } from "react";

export type TUseUsers = { ids: readonly string[] };

export const useUsers = ({ ids }: TUseUsers) => {
  const [isPending, startTransition] = useTransition();

  const users = useLazyLoadQuery<TUsersByIdsQuery>(UsersByIdsQuery, {
    ids,
    first: 2,
  });

  const { data, loadNext } = usePaginationFragment<
    UsersPaginationFrgament,
    UsersFragment$key
  >(UsersFragment, users);

  return {
    isPending,
    data,
    onLoadMore: () =>
      startTransition(() => {
        loadNext(2);
      }),
  };
};
