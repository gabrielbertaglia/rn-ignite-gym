import { Heading, HStack, Icon, Text, VStack } from '@gluestack-ui/themed'
import { LogOut } from 'lucide-react-native'
import { Avatar } from '../avatar'

export function HomeHeader() {
  return (
    <HStack
      bg="$gray600"
      pt={'$16'}
      pb="$5"
      px="$8"
      alignItems="center"
      gap="$4"
    >
      <Avatar
        source={{ uri: 'https://github.com/gabrielbertaglia.png' }}
        alt="avatar user"
        size="sm"
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá,{' '}
        </Text>
        <Heading color="$gray100" fontSize="$sm">
          Gabriel Bertaglia
        </Heading>
      </VStack>

      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  )
}
