import React, { useEffect, useState } from 'react'
import {
  ScreenScrollContainer,
  Container,
  HomeList,
  Hero,
  Loader,
} from '~/components'
import { useGetData } from '~/services/hooks'

export const Home = () => {
  const { getGames, getCharacters } = useGetData()
  const [loading, setLoading] = useState(true)
  const [games, setGames] = useState([])
  const [characters, setCharacters] = useState([])

  const callGetData = async () => {
    const gamesResponse = await getGames()
    const charactersResponse = await getCharacters()

    if (!gamesResponse.error && !charactersResponse.error) {
      setGames(gamesResponse)
      setCharacters(charactersResponse)
      setLoading(false)
    }
  }

  useEffect(() => {
    callGetData()
  }, [])

  if (loading) {
    return (
      <Container align="center" justify="center">
        <Loader />
      </Container>
    )
  }

  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          ...games[4],
          type: 'Jogo',
        }}
      />
      <HomeList title="Jogos" data={games} type="Jogo" />
      <HomeList
        title="Personagens"
        data={characters}
        type="Personagem"
      />
    </ScreenScrollContainer>
  )
}
