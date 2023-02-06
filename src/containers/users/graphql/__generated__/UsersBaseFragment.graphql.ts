/**
 * @generated SignedSource<<91a14f2d852fe2583e7e720eb4a0f2c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UsersBaseFragment$data = {
  readonly fullName: string;
  readonly id: string;
  readonly userName: string;
  readonly " $fragmentType": "UsersBaseFragment";
};
export type UsersBaseFragment$key = {
  readonly " $data"?: UsersBaseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UsersBaseFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UsersBaseFragment",
  "selections": [
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
      "name": "userName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullName",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "45a391249991d9bf6ed2ea71eabdfa1d";

export default node;
