"use client";

import { FC } from "react";

import algoliasearch from "algoliasearch/lite";
import { Configure } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

import { MiniSearchBox } from "./mini-search-box";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

export const MiniSearch: FC = () => (
  <div style={{ flexGrow: 2, maxWidth: "37rem" }}>
    <InstantSearchNext
      searchClient={searchClient}
      indexName="instant_search"
      future={{ preserveSharedStateOnUnmount: true }}
    >
      <Configure hitsPerPage={6} />
      <MiniSearchBox />
    </InstantSearchNext>
  </div>
);
