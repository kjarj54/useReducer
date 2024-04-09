export interface AddTaskAction {
    type: "ADD_TASK";
    payload: Task;
  }
  
  export interface EditTaskAction {
    type: "EDIT_TASK";
    payload: Task;
  }
  
  export interface DeleteTaskAction {
    type: "DELETE_TASK";
    payload: number;
  }
  
  export interface SetFilterAction {
    type: "SET_FILTER";
    payload: string;
  }

  export interface AddTaskIfEmpty{
    type: "ADD_TASK_IF_EMPTY";
    
  }
  
  interface Task {
    id: number;
    title: string;
  }
  
  export type Action = AddTaskAction | EditTaskAction | DeleteTaskAction | SetFilterAction | AddTaskIfEmpty;