import { Avatar } from '@components/avatar'
import { Button } from '@components/button'
import { Input } from '@components/input'
import { ScreenHeader } from '@components/screen-header'
import { Center, Heading, Text, VStack } from '@gluestack-ui/themed'
import { ScrollView, TouchableOpacity } from 'react-native'

export function Profile() {
  return (
    <VStack>
      <ScreenHeader>Perfil</ScreenHeader>

      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        <Center mt="$6" px="$10">
          <Avatar
            source={{ uri: 'https://github.com/gabrielbertaglia.png' }}
            size="xl"
            alt="avatar"
          />
          <TouchableOpacity>
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              mt="$2"
              mb="$8"
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Center w="$full" gap="$4">
            <Input placeholder="Nome" bg="$gray600" />
            <Input
              value="gabrielbertaglia@gmail.com"
              bg="$gray600"
              isReadOnly
            />
          </Center>

          <Heading
            alignSelf="flex-start"
            fontFamily="$heading"
            color="$gray200"
            fontSize="$md"
            mt="$12"
            mb="$2"
          >
            Alterar senha
          </Heading>
          <Center w="$full" gap="$4">
            <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry />
            <Input placeholder="Nova senha" bg="$gray600" secureTextEntry />
            <Input
              placeholder="Confirme a nova senha"
              bg="$gray600"
              secureTextEntry
            />

            <Button>Atualizar</Button>
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  )
}
