const ToDoListComp = () => {
  const ToDoItemsMap = [
    { id: 1, title: "Item", time: "03 hrs" },
    { id: 2, title: "Item", time: "15 mins" },
    { id: 3, title: "Item", time: "Aug 3" },
    { id: 1, title: "Item", time: "03 hrs" },
    { id: 2, title: "Item", time: "15 mins" },
    { id: 3, title: "Item", time: "Aug 3" },
    { id: 1, title: "Item", time: "03 hrs" },
    { id: 2, title: "Item", time: "15 mins" },
    { id: 3, title: "Item", time: "Aug 3" },
  ];
  return (
    <div className="ToDoList">
      {ToDoItemsMap.map((ToDoItem) => (
        <div className="ToDoItem">
          <p className="ToDoTitle">{ToDoItem.title}</p>
          <p className="ToDoTime">{ToDoItem.time}</p>
        </div>
      ))}
    </div>
  );
};

export default ToDoListComp;
