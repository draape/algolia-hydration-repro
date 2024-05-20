"use client";

import { FC } from "react";

import algoliasearch from "algoliasearch/lite";
import { Configure } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { ProductSearchHits } from "./product-search-hits";
import { ProductSearchFacets } from "./product-search-facets";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

export const ProductSearch: FC = () => (
  <InstantSearchNext
    searchClient={searchClient}
    indexName="instant_search"
    future={{ preserveSharedStateOnUnmount: true }}
  >
    <h1>Products</h1>
    <ProductSearchFacets />
    <ProductSearchHits />
    <Configure hitsPerPage={20} />
  </InstantSearchNext>
);
