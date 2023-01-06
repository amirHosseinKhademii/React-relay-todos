/**
 * @generated SignedSource<<125521e58c16d80d0a86310b2d073530>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoMutationFragment$data = {
  readonly clientMutationId: string | null;
  readonly created_at: any | null;
  readonly description: string | null;
  readonly id: string;
  readonly isCompleted: boolean | null;
  readonly title: string;
  readonly updated_at: any | null;
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
      "name": "clientMutationId",
      "storageKey": null
    },
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created_at",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updated_at",
      "storageKey": null
    }
  ],
  "type": "UpdateTodoPayload",
  "abstractKey": null
};

(node as any).hash = "95209b567a2ef26b6c887224a39689de";

export default node;
