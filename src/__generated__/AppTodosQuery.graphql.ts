/**
 * @generated SignedSource<<60883f1d99db0d0c0d1cc74cfc25bda2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppTodosQuery$variables = {};
export type AppTodosQuery$data = {
  readonly todos: {
    readonly count: number | null;
    readonly data: ReadonlyArray<{
      readonly created_at: any;
      readonly description: string | null;
      readonly id: string;
      readonly isCompleted: boolean | null;
      readonly title: string;
      readonly updated_at: any | null;
    }>;
    readonly nextPage: number | null;
    readonly prevPage: number | null;
  };
};
export type AppTodosQuery = {
  response: AppTodosQuery$data;
  variables: AppTodosQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "limit",
        "value": 10
      },
      {
        "kind": "Literal",
        "name": "page",
        "value": 1
      }
    ],
    "concreteType": "TodoResponse",
    "kind": "LinkedField",
    "name": "todos",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "data",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "count",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "nextPage",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "prevPage",
        "storageKey": null
      }
    ],
    "storageKey": "todos(limit:10,page:1)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppTodosQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppTodosQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3e3ceda6a80fa1664ed0d43abdd30a5c",
    "id": null,
    "metadata": {},
    "name": "AppTodosQuery",
    "operationKind": "query",
    "text": "query AppTodosQuery {\n  todos(page: 1, limit: 10) {\n    data {\n      id\n      title\n      description\n      created_at\n      updated_at\n      isCompleted\n    }\n    count\n    nextPage\n    prevPage\n  }\n}\n"
  }
};
})();

(node as any).hash = "9581b22cb3857637683059d0081ed17e";

export default node;
