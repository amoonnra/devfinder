import { GithubUser, LocalUser } from "types"

export const extractLocalUser = (user: GithubUser): LocalUser => ({
   ...user,
   avatar: user.avatar_url,
   url: user.html_url,
   twitter: user.twitter_username,
   repos: user.public_repos,
   created: user.created_at,
})
