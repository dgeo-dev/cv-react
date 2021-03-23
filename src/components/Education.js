import React from "react"

function Education(experiences) {
  console.log(experiences)
  return (
    <div className="grid__row">
      <div className="grid__item">
        <p className="grid__date">12/03/2020</p>
      </div>
      <div className="grid__item">
        <h3 className="grid__title">Développeur Web</h3>
        <p className="grid__location">Paris 13ème</p>
      </div>
    </div>
  )
}

export default Education
