import React from "react"
import "./Cursus.css"
import DataFormations from "../datas/Formations"
import DataExperiences from "../datas/Experiences"
import Formations from "./Formations"
import Experiences from "./Experiences"

function Cursus() {
  console.log(DataFormations)
  return (
    <>
      <h2>Formations</h2>
      <Formations datas={DataFormations} />
      <h2>Expériences professionelles</h2>
      <Experiences datas={DataExperiences} />
    </>
  )
}

export default Cursus
