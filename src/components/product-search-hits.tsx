"use client";

import { useHits } from "react-instantsearch";

import Link from "next/link";

export const ProductSearchHits = () => {
  const { hits } = useHits();

  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        marginTop: "2xl",
      }}
    >
      {hits.map((hit: any) => (
        <div key={hit.objectID}>
          <Link href={`/products/${hit.objectID}`}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "start",
                marginTop: "lg",
              }}
            >
              <p>{hit.type}</p>
              <h3>{hit.name}</h3>
              <p>{hit.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
