/**
 * @generated SignedSource<<469ad43f6821efa7238e689887a8d6ad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoMutation$variables = {
  description?: string | null;
  id: string;
  isCompleted?: boolean | null;
  title?: string | null;
};
export type TodoMutation$data = {
  readonly updateTodo: {
    readonly " $fragmentSpreads": FragmentRefs<"TodoMutationFragment">;
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
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isCompleted"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v4 = [
  {
    "fields": [
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "UpdateTodoPayload",
        "kind": "LinkedField",
        "name": "updateTodo",
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "TodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "UpdateTodoPayload",
        "kind": "LinkedField",
        "name": "updateTodo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "clientMutationId",
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c04b6ea6cf72a95bad54d047576d377a",
    "id": null,
    "metadata": {},
    "name": "TodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodoMutation(\n  $id: ID!\n  $title: String\n  $description: String\n  $isCompleted: Boolean\n) {\n  updateTodo(input: {id: $id, isCompleted: $isCompleted, title: $title, description: $description}) {\n    ...TodoMutationFragment\n    id\n  }\n}\n\nfragment TodoMutationFragment on UpdateTodoPayload {\n  clientMutationId\n  title\n  description\n  id\n  isCompleted\n  created_at\n  updated_at\n}\n"
  }
};
})();

(node as any).hash = "74beb2898e89ffc487614900de686b6a";

export default node;
