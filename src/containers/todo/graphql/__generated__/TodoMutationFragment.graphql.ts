/**
 * @generated SignedSource<<967fcfb58bb26aed23ac679c73abddbf>>
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
      "name": "updated_at",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "b94a0bc56a20ddf83331a48bf82af6c1";

export default node;
