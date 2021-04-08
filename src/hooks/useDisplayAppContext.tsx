import { createContext, useState } from 'react'

interface IDisplayApp {
  displayApp: boolean
  setDisplayApp: null | React.Dispatch<React.SetStateAction<boolean>>
}

export const DisplayAppContext = createContext<IDisplayApp>({
  displayApp: false,
  setDisplayApp: null,
})

export const useDisplayAppContext = (): IDisplayApp => {
  const [displayApp, setDisplayApp] = useState(false)

  return { displayApp, setDisplayApp }
}
