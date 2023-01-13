/**
 * @generated SignedSource<<7b2a6019fba0314beda404ac110b23a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentBaseFragment$data = {
  readonly created_at: any | null;
  readonly description: string | null;
  readonly id: string;
  readonly title: string;
  readonly updated_at: any | null;
  readonly " $fragmentType": "CommentBaseFragment";
};
export type CommentBaseFragment$key = {
  readonly " $data"?: CommentBaseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentBaseFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentBaseFragment",
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
  "type": "Comment",
  "abstractKey": null
};

(node as any).hash = "6d41f56e89bcb81d391535f3c3ddfaf0";

export default node;
