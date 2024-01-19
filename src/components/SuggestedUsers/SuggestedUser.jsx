import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
const SuggestedUser = ({followers, name, avatar}) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex>
            <Avatar src={avatar} name={name} size={'md'}/>
            <VStack spacing={2} mx={3}>
                <Box fontSize={12} fontWeight={"bold"}>
                    {name}
                </Box>
                <Box fontSize={11} color={"gray.500"}>
                    {followers} followers
                </Box>
            </VStack>
        </Flex>
        <Button>Follow</Button>
    </Flex>
  )
}

export default SuggestedUser