/**
 * @generated SignedSource<<dcc2a3d8c78ecb42bae5ab0205935db0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteTodoMutation$variables = {
  id: string;
};
export type DeleteTodoMutation$data = {
  readonly deleteTodo: boolean;
};
export type DeleteTodoMutation = {
  response: DeleteTodoMutation$data;
  variables: DeleteTodoMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteTodo",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "258b5d6c30964f9dca18c57f7a8da85e",
    "id": null,
    "metadata": {},
    "name": "DeleteTodoMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTodoMutation(\n  $id: String!\n) {\n  deleteTodo(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "634d098b0360c3ba8c308014993f448d";

export default node;
