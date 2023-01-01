/**
 * @generated SignedSource<<b183a85acf6bb45a1514661ff092d6ad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddTodoMutation$variables = {
  description?: string | null;
  title: string;
};
export type AddTodoMutation$data = {
  readonly addTodo: {
    readonly created_at: any;
    readonly description: string | null;
    readonly id: string;
    readonly isCompleted: boolean | null;
    readonly title: string;
    readonly updated_at: any | null;
  };
};
export type AddTodoMutation = {
  response: AddTodoMutation$data;
  variables: AddTodoMutation$variables;
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
  "name": "title"
},
v2 = [
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
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "addTodo",
    "plural": false,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddTodoMutation",
    "selections": (v2/*: any*/),
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
    "name": "AddTodoMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b7471d2f57c50a301b164408d74fce5f",
    "id": null,
    "metadata": {},
    "name": "AddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation AddTodoMutation(\n  $title: String!\n  $description: String\n) {\n  addTodo(title: $title, description: $description) {\n    id\n    title\n    description\n    created_at\n    updated_at\n    isCompleted\n  }\n}\n"
  }
};
})();

(node as any).hash = "63008b46cad9099e54f6eac15ebfcdb7";

export default node;
