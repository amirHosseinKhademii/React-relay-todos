import { useLazyLoadQuery } from "react-relay";

import { UsersByIdsQuery } from "containers/users/graphql/Users.queries";
import { UsersByIdsQuery as TUsersByIdsQuery } from "containers/users/graphql/__generated__/UsersByIdsQuery.graphql";

export type TUseUsers = { ids: string[] };

export const useUsers = ({ ids }: TUseUsers) => {
  // const [isPending, startTransition] = useTransition();

  const data = useLazyLoadQuery<TUsersByIdsQuery>(UsersByIdsQuery, { ids });

  // const { data, loadNext } = usePaginationFragment<
  //   TodosPaginationFrgament,
  //   TodosFragment$key
  // >(TodosFragment, todos);

  return {
    users: data.usersByIds,
    //   isPending,
    //   isOpen,
    //   onOpen,
    //   onClose,
    //   onLoadMore: () =>
    //     startTransition(() => {
    //       loadNext(2);
    //     }),
  };
};
