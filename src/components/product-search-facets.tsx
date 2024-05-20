"use client";

import { FC } from "react";

import { useRefinementList } from "react-instantsearch";

export const ProductSearchFacets: FC = () => {
  const { items, refine } = useRefinementList({
    attribute: `rating`,
    sortBy: ["name:asc"],
  });

  const handleFacetClick = (item: any) => {
    refine(item.value);
  };

  return (
    items &&
    items.length > 0 && (
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {items.map((item) => (
          <li key={item.value}>
            <label>
              <input
                type="checkbox"
                checked={item.isRefined}
                onChange={() => console.log("ignore warning")}
                onClick={() => handleFacetClick(item)}
              />
              {item.label} ({item.count})
            </label>
          </li>
        ))}
      </ul>
    )
  );
};
