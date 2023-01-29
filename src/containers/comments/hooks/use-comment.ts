import { useId } from "react";
import { useMutation } from "react-relay";
import { CommentDeleteMutation as TCommentDeleteMutation } from "containers/comments/graphql/__generated__/CommentDeleteMutation.graphql";
import { CommentDeleteMutation } from "../graphql/Comment.mutation";

export type TComment = {
  __id?: string;
  comment: {
    readonly node: {
      readonly created_at: any;
      readonly description: string | null;
      readonly id: string;
      readonly title: string;
      readonly updated_at: any;
    } | null;
  };
};

export const useComment = ({ __id, comment }: TComment) => {
  //   const [isComments, setIsComments] = useState(false);
  const [deleteComment] = useMutation<TCommentDeleteMutation>(
    CommentDeleteMutation
  );
  //   const [updateCard] = useMutation<TCardUpdateMutation>(CardUpdateMutation);
  const clientMutationId = useId();

  return {
    //isComments,
    // onCommentsToggle: () => setIsComments((prev) => !prev),
    onDelete: (id: string) => {
      deleteComment({
        variables: {
          connections: [__id!],
          input: {
            id,
            clientMutationId,
          },
        },
        optimisticResponse: {
          deleteComment: {
            id,
            clientMutationId,
          },
        },
      });
    },
    // onCompleteToggle: () =>
    //   updateCard({
    //     variables: {
    //       input: {
    //         id: card.node?.id!,
    //         isCompleted: !card.node?.isCompleted,
    //         clientMutationId: clientMutationId,
    //       },
    //     },
    //     optimisticResponse: {
    //       updateCard: {
    //         card: {
    //           id: card.node?.id!,
    //           isCompleted: !card.node?.isCompleted,
    //           description: card.node?.description,
    //           title: card.node?.title,
    //         },
    //         clientMutationId: clientMutationId,
    //       },
    //     },
    //   }),
  };
};
