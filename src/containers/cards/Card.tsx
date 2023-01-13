import { Comments } from "containers/comments/Comments";
import { ICTrash } from "icons/ICTrash";
import { TCard, useCard } from "./hooks/use-card";

export const Card = ({ card, __id }: TCard) => {
  const { onDelete, onCompleteToggle } = useCard({ card, __id });

  return (
    <li
      className={`border border-cyan-500  rounded p-2 cursor-pointer overflow-hidden  ${
        card.node?.isCompleted ? "bg-cyan-400" : "bg-cyan-200"
      }`}
      key={card.node?.id}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={onCompleteToggle}
            checked={card.node?.isCompleted ?? false}
          />
          <span> {card.node?.title}</span>
        </div>

        <ICTrash
          className="text-red-500 w-6"
          onClick={() => onDelete(card.node?.id!)}
        >
          Delete
        </ICTrash>
      </div>

      <Comments cardId={card.node?.id!} />
    </li>
  );
};
