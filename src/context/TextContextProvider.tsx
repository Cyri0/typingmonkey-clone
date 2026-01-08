import { createContext, useContext, useEffect, useState } from "react"

type TextContextType = {
    text: string[]
}

const TextContext = createContext<TextContextType|undefined>(undefined)

const TextContextProvider = ({children}:{children: React.ReactNode}) => {
  const [textLines, setTextLines] = useState<string[]>([])
  
  useEffect(()=>{
    fetch("data.json")
    .then(response => response.json())
    .then(data => setTextLines(data.text))
  },[])

  return (
    <TextContext.Provider value={{text:textLines}}>
        {children}
    </TextContext.Provider>
  )
}

export const useTextContext = () => {
    const ctx = useContext(TextContext)
    if(!ctx){
        throw new Error("Something went wrong, I can feel it. (TextContext)")
    }
    return ctx
}

export default TextContextProvider