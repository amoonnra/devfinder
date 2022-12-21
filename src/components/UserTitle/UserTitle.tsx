import { ReactElement } from "react"
import { LocalUser } from "types"
import styles from "./UserTitle.module.scss"
import ContentLoader from "react-content-loader"

interface UserTitleProps
   extends Pick<LocalUser, "name" | "login" | "created" | "url"> {
   isLoading: boolean
}

const localDate = new Intl.DateTimeFormat("en-GB", {
   day: "numeric",
   month: "short",
   year: "numeric",
})

export const UserTitle = ({
   name,
   login,
   created,
   url,
   isLoading,
}: UserTitleProps) => {
   const joindDate = localDate.format(new Date(created))

   return !isLoading ? (
      <div className={styles.userTitle}>
         <h2>{name}</h2>
         <a target='_blank' rel='norefer' href={url}>
            {login}
         </a>
         <span>{joindDate}</span>
      </div>
   ) : (
      <UserTitleLoader />
   )
}

const UserTitleLoader = () => (
   <div>
      <div
         className='loader'
         style={{
            height: "2rem",
            marginBottom: "1rem",
         }}
      ></div>
      <div
         className='loader'
         style={{
            width: "50%",
            height: "2rem",
         }}
      ></div>
   </div>
)
