import { VStack, Box } from '@chakra-ui/react'
import { Flex, Avatar, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
import "../index.css"

const UserHeader = () => {
    return (
        <VStack gap={4} alignItems={"start"}>
            <Flex justifyContent={'space-between'} w={'full'}>
                <Box>
                    <Text fontSize={"2xl"}>
                        Mark Zuckerberg
                    </Text>
                    <Flex gap={2} alignItems={"center"}>
                        <Text fontSize={"sm"}>markZuckerberg</Text>
                        <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} borderRadius={"full"} padding={1}>threads.net</Text>
                    </Flex>
                </Box>
                <Box>
                    <Avatar
                        name='Mark'
                        src='/zuck-avatar.png'
                        size={'xl'}
                    />
                </Box>
            </Flex>
            <Text  >Mark Zuckerberg is the founder of Facebook, and one of the richest people in the world.</Text>

            <Flex w={"full"} justifyContent={"space-between"} >
                <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.light"} >3k Followers</Text>
                    <Box w={1} h={1} bg={"gray.light"} borderRadius={"full"} ></Box>
                    <Link color={"gray.light"} >instagram.com</Link>
                </Flex>
                <Flex >
                    <Box className='icon-container'>
                        <BsInstagram size={24} cursor={"pointer"} />
                    </Box>
                    <Box className='icon-container'>
                        <CgMoreO size={24} cursor={"pointer"} />
                    </Box>
                </Flex>
            </Flex>
        </VStack>
    )
}

export default UserHeader
