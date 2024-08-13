import { ExerciseCard } from '@components/exercise-card'
import { Group } from '@components/group'
import { HomeHeader } from '@components/home/home-header'
import { FlatList, Heading, HStack, Text, VStack } from '@gluestack-ui/themed'
import { useState } from 'react'

export function Home() {
  const [groupSelected, setGroupSelected] = useState('Costa')
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Triceps', 'Ombro'])
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terra',
  ])

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLowerCase() === item.toLowerCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 12 }}
        showsHorizontalScrollIndicator={false}
        style={{
          marginVertical: 40,
          maxHeight: 44,
          minHeight: 44,
        }}
      />

      <VStack px="$8" flex={1} mb="$5">
        <HStack justifyContent="space-between" mb="$5" alignItems="center">
          <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
            Exercícios
          </Heading>
          <Text color="$gray200" fontSize="$sm" fontFamily="$body">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={() => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
        />
      </VStack>
    </VStack>
  )
}
