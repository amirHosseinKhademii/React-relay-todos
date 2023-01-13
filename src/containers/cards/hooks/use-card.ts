import { useId } from "react";
import { useMutation } from "react-relay";
import {
  CardDeleteMutation,
  CardUpdateMutation,
} from "../graphql/Card.mutation";
import { CardDeleteMutation as TCardDeleteMutation } from "../graphql/__generated__/CardDeleteMutation.graphql";
import { CardUpdateMutation as TCardUpdateMutation } from "../graphql/__generated__/CardUpdateMutation.graphql";

export type TCard = {
  __id?: string;
  card: {
    readonly node: {
      readonly id: string;
      readonly title: string;
      readonly description: string;
      readonly isCompleted: boolean;
    } | null;
  };
};

export const useCard = ({ __id, card }: TCard) => {
  const [deleteCard] = useMutation<TCardDeleteMutation>(CardDeleteMutation);
  const [updateCard] = useMutation<TCardUpdateMutation>(CardUpdateMutation);
  const clientMutationId = useId();

  return {
    onDelete: (id: string) => {
      deleteCard({
        variables: {
          connections: [__id!],
          input: {
            id,
            clientMutationId,
          },
        },
        optimisticResponse: {
          deleteCard: {
            id,
            clientMutationId,
          },
        },
      });
    },
    onUpdate: () =>
      updateCard({
        variables: {
          input: {
            id: card.node?.id!,
            isCompleted: !card.node?.isCompleted,
            clientMutationId: clientMutationId,
          },
        },
        optimisticResponse: {
          updateTodo: {
            todo: {
              id: card.node?.id!,
              isCompleted: !card.node?.isCompleted,
              description: card.node?.description,
              title: card.node?.title,
            },
            clientMutationId: clientMutationId,
          },
        },
      }),
  };
};
