import React from 'react'
import { ButtonContainer } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { Text } from '~/components/atoms'
import { theme } from '~/styles/theme'

export const PlayButton = ({ onPress }) => (
  <ButtonContainer onPress={onPress}>
    <Ionicons
      name="play"
      size={theme.metrics.px(12)}
      color={theme.colors.black}
    />
    <Text fontFamily="bold" size={14} color="black">
      Ver Trailer
    </Text>
  </ButtonContainer>
)
