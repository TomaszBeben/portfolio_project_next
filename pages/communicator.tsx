import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react'

const friends = () => {
  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
          />
          <Input type='text' placeholder='Search' />
        </InputGroup>
      </Stack>
    </>
  )
}

export default friends