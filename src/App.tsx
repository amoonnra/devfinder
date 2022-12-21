import { Container } from "components/Container"
import { Header } from "components/Header"
import { SearchForm } from "components/SearchForm"
import { ThemeSwitcher } from "components/ThemeSwitcher"
import { UserCard } from "components/UserCard"
import { defaultUser } from "mock"
import { useEffect, useState } from "react"
import { GithubError, GithubUser, LocalUser } from "types"
import { extractLocalUser } from "utils/extract-local-user"
import { isGithubUser } from "utils/typeguards"

const BASE_URL = "https://api.github.com"

function App() {
   const [user, setUser] = useState<LocalUser | null>(defaultUser)
   const [isLoading, setLoading] = useState(false)

   const fetchUser = async (username: string) => {
      setLoading(true)
      try {
         const res = await fetch(`${BASE_URL}/users/${username}`)
         const user = (await res.json()) as GithubUser | GithubError
         if (isGithubUser(user)) setUser(extractLocalUser(user))
         else setUser(null)
      } finally {
         setLoading(false)
      }
   }

   return (
      <Container>
         <Header />
         <SearchForm onSubmit={fetchUser} hasError={!user} />
         {user && <UserCard isLoading={isLoading} {...user} />}
      </Container>
   )
}

export default App
