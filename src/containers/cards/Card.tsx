import { TCard, useCard } from "./hooks/use-card";
export const Card = ({ card, __id }: TCard) => {
  const { onDelete } = useCard({ card, __id });
  return (
    <li
      className="bg-amber-200 border border-amber-300 rounded p-2 cursor-pointer flex items-center justify-between"
      key={card.node?.id}
    >
      <span> {card.node?.title}</span>
      <button
        className="bg-red-200 border border-red-300 rounded p-2"
        onClick={() => onDelete(card.node?.id!)}
      >
        Delete
      </button>
    </li>
  );
};
