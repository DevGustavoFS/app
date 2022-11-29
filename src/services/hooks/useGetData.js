import { api } from '../api'

export const useGetData = () => {
  const getGames = async () => {
    try {
      const response = await api.get('/games')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getCharacters = async () => {
    try {
      const response = await api.get('/characters')
      return response.data
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getSearchResult = async (query) => {
    try {
      const games = await getGames();
      return games.filter((game) => game.title.toLowerCase().includes(query.toLowerCase()))
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  return {
    getGames,
    getCharacters,
    getSearchResult,
  }
}
