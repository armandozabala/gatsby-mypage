import React from "react";
import CodigoFacilito from "../components/codigofacilito";
import Header from '../components/Header'
import Medium from "../components/medium";
import Repos from '../components/repos';

export default function Home() {
  return (
    <div>
      <Header/>
      <Repos/>
      <CodigoFacilito/>
      <Medium/>
    </div>
  )
}
