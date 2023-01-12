/**
 * @generated SignedSource<<37dd0146e4d8256094a998dee2de71f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardsMutationFragment$data = {
  readonly description: string | null;
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "CardsMutationFragment";
};
export type CardsMutationFragment$key = {
  readonly " $data"?: CardsMutationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CardsMutationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CardsMutationFragment",
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

(node as any).hash = "3d7427c62a55f1c3aee91007eca65c92";

export default node;
