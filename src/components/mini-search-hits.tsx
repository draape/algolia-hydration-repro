import { useHits } from "react-instantsearch";

import Link from "next/link";

export const MiniSearchHits = () => {
  const { hits } = useHits();

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", zIndex: 100, background: "white" }}>
        {hits.map((hit: any) => (
          <div key={hit.objectID}>
            <Link href={`/products/${hit.objectID}`}>{hit.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
