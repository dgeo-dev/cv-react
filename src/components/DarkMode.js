import React from "react"
import { useState } from "react"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import Brightness3Icon from "@material-ui/icons/Brightness3"
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined"
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined"

const DarkMode = () => {
  const [themeMode, setThemeMode] = useState(false)
  let clickedClass = "clicked"
  const body = document.body
  const lightTheme = "light"
  const darkTheme = "dark"
  let theme

  if (localStorage) {
    theme = localStorage.getItem("theme")
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  const switchTheme = e => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme)
      e.target.classList.remove(clickedClass)
      localStorage.setItem("theme", "light")
      theme = lightTheme
    } else {
      body.classList.replace(lightTheme, darkTheme)
      e.target.classList.add(clickedClass)
      localStorage.setItem("theme", "dark")
      theme = darkTheme
    }
    setThemeMode(theme)
  }
  console.log(themeMode)

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={e => switchTheme(e)}
    >
      {themeMode === "light" || theme === "light" ? (
        <Brightness2OutlinedIcon />
      ) : (
        <WbSunnyOutlinedIcon />
      )}
    </button>
  )
}

export default DarkMode
