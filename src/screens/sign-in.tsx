import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed'

import BackgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'
import { Button } from '@components/button'
import { Input } from '@components/input'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          alt="pessoas treinando"
          w={'$full'}
          h={624}
          defaultSource={BackgroundImg}
          position="absolute"
        />
        <VStack flex={1} px="$10" pb="$16">
          <Center my={'$24'}>
            <Logo />
            <Text color="$gray100" fontSize={'$sm'}>
              Treine sua mente e o seu corpo
            </Text>
          </Center>
          <Center gap="$2">
            <Heading color="$gray100">Acesse a conta</Heading>

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />

            <Button>Acessar</Button>
          </Center>
          <Center flex={1} justifyContent="flex-end" mt="$4" gap="$3">
            <Text color="$gray100" fontSize={'$sm'}>
              Ainda não tem acesso?{' '}
            </Text>

            <Button variant="outline" onPress={handleNewAccount}>
              Criar conta
            </Button>
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  )
}