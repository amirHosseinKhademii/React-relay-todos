import { MouseEventHandler, useId, useState, useTransition } from "react";
import {
  useMutation,
  usePaginationFragment,
  useSubscription,
} from "react-relay";
import { GraphQLSubscriptionConfig } from "relay-runtime";

import { CardsUpdatedSubscription } from "containers/cards/graphql/Cards.subscriptions";
import type { CardsUpdatedSubscription as TCardsUpdatedSubscription } from "containers/cards/graphql/__generated__/CardsUpdatedSubscription.graphql";

import { CardAddMutation } from "../graphql/Card.mutation";
import { CardAddMutation as TCardAddMutation } from "../graphql/__generated__/CardAddMutation.graphql";
import { CardsFragment } from "../graphql/Cards.fragment";
import { CardsFragment$key } from "../graphql/__generated__/CardsFragment.graphql";

export type TCards = { todo: CardsFragment$key; todoId: string };

const subscriptionConfig: GraphQLSubscriptionConfig<TCardsUpdatedSubscription> =
  {
    subscription: CardsUpdatedSubscription,
    variables: {},
  };

export const useCards = ({ todo, todoId }: TCards) => {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(CardsFragment, todo);

  //useSubscription(subscriptionConfig);

  const onLoadMore = () =>
    startTransition(() => {
      loadNext(2);
    });

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = (e: any) => {
    e.stopPropagation();
    setIsOpen(true);
  };
  const onClose = () => setIsOpen(false);

  const [mutate] = useMutation<TCardAddMutation>(CardAddMutation);
  const clientMutationId = useId();

  return {
    data,
    isPending,
    onLoadMore,
    isOpen,
    onOpen,
    onClose,
    onSubmit: (e: any) => {
      e.preventDefault();
      const title: string = e.target.title.value;
      const description: string = e.target.description.value;
      mutate({
        variables: {
          connections: [data.cards.__id],
          input: {
            todoId,
            title,
            description,
            clientMutationId,
          },
        },
        optimisticResponse: {
          addCard: {
            addCardEdge: {
              node: {
                id: clientMutationId,
                title,
                description,
              },
              cursor: clientMutationId,
            },
            clientMutationId,
          },
        },
        optimisticUpdater: onClose,
      });
    },
  };
};
