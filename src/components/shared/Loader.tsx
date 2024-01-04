import { Spinner } from '@chakra-ui/react'

interface Props {
	size: string
}

export default function Loader( {size}: Props ) {
  return (
	<Spinner size={size} />
  )
}
