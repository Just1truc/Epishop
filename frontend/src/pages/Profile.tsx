import { Text, Flex, Box, Divider, Image } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const Profile = (): JSX.Element => (
	<>
		<Box height="61em" backgroundColor="#fafafa">
			<Flex flexDirection="column" justifyContent="right">
				<Box width="100%">
					<Flex h="100%" justifyContent="space-between">
						<Box ml="20px">
							<Text width="100%" fontSize="6xl">
								Epishop
							</Text>
							<Text width="200%" fontSize="m">
								All you want, in a single place
							</Text>
						</Box>
						<Flex justifyContent={"end"}>
							<Button mt="40%" mr="10%">
								<Link to="/profile/signup">
									<Text width="100%">
										Sign up
									</Text>
								</Link>
							</Button>
							<Button mt="40%" mr="10%">
								<Link to="/profile/login">
									<Text width="100%">
										Login
									</Text>
								</Link>
							</Button>
						</Flex>
					</Flex>
				</Box>
				<Divider border="6px" borderColor="#000000" mt="1.451em" width="99.3%" />
				<Box
					border="1px"
					position="fixed"
					top="85%"
					left="25%"
					right="25%"
					height="100px"
					borderRadius="2xl"
					backgroundColor="#ffffff"
				>
					<Flex justifyContent="space-around">
						<Link to="/">
							<Image src={require('../images/homologo.png')} alt="homelogo" width="5em" pt="4px" ml="2em" />
						</Link>
						<Link to="/add-obj">
							<Image
								src={require('../images/instagramaddbutton-removebg-preview.png')}
								alt="addlogo"
								width="9em"
								mt="-1.6em"
								ml="4em"
								mr="1em"
							/>
						</Link>
						<Link to="/profile">
							<Image src={require('../images/userlogo.png')} alt="userlogo" width="11em" mt="-0.6em" ml="1em" />
						</Link>
					</Flex>
				</Box>
			</Flex>
		</Box>
	</>
);

export default Profile;