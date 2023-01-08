import { useMemo } from "react";
import { useSubscription } from "react-relay";
import { GraphQLSubscriptionConfig } from "relay-runtime";
import { CardsSubscription } from "./graphql/Cards.subscriptions";
import { TCards, useCards } from "./hooks";
import { CardsSubscription as TCardsSubscription } from "./graphql/__generated__/CardsSubscription.graphql";

export const Cards = ({ todo }: TCards) => {
  const { data, isPending, onLoadMore } = useCards({ todo });
  // const subscriptionConfig: GraphQLSubscriptionConfig<TCardsSubscription> =
  //   useMemo(
  //     () => ({
  //       subscription: CardsSubscription,
  //       variables: {},
  //       // onNext: (next) => console.log({ next }),
  //       // onCompleted: () => console.log("ws completed"),
  //       // onError: (er) => console.log({ er }),
  //       updater: (store, { cardAdded }) => {
  //         // const record = store.getRootField('cardAdded');
  //         // console.log(record.);
  //         // const createVoteField = store.getRootField("Vote");
  //         // const newVote = createVoteField?.getLinkedRecord("node");
  //         // const updatedLink = newVote?.getLinkedRecord("link");
  //         // const linkId = updatedLink?.getValue("id");
  //         // const newVotes = updatedLink?.getLinkedRecord("_votesMeta");
  //         // const newVoteCount = newVotes?.getValue("count");
  //         // const link = store?.get(linkId);
  //         // link.getLinkedRecord("votes").setValue(newVoteCount, "count");
  //         // record.
  //       },
  //     }),
  //     []
  //   );
  // useSubscription(subscriptionConfig);

  return (
    <ul
      className=" border border-cyan-500 bg-cyan-200 rounded p-4 shadow-md flex flex-col space-y-2 "
      onClick={(e) => e.stopPropagation()}
    >
      {data.cards.edges?.map((card) => (
        <Card key={card.node?.id} {...{ card }} />
      ))}
      {data.cards.pageInfo?.hasNextPage && (
        <button
          className="bg-green-200 border border-green-300 rounded p-2"
          onClick={onLoadMore}
          disabled={isPending}
        >
          Load Next Cards
        </button>
      )}
      {isPending && "Loading more ..."}
    </ul>
  );
};

const Card = ({
  card,
}: {
  card: {
    readonly node: { readonly id: string; readonly title: string } | null;
  };
}) => {
  return (
    <li
      className="bg-amber-200 border border-amber-300 rounded p-2 cursor-pointer"
      key={card.node?.id}
    >
      {card.node?.title}
    </li>
  );
};
