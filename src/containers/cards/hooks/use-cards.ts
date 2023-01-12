import { useTransition } from "react";
import { usePaginationFragment, useSubscription } from "react-relay";
import { GraphQLSubscriptionConfig } from "relay-runtime";
import { TodoCardsFragment } from "containers/todo/graphql/Todo.queries";
import { CardsUpdatedSubscription } from "containers/cards/graphql/Cards.subscriptions";
import type { CardsUpdatedSubscription as TCardsUpdatedSubscription } from "containers/cards/graphql/__generated__/CardsUpdatedSubscription.graphql";
import type { TodoCardsFragment$key } from "containers/todo/graphql/__generated__/TodoCardsFragment.graphql";

export type TCards = { todo: TodoCardsFragment$key };

const subscriptionConfig: GraphQLSubscriptionConfig<TCardsUpdatedSubscription> =
  {
    subscription: CardsUpdatedSubscription,
    variables: {},
  };

export const useCards = ({ todo }: TCards) => {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(TodoCardsFragment, todo);

  //useSubscription(subscriptionConfig);

  const onLoadMore = () =>
    startTransition(() => {
      loadNext(2);
    });

  return {
    data,
    isPending,
    onLoadMore,
  };
};
