import { useState } from "react"

interface IUser {
    name: string,
    company: string,
    instructor: boolean
}

interface IGames {
    name: string
}

const Games = () => {
    const [user, setUser] = useState<IUser>({
        name: 'christian',
        company: 'coding temple',
        instructor: true
    })

    const [games, setGames] = useState(['Fallen Survivor', 'League of Legends', 'Pokemon', 'Monopoly'])

    return (
        <>
            <h1>Thieves Instructors</h1>
            {user.name}
            <button onClick={() => setUser({...user, name: 'dylan'})}>Change Instructor</button>
            <h1>Thieves Games</h1>
            <ul>
                {games.map(game => <li>{game}</li>)}
            </ul>
            <button onClick={() => setGames(games.map((game) => game === 'League of Legends' ? 'LoL' : game))}>Update Game</button>
        </>
    )
}
export default Games