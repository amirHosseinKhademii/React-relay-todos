/**
 * @generated SignedSource<<8c314d7a7269b33682341f60b2f4da1f>>
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
        readonly " $fragmentSpreads": FragmentRefs<"CardsBaseFragment">;
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
                    "name": "CardsBaseFragment"
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isCompleted",
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
    "cacheID": "3d58d887bfe460ee7f57585df52d6e52",
    "id": null,
    "metadata": {},
    "name": "CardAddMutation",
    "operationKind": "mutation",
    "text": "mutation CardAddMutation(\n  $input: AddCardInput!\n) {\n  addCard(input: $input) {\n    clientMutationId\n    addCardEdge {\n      cursor\n      node {\n        ...CardsBaseFragment\n        id\n      }\n    }\n  }\n}\n\nfragment CardsBaseFragment on Card {\n  title\n  description\n  id\n  isCompleted\n}\n"
  }
};
})();

(node as any).hash = "348578217339585b807dda1d412da693";

export default node;
