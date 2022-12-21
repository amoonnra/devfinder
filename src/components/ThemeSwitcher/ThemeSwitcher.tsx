import styles from "./ThemeSwitcher.module.scss"
import { ReactComponent as MoonIcon } from "assets/icon-moon.svg"
import { ReactComponent as SunIcon } from "assets/icon-sun.svg"
import { ReactNode, useEffect, useState } from "react"

export const ThemeSwitcher: React.FC = () => {
   const [isDark, setDark] = useState(false)
   const themeText = isDark ? "Dark" : "Light"
   const ThemeIcon = isDark ? MoonIcon : SunIcon

   useEffect(() => {
      document.body.setAttribute("data-theme", isDark ? "dark" : "light")
   }, [isDark])

   return (
      <div
         className={styles.switcher}
         onClick={() => setDark((prevState) => !prevState)}
      >
         <span>{themeText}</span>
         <ThemeIcon className={styles.icon} />
      </div>
   )
}
