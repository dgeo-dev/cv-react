import React from "react"

function Skill({ title, rating }) {
  console.log(title)

  return (
    <div className="skill">
      <p className="skill__label">{title}</p>

      <div className="skill__rating">
        <span className={`circle ${rating > 0 && "circle--plain"}`}></span>
        <span className={`circle ${rating > 1 && "circle--plain"}`}></span>
        <span className={`circle ${rating > 2 && "circle--plain"}`}></span>
        <span className={`circle ${rating > 3 && "circle--plain"}`}></span>
        <span className={`circle ${rating > 4 && "circle--plain"}`}></span>
      </div>
    </div>
  )
}

export default Skill
