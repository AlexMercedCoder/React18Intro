import { useEffect, useState } from "react"

function APIData(){

    const [pokemon, setPokemon] = useState([])

    const getPokemon = async () => {
        const response = await fetch("https://dummydata.netlify.app/pokedex.json")
        const json = await response.json()
        setPokemon(json.pokemon)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    if (pokemon.length <= 0){
        return <h1>There is No Pokemon</h1>
    }

    return <div className="pokemon">
        {pokemon.map((poke) => {
            return <div key={poke.id}>
                <h1>{poke.name}</h1>
                <img src={poke.img} alt={poke.name}/>
            </div>
        })}
    </div>
}

export default APIData