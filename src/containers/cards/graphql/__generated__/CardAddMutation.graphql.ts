/**
 * @generated SignedSource<<be05f8725a328f35f4d8567d3d3e670f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddCardInput = {
  clientMutationId?: string | null;
  description?: string | null;
  title: string;
  todoId: string;
};
export type CardAddMutation$variables = {
  connections: ReadonlyArray<string>;
  input: AddCardInput;
};
export type CardAddMutation$data = {
  readonly addCard: {
    readonly addCardEdge: {
      readonly cursor: string | null;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"CardMutationFragment">;
      } | null;
    };
    readonly clientMutationId: string | null;
  } | null;
};
export type CardAddMutation = {
  response: CardAddMutation$data;
  variables: CardAddMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CardAddMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "AddCardPayload",
        "kind": "LinkedField",
        "name": "addCard",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CardResponseEdge",
            "kind": "LinkedField",
            "name": "addCardEdge",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Card",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CardMutationFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CardAddMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "AddCardPayload",
        "kind": "LinkedField",
        "name": "addCard",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CardResponseEdge",
            "kind": "LinkedField",
            "name": "addCardEdge",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Card",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
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
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "appendNode",
                "key": "",
                "kind": "LinkedHandle",
                "name": "node",
                "handleArgs": [
                  {
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  },
                  {
                    "kind": "Literal",
                    "name": "edgeTypeName",
                    "value": "CardEdge"
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9df3ece8a25eff46ac1122b7b3e6f063",
    "id": null,
    "metadata": {},
    "name": "CardAddMutation",
    "operationKind": "mutation",
    "text": "mutation CardAddMutation(\n  $input: AddCardInput!\n) {\n  addCard(input: $input) {\n    clientMutationId\n    addCardEdge {\n      cursor\n      node {\n        ...CardMutationFragment\n        id\n      }\n    }\n  }\n}\n\nfragment CardMutationFragment on Card {\n  title\n  description\n  id\n}\n"
  }
};
})();

(node as any).hash = "ad97c8d285cee089f2893a213ea5c893";

export default node;
