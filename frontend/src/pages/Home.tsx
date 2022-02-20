import { Text, Flex, Box, Divider, Image, Center, Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDisclosure } from '@chakra-ui/hooks';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

type Objet = {
	Id: number;
	Name: string;
	Price: number;
	Description: string;
	Userid: number;
};

const Home = (): JSX.Element => {
	const [objects, setObjects] = useState<Objet[]>([
		{
			Id: 123,
			Name: 'Lave-vaiselle',
			Price: 230,
			Description: 'Bon état, de seconde main, fonctionnel',
			Userid: 236,
		},
		{
			Id: 456,
			Name: 'méthamphétamine',
			Price: 1245,
			Description: 'Illégal et dangereux',
			Userid: 236,
		},
		{
			Id: 457,
			Name: 'pistolet airsoft',
			Price: 65,
			Description: 'Attention à ne pas perdre les billes. Il ne faut pas tirer sur les gens',
			Userid: 150,
		},
		{
			Id: 457,
			Name: 'pistolet airsoft',
			Price: 65,
			Description: 'Attention à ne pas perdre les billes. Il ne faut pas tirer sur les gens',
			Userid: 150,
		},
		{
			Id: 458,
			Name: 'Noir',
			Price: 30,
			Description: 'Super pot de peiture, première main, toute surface.',
			Userid: 150,
		},
	]);

	const getObjects = () => {
		console.log('check');
		axios
			.get<Objet[]>('http://localhost:8080')
			.then((data) => {
				console.log('salut');
				console.log(data);
				setObjects(data.data);
			})
			.catch((error) => {
				console.log('check2');
				console.log(error);
			});
		axios
			.get<string>('http://localhost:8080/cookie')
			.catch((error) => {
				console.log('check2');
				console.log(error);
			});
	};

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [articleSelected, setArticleSelected] = useState<Objet>(objects[0]);

	useEffect(() => {
		getObjects();
	}, []);

	return (
		<>
			<Box height="max" backgroundColor="#fafafa">
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
							<Flex>
								<Box mt="10px">
									<Input
										placeholder="Rechercher"
										left="25%"
										width="200%"
										top="45%"
										backgroundColor="#efefef"
										fontWeight="normal"
										color="#949494"
										type="text"
									/>
								</Box>
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
				{objects.map((object) => (
					<Flex justifyContent="center" mt="20px" mb="40px">
						<Box
							border="2px"
							width="40em"
							height="15em"
							borderRadius="45px"
							onClick={() => {
								setArticleSelected(object);
								setModalIsOpen(true);
							}}
						>
							<Flex alignItems="row" justifyContent="space-between">
								<Box borderRight="1px" width="20em" height="15em"></Box>
								<Box height="15em">
									<Flex flexDirection="column">
										<Box borderLeft="1px" borderBottom="1px" height="7.5em">
											<Flex alignItems="center" flexDirection="column">
												<Text fontSize="20px" fontWeight="bold">
													{' '}
													{object.Name} à vendre
												</Text>
												<Text fontSize="15px"> {object.Description}</Text>
											</Flex>
										</Box>
										<Box borderLeft="1px" borderTop="1px" width="20em" height="7.5em">
											<Flex justifyContent="center" alignItems="center" mt="18px">
												<Text fontSize="50px"> {object.Price}€</Text>
											</Flex>
										</Box>
									</Flex>
								</Box>
							</Flex>
						</Box>
					</Flex>
				))}
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</Box>
			<Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
				<ModalOverlay />
				<ModalContent width="700px" maxWidth="700px" height="600px" maxHeight="600px">
					<ModalHeader>
						<Box>
							<Text fontSize="50px">{articleSelected.Name}</Text>
						</Box>
						<Box>
							<Text fontSize="30px">{articleSelected.Price}€</Text>
						</Box>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text fontSize="20px">{articleSelected.Description}</Text>
					</ModalBody>
					<ModalFooter borderTop="1px" width="">
						<Box width="1000px" maxWidth="1000px">
							<Flex justifyContent="space-around">
								<Button colorScheme="blue">
									<AddIcon w={6} h={6} onClick={() => setModalIsOpen(false)} />
								</Button>
							</Flex>
						</Box>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Home;
