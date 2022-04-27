import React from 'react';
import { Box, Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    useDisclosure,
    UnorderedList} from '@chakra-ui/react';
import { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";

export default function MenuItem(props) {
    const [buttonText, setButtonText] = useState("Favorite"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
    const [consumedButtonText, setConsumedButtonText] = useState("mark as consumed");

    const changeText = () => {
        const menu_item_user ={
            menu_item_id:props.menu_item_id,
            user_id:1 // CHANGE if we get some sort of login 
        }
        if(buttonText === 'Favorite'){
            setButtonText('unfavorite');
            fetch('http://localhost:8080/api/insertUserFavMenuItem', {
                method: 'POST',
                body: JSON.stringify(menu_item_user),
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json())
            .then(json => console.log(json));

        } else {
            fetch('http://localhost:8080/api/removeUserFavMenuItem', {
                method: 'POST',
                body: JSON.stringify(menu_item_user),
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json())
            .then(json => console.log(json));
            setButtonText('Favorite');
        }
        
    }

    const changeTextForConsumed = () => {
      const menu_item_user ={
          menu_item_id:props.menu_item_id,
          user_id:1
      }

      if(consumedButtonText === 'mark as consumed'){
        setConsumedButtonText('Remove from consumed');
          fetch('http://localhost:8080/api/insertUserMeal', {
              method: 'POST',
              body: JSON.stringify(menu_item_user),
              headers: { 'Content-Type': 'application/json' }
          }).then(res => res.json())
          .then(json => console.log(json));

      } else {
          fetch('http://localhost:8080/api/removeUserMeal', {
              method: 'POST',
              body: JSON.stringify(menu_item_user),
              headers: { 'Content-Type': 'application/json' }
          }).then(res => res.json())
          .then(json => console.log(json));
          setConsumedButtonText('mark as consumed');
      }
      
  }


  
    return (
    <Box bg='#8eddf5' w='50%' p={4} color='white'>
        <text> {props.name}  </text>
        <text style={{fontWeight: "bold"}}> calories: {props.calories}</text>
        <Text>{`\n`}</Text>
        <text> {props.rname}  </text>
        <Text>{`\n`}</Text>
        <Button onClick={() => changeText()}>{buttonText}</Button>
        <Button onClick={() => changeTextForConsumed()}>{consumedButtonText}</Button>
        <MoreInfoButton menu_item_id={props.menu_item_id} />      

    </Box>   
    )

  }

  function MoreInfoButton(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ingredient_list, setIngredientList] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8080/api/getIngredientsByID/"+ props.menu_item_id)
        .then(res => res.json())
        .then(
          (result) => {
            setIngredientList(result);
          },
 
          (error) => {
          }
        )
    }, [])
        if(ingredient_list){
    return (
      <>
        <Button onClick={onOpen}>more info</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)' />
          <ModalContent>
            <ModalHeader>Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <div>
            <UnorderedList spacing={5}>
                 {ingredient_list.map((item, i) =>  <li key={i}><Ingredient name={item.name} num_of_servings={item.num_of_servings} serving_size={item.serving_size} calories_per_serving={item.calories_per_serving}  /></li>)}
            </UnorderedList>
            </div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )}

    return <></>
  }

  function Ingredient(props) {

  
    return (
    <Box bg='wewe' w='50%' p={4} color='white'>
        <Text> {props.name} {`\n`}
        num of servings: {props.num_of_servings}  serving size: {props.serving_size}  calories_per_serving: {props.calories_per_serving}</Text>
    </Box>   
    )

  }

