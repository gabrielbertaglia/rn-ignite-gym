/* eslint-disable jsx-a11y/alt-text */
import { Image } from '@gluestack-ui/themed'
import { ComponentProps } from 'react'

type PropsAvatar = ComponentProps<typeof Image>

export function Avatar({ ...rest }: PropsAvatar) {
  return (
    <Image
      rounded="$full"
      borderWidth="$2"
      borderColor="$gray400"
      backgroundColor="$gray500"
      {...rest}
    />
  )
}
