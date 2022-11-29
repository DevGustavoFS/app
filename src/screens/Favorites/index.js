import React, { useEffect, useState } from 'react'
import { Text, GridList, Container } from '~/components'
import { useFavorites } from '~/services/hooks/'

export const FavoritesScreen = ({ navigation }) => {
  const [favoritesList, setFavoritesList] = useState([])
  const { getFavorites } = useFavorites()

  const callGetFavorites = async () => {
    const favorites = await getFavorites()
    setFavoritesList(favorites)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      callGetFavorites()
    })

    return unsubscribe
  }, [])

  return (
    <Container align="center" justify="center">
      <Text fontFamily="bold" size={28} mb={24} mt={50}>
        Favoritos
      </Text>
      <GridList type="favorites" data={favoritesList} />
    </Container>
  )
}
