/**
 * @generated SignedSource<<08c246f56f960178f179be791e485943>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoQuery$variables = {
  id: string;
};
export type TodoQuery$data = {
  readonly todo: {
    readonly description: string | null;
    readonly id: string;
    readonly isCompleted: boolean | null;
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"TodoCardsFragment">;
  };
};
export type TodoQuery = {
  response: TodoQuery$data;
  variables: TodoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isCompleted",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoCardsFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "CardConnection",
            "kind": "LinkedField",
            "name": "cards",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CardPageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasPreviousPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CardEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Card",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "cards(first:2)"
          },
          {
            "alias": null,
            "args": (v6/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "List__cards",
            "kind": "LinkedHandle",
            "name": "cards"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d2e2d992f1f34b3f52e8bfb8c56bf9a4",
    "id": null,
    "metadata": {},
    "name": "TodoQuery",
    "operationKind": "query",
    "text": "query TodoQuery(\n  $id: ID!\n) {\n  todo(id: $id) {\n    id\n    title\n    description\n    isCompleted\n    ...TodoCardsFragment\n  }\n}\n\nfragment TodoCardsFragment on Todo {\n  cards(first: 2) {\n    pageInfo {\n      hasNextPage\n      endCursor\n      hasPreviousPage\n      startCursor\n    }\n    edges {\n      node {\n        id\n        title\n        __typename\n      }\n      cursor\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "6596addb0eb1d93d56d907abbb11b586";

export default node;
