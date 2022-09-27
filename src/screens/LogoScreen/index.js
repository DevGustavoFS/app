import React, { useEffect } from 'react'
import { Text, Logo, Container } from '../../components'

export const LogoScreen = ({ navigation }) => {

  useEffect (() => {
    setTimeout(() => {
        navigation.navigate('Home')
    }, 1000);
  }, [navigation])

  return (
    <Container align="center" justify="center">
      <Logo />
      <Text fontFamily="bold">God Of War - Wiki</Text>
    </Container>
  )
}
