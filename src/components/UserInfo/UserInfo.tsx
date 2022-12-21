import { InfoItem, InfoItemProps } from "components/InfoItem"
import { LocalUser } from "types"
import styles from "./UserInfo.module.scss"

import { ReactComponent as CompanyIcon } from "assets/icon-company.svg"
import { ReactComponent as LocationIcon } from "assets/icon-location.svg"
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg"
import { ReactComponent as BlogIcon } from "assets/icon-website.svg"

interface UserInfoProps
   extends Pick<LocalUser, "blog" | "company" | "location" | "twitter"> {
   isLoading: boolean
}

export const UserInfo = ({
   blog,
   company,
   location,
   twitter,
   isLoading,
}: UserInfoProps) => {
   const items: InfoItemProps[] = [
      {
         icon: <CompanyIcon />,
         text: company,
      },
      {
         icon: <LocationIcon />,
         text: location,
      },
      {
         icon: <TwitterIcon />,
         text: twitter,
         isLink: true,
      },
      {
         icon: <BlogIcon />,
         text: blog,
         isLink: true,
      },
   ]
   return (
      <div className={styles.userInfo}>
         {items.map((item, idx) =>
            !isLoading ? <InfoItem key={idx} {...item} /> : <UserInfoLoader />
         )}
      </div>
   )
}

const UserInfoLoader = () => (
   <div
      className='loader'
      style={{
         width: "100%",
         height: "1.5rem",
      }}
   ></div>
)
