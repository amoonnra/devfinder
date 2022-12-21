import styles from "./SearchForm.module.scss"
import { ReactComponent as SearchIcon } from "assets/icon-search.svg"
import { Button } from "components/Button"
import React, { useRef } from "react"

interface SearchFormProps {
   onSubmit(text: string): void
   hasError: boolean
}

type FormFields = {
   username: HTMLInputElement
}

export const SearchForm = ({ hasError, onSubmit }: SearchFormProps) => {
   const handleSubmit = (
      event: React.FormEvent<HTMLFormElement & FormFields>
   ) => {
      event.preventDefault()

      const text = event.currentTarget.username.value
      if (text) {
         onSubmit(text)
         event.currentTarget.reset()
      }
   }

   return (
      <form onSubmit={handleSubmit} autoComplete='off'>
         <div className={styles.search}>
            <label htmlFor='search' className={styles.label}>
               <SearchIcon />
            </label>
            <input
               type='text'
               className={styles.textField}
               id='search'
               name='username'
               placeholder='Search GitHub username...'
            />
            {hasError && <div className={styles.error}>No results</div>}
            <Button>Search</Button>
         </div>
      </form>
   )
}
