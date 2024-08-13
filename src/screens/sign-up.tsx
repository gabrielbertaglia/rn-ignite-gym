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

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
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
          <Center flex={1} gap="$2">
            <Heading color="$gray100">Crie sua conta</Heading>

            <Input placeholder="Nome" />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />

            <Button>Criar e acessar</Button>
          </Center>
          <Center mt="$14">
            <Button variant="outline" onPress={handleGoBack}>
              Voltar para o login
            </Button>
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  )
}
