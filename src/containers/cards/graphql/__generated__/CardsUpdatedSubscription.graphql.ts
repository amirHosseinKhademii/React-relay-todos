/**
 * @generated SignedSource<<ea54155ac7ff32296cf011b6aee25691>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type CardsUpdatedSubscription$variables = {};
export type CardsUpdatedSubscription$data = {
  readonly cardUpdated: {
    readonly __typename: "Card";
    readonly description: string | null;
    readonly id: string;
    readonly title: string;
  };
};
export type CardsUpdatedSubscription = {
  response: CardsUpdatedSubscription$data;
  variables: CardsUpdatedSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Card",
    "kind": "LinkedField",
    "name": "cardUpdated",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
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
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CardsUpdatedSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CardsUpdatedSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3ebed174c866c40ad1d72e517d666a2d",
    "id": null,
    "metadata": {},
    "name": "CardsUpdatedSubscription",
    "operationKind": "subscription",
    "text": "subscription CardsUpdatedSubscription {\n  cardUpdated {\n    __typename\n    id\n    title\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "3d708008a6933693927e7375db0fc780";

export default node;
