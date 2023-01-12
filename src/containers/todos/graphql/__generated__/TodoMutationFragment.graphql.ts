/**
 * @generated SignedSource<<a0ec525ee04dd225729c012a1fa8f4f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoMutationFragment$data = {
  readonly description: string | null;
  readonly id: string;
  readonly isCompleted: boolean | null;
  readonly title: string;
  readonly " $fragmentType": "TodoMutationFragment";
};
export type TodoMutationFragment$key = {
  readonly " $data"?: TodoMutationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoMutationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoMutationFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isCompleted",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "6a8aab3cbe84b39a8fc1b92226304582";

export default node;
