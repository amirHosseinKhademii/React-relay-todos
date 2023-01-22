// import { ICLoadMore } from "icons/ICLoadMore";
// import { useComments } from "./hooks";

// export const Comments = ({ cardId }: { cardId: string }) => {
//   const { data, onLoadMore, isPending } = useComments(cardId);

//   return (
//     <div className="  w-full">
//       <div className="flex flex-col space-y-2 my-2">
//         {data?.comments?.edges?.map((comment) => (
//           <div
//             key={comment.node?.id}
//             className="text-xs text-gray-600 p-2 w-full rounded border bg-cyan-300"
//           >
//             {comment.node?.title}
//           </div>
//         ))}
//       </div>

//       {data.comments.pageInfo?.hasNextPage && (
//         <ICLoadMore
//           className=" text-xs w-6 ml-auto text-cyan-300 "
//           onClick={onLoadMore}
//           //disabled={isPending}
//         />
//       )}
//       {isPending && "Loading more ..."}
//     </div>
//   );
// };
export {};
