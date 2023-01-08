/**
 * @generated SignedSource<<1a0b385a26f7e0c313a279576256ed34>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type CardsSubscription$variables = {};
export type CardsSubscription$data = {
  readonly cardAdded: {
    readonly __typename: "Card";
    readonly description: string | null;
    readonly id: string;
    readonly title: string;
  };
};
export type CardsSubscription = {
  response: CardsSubscription$data;
  variables: CardsSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Card",
    "kind": "LinkedField",
    "name": "cardAdded",
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
    "name": "CardsSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CardsSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9010a1b519ff4fac2936c627e6c24b09",
    "id": null,
    "metadata": {},
    "name": "CardsSubscription",
    "operationKind": "subscription",
    "text": "subscription CardsSubscription {\n  cardAdded {\n    __typename\n    id\n    title\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "cacec7dab0939ead1a7a68001b306277";

export default node;
