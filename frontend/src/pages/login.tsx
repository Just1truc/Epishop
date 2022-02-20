import { Text, Flex, Box, Divider, Image } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = (): JSX.Element => (
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
								<Box >
									<Input
										placeholder="Nom d'utilisateur"
										backgroundColor="#efefef"
										fontWeight="normal"
										color="#949494"
										type="text"
									/>
								</Box>
								<Box mt="20px">
									<Input
										placeholder="Mot de passe"
										backgroundColor="#efefef"
										fontWeight="normal"
										color="#949494"
										type="password"
									/>
								</Box>
							</label>
						</Flex>
						<Box width="100px" ml="45%" mt="10px">
							<input type="submit" value="Se connecter" />
						</Box>
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

export default Login;