/**
 * @generated SignedSource<<f1bb51655d06e805c82cc760b6d828b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodosUserFragment$data = {
  readonly user: {
    readonly fullName: string;
  } | null;
  readonly " $fragmentType": "TodosUserFragment";
};
export type TodosUserFragment$key = {
  readonly " $data"?: TodosUserFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodosUserFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodosUserFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fullName",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "a3cc6c9a179504bdad7a89841d879431";

export default node;
