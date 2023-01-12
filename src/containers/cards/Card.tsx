import { ICTrash } from "icons/ICTrash";
import { TCard, useCard } from "./hooks/use-card";
export const Card = ({ card, __id }: TCard) => {
  const { onDelete } = useCard({ card, __id });
  return (
    <li
      className=" border border-cyan-500 bg-cyan-200 rounded p-2 cursor-pointer flex items-center justify-between"
      key={card.node?.id}
    >
      <div className="flex items-center space-x-2">
        <input type="checkbox" className="w-5 h-5" />
        <span> {card.node?.title}</span>
      </div>

      <ICTrash
        className="text-red-500 w-6"
        onClick={() => onDelete(card.node?.id!)}
      >
        Delete
      </ICTrash>
    </li>
  );
};
