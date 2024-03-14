import { createContext, useState } from 'react'

interface PokemonContext {
    favPoke: FavPoke
    setFavPoke: React.Dispatch<React.SetStateAction<FavPoke>>
}

interface FavPoke {
    name: string;
    img: string;
    ability: string;
}

export const PokeContext = createContext<PokemonContext>({} as PokemonContext)

export default function PokeContextProvider({children}: {children: React.ReactNode}){

    const [favPoke, setFavPoke] = useState<FavPoke>({
        name: '',
        img: '',
        ability: ''
    })

    const values={
        favPoke,
        setFavPoke
    }

    return(
        <PokeContext.Provider value={values}>
            {children}
        </PokeContext.Provider>
    )

}