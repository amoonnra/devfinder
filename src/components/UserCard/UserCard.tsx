import { UserInfo } from "components/UserInfo"
import { UserStat } from "components/UserStat"
import { UserTitle } from "components/UserTitle"
import { LocalUser } from "types"
import styles from "./UserCard.module.scss"
import ContentLoader from "react-content-loader"

interface UserCardProps extends LocalUser {
   isLoading: boolean
}

export const UserCard = (props: UserCardProps) => (
   <div className={styles.userCard}>
      {!props.isLoading ? (
         <img
            src={props.avatar}
            alt={props.login}
            className={styles.avatar}
            width='100%'
            height='auto'
         />
      ) : (
         <AvatarLoader />
      )}
      <UserTitle
         name={props.name}
         login={props.login}
         created={props.created}
         url={props.url}
         isLoading={props.isLoading}
      />
      {!props.isLoading ? (
         <p className={`${styles.bio} ${styles.bio} ? '' : ${styles.empty}`}>
            {props.bio || "This profile`s bio is empty"}
         </p>
      ) : (
         <BioLoader />
      )}
      <UserStat
         repos={props.repos}
         followers={props.followers}
         following={props.following}
         isLoading={props.isLoading}
      />
      <UserInfo
         blog={props.blog}
         company={props.company}
         location={props.location}
         twitter={props.twitter}
         isLoading={props.isLoading}
      />
   </div>
)

const AvatarLoader = () => <div className={`${styles.avatar} loader`}></div>

const BioLoader = () => (
   <div>
      <div
         className='loader'
         style={{
            width: "100%",
            height: "1rem",
         }}
      ></div>
   </div>
)
