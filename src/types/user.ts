export type GithubUser = {
   login: string
   id: number
   avatar_url: string
   html_url: string
   name: string
   company: string
   blog: string
   location: string
   bio: string | null
   twitter_username: string | null
   public_repos: number
   followers: number
   following: number
   created_at: string
}

export type LocalUser = {
   login: string
   id: number
   avatar: string
   url: string
   name: string
   company: string
   blog: string
   location: string
   bio: string | null
   twitter: string | null
   repos: number
   followers: number
   following: number
   created: string
}

export type GithubError = {
   message: string
   documentation_url: string
}
