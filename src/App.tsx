import { useState } from "react";
import { AddArea } from "./components/AddArea";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import * as C from './App.styles'

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Pagar unisinos', done: false },
    { id: 2, name: 'Pagar Internet', done: true }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />
        
        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;