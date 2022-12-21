import { LocalUser } from "types"
import styles from "./UserStat.module.scss"

export interface UserStatProps
   extends Pick<LocalUser, "repos" | "followers" | "following"> {
   isLoading: boolean
}

export const UserStat = ({
   repos,
   followers,
   following,
   isLoading,
}: UserStatProps) =>
   !isLoading ? (
      <div className={styles.userStat}>
         <div className={styles.info}>
            <div className={styles.infoTitle}>Repos</div>
            <div className={styles.infoNumber}>{repos}</div>
         </div>
         <div className={styles.info}>
            <div className={styles.infoTitle}>Followers</div>
            <div className={styles.infoNumber}>{followers}</div>
         </div>
         <div className={styles.info}>
            <div className={styles.infoTitle}>Following</div>
            <div className={styles.infoNumber}>{following}</div>
         </div>
      </div>
   ) : (
      <UserStatLoader />
   )

const UserStatLoader = () => (
   <div
      className='loader'
      style={{
         width: "100%",
         height: "5rem",
      }}
   ></div>
)
