import ToDoList from "./ToDoListComp";

const HomepageComp = () => {
  return (
    <div className="HomepageContainer">
      <h1 className="PageTitle">ToDo List</h1>
      <button title="AddToDo" className="AddToDoBtn">
        Add ToDo
      </button>
      <ToDoList />
    </div>
  );
};

export default HomepageComp;
