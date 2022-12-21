import { ThemeSwitcher } from "components/ThemeSwitcher"
import { FC } from "react"
import styles from "./Header.module.scss"

export const Header: FC = () => (
   <div className={styles.header}>
      <div className={styles.logo}>devfinder</div>
      <ThemeSwitcher />
   </div>
)
