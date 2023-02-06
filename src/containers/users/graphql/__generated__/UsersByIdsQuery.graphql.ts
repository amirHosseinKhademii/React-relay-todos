/**
 * @generated SignedSource<<fc3e8c81c66bb94f70800e055f798f06>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type UsersByIdsQuery$variables = {
  ids: ReadonlyArray<string>;
};
export type UsersByIdsQuery$data = {
  readonly usersByIds: ReadonlyArray<{
    readonly fullName: string;
    readonly id: string;
    readonly userName: string;
  }>;
};
export type UsersByIdsQuery = {
  response: UsersByIdsQuery$data;
  variables: UsersByIdsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "ids"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "ids",
        "variableName": "ids"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "usersByIds",
    "plural": true,
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
        "name": "userName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fullName",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersByIdsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UsersByIdsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7d7c6fa2ac84d8fa41f6f192a9e24de4",
    "id": null,
    "metadata": {},
    "name": "UsersByIdsQuery",
    "operationKind": "query",
    "text": "query UsersByIdsQuery(\n  $ids: [ID!]!\n) {\n  usersByIds(ids: $ids) {\n    id\n    userName\n    fullName\n  }\n}\n"
  }
};
})();

(node as any).hash = "abbd3a1029b199eb245b7446c7f3e25a";

export default node;
