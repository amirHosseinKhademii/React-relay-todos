/**
 * @generated SignedSource<<e48ba759ae1852ff53f5fb3a69014b40>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TodosQuery$variables = {};
export type TodosQuery$data = {
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
export type TodosQuery = {
  response: TodosQuery$data;
  variables: TodosQuery$variables;
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
    "name": "TodosQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodosQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a484c0573d0f9005ed60a5eee48a4b2c",
    "id": null,
    "metadata": {},
    "name": "TodosQuery",
    "operationKind": "query",
    "text": "query TodosQuery {\n  todos(page: 1, limit: 10) {\n    data {\n      id\n      title\n      description\n      created_at\n      updated_at\n      isCompleted\n    }\n    count\n    nextPage\n    prevPage\n  }\n}\n"
  }
};
})();

(node as any).hash = "7ed762bf92d2e1eae700ab1f32e71699";

export default node;
