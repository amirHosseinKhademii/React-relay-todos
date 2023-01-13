import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { useTransition } from "react";
import { CommentsQuery } from "../graphql/Comments.queries";
import type { CommentsQuery as TCommentsQuery } from "../graphql/__generated__/CommentsQuery.graphql";
import { CommentsPaginationFrgament } from "../graphql/__generated__/CommentsPaginationFrgament.graphql";
import { CommentsQueryFragment$key } from "../graphql/__generated__/CommentsQueryFragment.graphql";
import { CommentsQueryFragment } from "../graphql/Comment.fragments";

// const todosSubscriptionConfig: GraphQLSubscriptionConfig<TTodosSubscription> = {
//   subscription: TodosSubscription,
//   variables: {},
// };

// const cardsSubscriptionConfig: GraphQLSubscriptionConfig<TCardsUpdatedSubscription> =
//   {
//     subscription: CardsUpdatedSubscription,
//     variables: {},
//   };

export const useComments = (cardId: string) => {
  const [isPending, startTransition] = useTransition();

  const comments = useLazyLoadQuery<TCommentsQuery>(CommentsQuery, {
    first: 1,
    cardId,
  });

  const { data, loadNext } = usePaginationFragment<
    CommentsPaginationFrgament,
    CommentsQueryFragment$key
  >(CommentsQueryFragment, comments);

  //   useSubscription(todosSubscriptionConfig);

  //   useSubscription(cardsSubscriptionConfig);

  return {
    data,
    isPending,
    onLoadMore: () =>
      startTransition(() => {
        loadNext(5);
      }),
  };
};
