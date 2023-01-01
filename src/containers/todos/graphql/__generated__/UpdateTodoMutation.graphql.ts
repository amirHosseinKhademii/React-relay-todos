/**
 * @generated SignedSource<<712e0a8e510d15d80c464e4aa33f1e0e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateTodoMutation$variables = {
  description?: string | null;
  id: string;
  isCompleted?: boolean | null;
  title?: string | null;
};
export type UpdateTodoMutation$data = {
  readonly updateTodo: boolean;
};
export type UpdateTodoMutation = {
  response: UpdateTodoMutation$data;
  variables: UpdateTodoMutation$variables;
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
    "alias": null,
    "args": [
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
    "kind": "ScalarField",
    "name": "updateTodo",
    "storageKey": null
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
    "name": "UpdateTodoMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdateTodoMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "f95b8abc784f3602d17bd2ade8247605",
    "id": null,
    "metadata": {},
    "name": "UpdateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateTodoMutation(\n  $title: String\n  $description: String\n  $id: String!\n  $isCompleted: Boolean\n) {\n  updateTodo(title: $title, description: $description, id: $id, isCompleted: $isCompleted)\n}\n"
  }
};
})();

(node as any).hash = "5bd9f4f3eac336134b7de87504fc1e96";

export default node;
