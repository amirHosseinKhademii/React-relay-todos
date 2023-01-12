/**
 * @generated SignedSource<<516e837895a0aea04581f20e8cbd65d6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddTodoInput = {
  clientMutationId?: string | null;
  description?: string | null;
  title: string;
};
export type TodosPageMutation$variables = {
  connections: ReadonlyArray<string>;
  input: AddTodoInput;
};
export type TodosPageMutation$data = {
  readonly addTodo: {
    readonly addTodoEdge: {
      readonly cursor: string | null;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"TodoMutationFragment">;
      } | null;
    };
    readonly clientMutationId: string | null;
  } | null;
};
export type TodosPageMutation = {
  response: TodosPageMutation$data;
  variables: TodosPageMutation$variables;
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
    "name": "TodosPageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "AddTodoPayload",
        "kind": "LinkedField",
        "name": "addTodo",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TodoResponseEdge",
            "kind": "LinkedField",
            "name": "addTodoEdge",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Todo",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "TodoMutationFragment"
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
    "name": "TodosPageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "AddTodoPayload",
        "kind": "LinkedField",
        "name": "addTodo",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TodoResponseEdge",
            "kind": "LinkedField",
            "name": "addTodoEdge",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Todo",
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
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "addTodoEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f59254cd1f2e35831aa968453674a642",
    "id": null,
    "metadata": {},
    "name": "TodosPageMutation",
    "operationKind": "mutation",
    "text": "mutation TodosPageMutation(\n  $input: AddTodoInput!\n) {\n  addTodo(input: $input) {\n    clientMutationId\n    addTodoEdge {\n      cursor\n      node {\n        ...TodoMutationFragment\n        id\n      }\n    }\n  }\n}\n\nfragment TodoMutationFragment on Todo {\n  title\n  description\n  id\n  isCompleted\n}\n"
  }
};
})();

(node as any).hash = "d03d6c954b6f82cbc53a985d59e47601";

export default node;
