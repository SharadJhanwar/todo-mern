import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useEffect, useState } from "react";
import { addItemToServer, deleteItemFromServer, getItemsFromServer, markItemCompletedOnServer  } from "./services/itemService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const items = await getItemsFromServer();
        setTodoItems(items)
      }catch(error){
        console.log("Failed to fetch items : ",error);
      }
    }

    fetchData();
  },[])

  //handle new item
  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    
    const serverItem = await addItemToServer(itemName,itemDueDate)
    console.log("Server Item : ",serverItem)

    const newTodoItems = [
      ...todoItems,
      serverItem,
    ];
    setTodoItems(newTodoItems);
  };

  //handle delete function
  const handleDeleteItem = async (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
    const deletedId = await deleteItemFromServer(id)

  };

  const handleCompletedItem = async (id) => {
    await markItemCompletedOnServer(id);
    let notCompleted = []
    let Completed = []
    const items = await getItemsFromServer();
    items.forEach((item)=>{
      if(item.completed) {
        Completed.push(item);
      }else{
        notCompleted.push(item);
      }
    })
    setTodoItems([...notCompleted,...Completed]);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
        onMarkCompleted = {handleCompletedItem}
      ></TodoItems>
    </center>
  );
}

export default App;
