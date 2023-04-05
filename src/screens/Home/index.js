import {useState } from 'react';
import { Keyboard, KeyboardAvoidingView , Alert } from 'react-native';
import {IonIcons, MaterialIcons} from '@expo/vector-icons'

import {Container, Body, List, ContainerList, Text, Icon} from './styles'

export default function Home(){
  const [task, setTask] = useState(['fazer miojo', 'ensinar react'])
  const [newTask, setNewTask] = useState('')

  async function addTask(){
    setTask([...task, newTask])
    setNewTask('')

    Keyboard.dismiss();
  }

  async function removeTask(item){
    Alert.alert('Deletar tarefa', 'Tem certeza que deseja deletar está tarefa?', 
    [
      {
        text: "Cancelar", onPress=()=> {
          return;
        }
      },
      {
        text: 'OK',
        onPress=()=> setTask(task.filter(tasks => tasks !== item))
      }
    ],
    {cancelable: "false"}
  );
}

  return (
    <>
    <KeyboardAvoidingView keyboardVerticalOffset={0} behavior="padding" style={{flex : 1}}>
      <Container>
        <Body>
          <List data={task} key={item => item.toString()} renderItem={({item}) => (
            <ContainerList>
              <Text>{item}</Text>
              <Icon onPress={removeTask(item)}></Icon>
                <MaterialIcons name = 'delete-forever' size = {25} color = "#f64c75"/>
            </ContainerList>
          )}/>
        </Body>
      </Container>
    </KeyboardAvoidingView>
    </>
  )

}


