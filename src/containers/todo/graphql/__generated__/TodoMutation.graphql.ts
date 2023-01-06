/**
 * @generated SignedSource<<0982c70be28d1890c252a7b9c9d7bbb3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoMutation$variables = {
  clientMutationId?: string | null;
  description?: string | null;
  id: string;
  isCompleted?: boolean | null;
  title?: string | null;
};
export type TodoMutation$data = {
  readonly updateTodo: {
    readonly clientMutationId: string | null;
    readonly todo: {
      readonly " $fragmentSpreads": FragmentRefs<"TodoMutationFragment">;
    };
  } | null;
};
export type TodoMutation = {
  response: TodoMutation$data;
  variables: TodoMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "clientMutationId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isCompleted"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v5 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "clientMutationId",
        "variableName": "clientMutationId"
      },
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "isCompleted",
        "variableName": "isCompleted"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "UpdateTodoPayload",
        "kind": "LinkedField",
        "name": "updateTodo",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "todo",
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v4/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "UpdateTodoPayload",
        "kind": "LinkedField",
        "name": "updateTodo",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "todo",
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "updated_at",
                "storageKey": null
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
    "cacheID": "c2344befea02b54ebca3ca2a5bc4c0fb",
    "id": null,
    "metadata": {},
    "name": "TodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodoMutation(\n  $id: ID!\n  $title: String\n  $description: String\n  $isCompleted: Boolean\n  $clientMutationId: String\n) {\n  updateTodo(input: {id: $id, isCompleted: $isCompleted, title: $title, description: $description, clientMutationId: $clientMutationId}) {\n    clientMutationId\n    todo {\n      ...TodoMutationFragment\n      id\n    }\n  }\n}\n\nfragment TodoMutationFragment on Todo {\n  title\n  description\n  id\n  isCompleted\n  updated_at\n}\n"
  }
};
})();

(node as any).hash = "e72341f75421cfc765a9a825e02bbab8";

export default node;
