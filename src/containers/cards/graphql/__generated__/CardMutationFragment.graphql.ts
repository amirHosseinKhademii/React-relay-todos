/**
 * @generated SignedSource<<15adbed557cfd4b007c974a001274865>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardMutationFragment$data = {
  readonly description: string | null;
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "CardMutationFragment";
};
export type CardMutationFragment$key = {
  readonly " $data"?: CardMutationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CardMutationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CardMutationFragment",
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
    }
  ],
  "type": "Card",
  "abstractKey": null
};

(node as any).hash = "6e3104d0bad7d46a57f26cfa107bbf0e";

export default node;
