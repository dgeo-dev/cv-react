import React from "react"
import "./Skills.css"
import Skill from "./Skill"

function Skills({ props }) {
  return (
    <div className="skills">
      <h2 className="h2">Compétences</h2>
      <Skill title="HTML" rating="5" />
      <Skill title="CSS" rating="4" />
      <Skill title="JAVASCRIPT" rating="4" />
      <Skill title="REACT" rating="4" />
      <Skill title="NODE" rating="3" />
    </div>
  )
}

export default Skills
