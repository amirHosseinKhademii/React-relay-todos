import {
  useLazyLoadQuery,
  useMutation,
  usePaginationFragment,
} from "react-relay";
import { useId, useState, useTransition } from "react";
import { CommentsQuery } from "../graphql/Comments.queries";
import type { CommentsQuery as TCommentsQuery } from "../graphql/__generated__/CommentsQuery.graphql";
import { CommentsPaginationFrgament } from "../graphql/__generated__/CommentsPaginationFrgament.graphql";
import { CommentsQueryFragment$key } from "../graphql/__generated__/CommentsQueryFragment.graphql";
import { CommentsQueryFragment } from "../graphql/Comment.fragments";
import { CommentAddMutation } from "../graphql/Comment.mutation";
import { CommentAddMutation as TCommentAddMutation } from "../graphql/__generated__/CommentAddMutation.graphql";

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

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = (e: any) => {
    e.stopPropagation();
    setIsOpen(true);
  };
  const onClose = () => setIsOpen(false);

  const [mutate] = useMutation<TCommentAddMutation>(CommentAddMutation);

  const clientMutationId = useId();

  return {
    data,
    isPending,
    isOpen,
    onOpen,
    onClose,
    onLoadMore: () =>
      startTransition(() => {
        loadNext(5);
      }),
    onSubmit: (e: any) => {
      e.preventDefault();
      const title: string = e.target.title.value;
      const description: string = e.target.description.value;
      mutate({
        variables: {
          connections: [data.comments.__id],
          input: {
            cardId,
            title,
            description,
            clientMutationId,
          },
        },
        optimisticResponse: {
          addComment: {
            addCommentEdge: {
              node: {
                id: clientMutationId,
                title,
                description,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
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
