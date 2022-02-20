import { Text, Flex, Box, Divider, Image } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = (): JSX.Element => (
	<>
		<Box height="61em" backgroundColor="#fafafa">
			<Flex flexDirection="column" justifyContent="right">
				<Box width="50%">
					<Flex h="100%" justifyContent="space-between">
						<Box ml="20px">
							<Text width="100%" fontSize="6xl">
								Epishop
							</Text>
							<Text width="200%" fontSize="m">
								All you want, in a single place
							</Text>
						</Box>
					</Flex>
				</Box>
				<Divider border="6px" borderColor="#000000" mt="1.451em" width="99.3%"/>
				<form>
					<Flex flexDirection="column" mt="3%" ml="30%" mr="30%">
						<label>
							<Box mt="20px">
								<Input
									placeholder="User name"
									backgroundColor="#efefef"
									fontWeight="normal"
									color="#949494"
									type="string"
								/>
							</Box>
							<Box mt="40px">
								<Input
									placeholder="Password"
									backgroundColor="#efefef"
									fontWeight="normal"
									color="#949494"
									type="password"
								/>
							</Box>
							<Box mt="40px">
								<Input
									placeholder="Confirm password"
									backgroundColor="#efefef"
									fontWeight="normal"
									color="#949494"
									type="password"
								/>
							</Box>
						</label>
						<Box mt = "60px" ml="44%">
							<input type="submit" value="Sign up"/>
						</Box>
					</Flex>
				</form>
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
							<Image src={require('../images/homologo.png')} alt="homelogo" width="5em" pt="4px" ml="2em"/>
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
							<Image src={require('../images/userlogo.png')} alt="userlogo" width="11em" mt="-0.6em" ml="1em"/>
						</Link>
					</Flex>
				</Box>
			</Flex>
		</Box>
	</>
);

export default Signup;