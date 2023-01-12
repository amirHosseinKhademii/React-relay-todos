import { useId } from "react";
import { useMutation } from "react-relay";
import { CardDeleteMutation } from "../graphql/Card.mutation";
import { CardDeleteMutation as TCardDeleteMutation } from "../graphql/__generated__/CardDeleteMutation.graphql";

export type TCard = {
  __id?: string;
  card: {
    readonly node: {
      readonly id: string;
      readonly title: string;
    } | null;
  };
};

export const useCard = ({ __id }: TCard) => {
  const [deleteCard] = useMutation<TCardDeleteMutation>(CardDeleteMutation);
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
  };
};
