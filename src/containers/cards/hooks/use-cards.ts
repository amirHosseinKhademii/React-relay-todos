import { useId, useState, useTransition } from "react";
import { useMutation, usePaginationFragment } from "react-relay";

import { CardAddMutation } from "containers/cards/graphql/Card.mutation";
import { CardAddMutation as TCardAddMutation } from "containers/cards/graphql/__generated__/CardAddMutation.graphql";
import { CardsFragment } from "containers/cards/graphql/Cards.fragment";
import { CardsFragment$key } from "containers/cards/graphql/__generated__/CardsFragment.graphql";

export type TCards = { todo: CardsFragment$key; todoId: string };

export const useCards = ({ todo, todoId }: TCards) => {
  const [isPending, startTransition] = useTransition();

  const { data, loadNext } = usePaginationFragment(CardsFragment, todo);

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
    isOpen,
    onOpen,
    onClose,
    onLoadMore: () =>
      startTransition(() => {
        loadNext(2);
      }),
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
                isCompleted: false,
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
