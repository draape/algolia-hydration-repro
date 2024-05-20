import { FC } from "react";

import { useSearchBox } from "react-instantsearch";

import { MiniSearchHits } from "./mini-search-hits";

export const MiniSearchBox: FC = () => {
  const { query, refine } = useSearchBox();

  return (
    <div style={{ color: "foreground" }}>
      <input
        type="text"
        placeholder="Søk"
        onChange={(e) => refine(e.currentTarget.value)}
        value={query}
      />
      {query && <MiniSearchHits />}
    </div>
  );
};
