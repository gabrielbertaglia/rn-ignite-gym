import { Center, Heading } from '@gluestack-ui/themed'

interface ScreenHeaderProps {
  children: string
}

export function ScreenHeader({ children }: ScreenHeaderProps) {
  return (
    <Center bg="$gray600" pb="$6" pt="$16">
      <Heading color="$gray100" fontSize="$xl" fontFamily="$heading">
        {children}
      </Heading>
    </Center>
  )
}
