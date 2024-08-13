import {
  Button as ButtonGluestack,
  ButtonSpinner,
  Text,
} from '@gluestack-ui/themed'
import React, { ComponentProps } from 'react'

type ButtonProps = ComponentProps<typeof ButtonGluestack> & {
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  isLoading?: boolean
}

export function Button({
  children,
  variant = 'solid',
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonGluestack
      w="$full"
      h="$14"
      bg={variant === 'outline' ? 'transparent' : '$green700'}
      borderWidth={variant === 'outline' ? '$1' : '$0'}
      borderColor="$green500"
      rounded="$sm"
      $active-bg={variant === 'outline' ? '$green700' : '$green500'}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <Text
          color={variant === 'outline' ? '$green500' : '$white'}
          fontFamily="$heading"
          fontSize="$sm"
        >
          {children}
        </Text>
      )}
    </ButtonGluestack>
  )
}
