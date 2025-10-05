export const addItemToServer = async (task,date) => {
  const response = await fetch(fetch(`${process.env.REACT_APP_API_URL}/api/todo`)
,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({task,date})
  })
  const item = await response.json()
  console.log("item :: ",item)
  // return  response.json();
  return mapServerItemToLocalItem(item);
}

export const getItemsFromServer = async () =>{
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/todo`,{
    method: "GET",
  })
  
  const items = await response.json();
  return items.map(item => mapServerItemToLocalItem(item));
}

export const markItemCompletedOnServer = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/todo/${id}/completed`,{
    method: "PUT"
  })

  const item = await response.json();
  return mapServerItemToLocalItem(item);
}

export const deleteItemFromServer = async(id) => {
  const response = fetch(`${process.env.REACT_APP_API_URL}/api/todo/${id}`,{
    method:"DELETE"
  })
  const item = await response.json();
  return item._id;
}


const mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt : serverItem.updatedAt,
  }
}