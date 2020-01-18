import React from "react";
import { useParams } from "react-router-dom";

export default function Release() {
  let { genreId, releaseId } = useParams();

  return (
    <div className="row">
      <div className="col-md-12">
        Раздел /genre/{genreId}/{releaseId}
      </div>
    </div>
  );
}
