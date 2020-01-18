import React from "react";
import { useParams } from "react-router-dom";

export default function Genre() {
  let { genreId } = useParams();

  return (
    <div className="row">
      <div className="col-md-12">Раздел /genre/{genreId}</div>
    </div>
  );
}
