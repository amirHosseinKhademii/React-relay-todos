/**
 * @generated SignedSource<<8fe614b4f57ab811524365858b3442c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateTodoInput = {
  clientMutationId?: string | null;
  description?: string | null;
  id: string;
  isCompleted?: boolean | null;
  title?: string | null;
};
export type TodoMutation$variables = {
  input: UpdateTodoInput;
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateTodoPayload",
        "kind": "LinkedField",
        "name": "updateTodo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateTodoPayload",
        "kind": "LinkedField",
        "name": "updateTodo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "cacheID": "7c6edf086fe4235db1cf767ed0a99e08",
    "id": null,
    "metadata": {},
    "name": "TodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodoMutation(\n  $input: UpdateTodoInput!\n) {\n  updateTodo(input: $input) {\n    clientMutationId\n    todo {\n      ...TodoMutationFragment\n      id\n    }\n  }\n}\n\nfragment TodoMutationFragment on Todo {\n  title\n  description\n  id\n  isCompleted\n}\n"
  }
};
})();

(node as any).hash = "e3368675371d982abcec7b514fc414c9";

export default node;
