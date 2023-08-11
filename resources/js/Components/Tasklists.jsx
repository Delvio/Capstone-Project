import React, { useState, useEffect, useRef } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

function Tasklists() {
    const test = usePage().props.taskLists;
    const [taskLists, setTaskLists] = useState([]);
    const [newTaskListName, setNewTaskListName] = useState("");
    const activeTaskList = useRef(null);
    const [editedTask, setEditedTask] = useState({
        taskListIndex: null,
        taskIndex: null,
        name: "",
        completed: null,
    });
    const [editedTaskListName, setEditedTaskListName] = useState({
        taskListIndex: null,
        name: "",
    });

    const handleAddTaskList = () => {
        if (newTaskListName.trim() !== "") {
            let new_task = { name: newTaskListName, tasks: [] };
            setTaskLists([...taskLists, new_task]);
            Inertia.post("/tasklist/create", new_task);
            setNewTaskListName("");
        }
    };

    const handleAddTask = (taskListIndex, taskName, tasklist_id) => {
        if (taskName.trim() !== "") {
            const updatedTaskLists = [...taskLists];
            updatedTaskLists[taskListIndex].tasks.push({
                name: taskName,
                completed: false,
            });
            setTaskLists(updatedTaskLists);
            Inertia.post("/task/create", {
                name: taskName,
                completed: false,
                tasklist_id: tasklist_id,
            });
        }
    };

    const handleToggleTask = (taskListIndex, taskIndex) => {
        const updatedTaskLists = [...taskLists];
        updatedTaskLists[taskListIndex].tasks[taskIndex].completed =
            !updatedTaskLists[taskListIndex].tasks[taskIndex].completed;
        setTaskLists(updatedTaskLists);
    };

    const handleEditTask = (taskListIndex, taskIndex, newName) => {
        const updatedTaskLists = [...taskLists];
        updatedTaskLists[taskListIndex].tasks[taskIndex].name = newName;
        setTaskLists(updatedTaskLists);
        setEditedTask({ taskListIndex: null, taskIndex: null, name: "" });
    };

    const handleEditTaskListName = (taskListIndex, newName) => {
        const updatedTaskLists = [...taskLists];
        updatedTaskLists[taskListIndex].name = newName;
        setTaskLists(updatedTaskLists);
        setEditedTaskListName({ taskListIndex: null, name: "" });
    };

    const handleDeleteTask = (taskListIndex, taskIndex) => {
        const updatedTaskLists = [...taskLists];
        updatedTaskLists[taskListIndex].tasks.splice(taskIndex, 1);
        setTaskLists(updatedTaskLists);
    };

    const handleDeleteTaskList = (taskListIndex) => {
        const updatedTaskLists = taskLists.filter(
            (_, index) => index !== taskListIndex
        );
        setTaskLists(updatedTaskLists);
        activeTaskList.current = null;
    };

    useEffect(() => {
        setTaskLists(test);
    }, [activeTaskList]);

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            <div className="w-full md:w-1/4 bg-white p-4">
                <h2 className="text-xl font-semibold mb-4">Task Lists</h2>
                <ul>
                    {taskLists.map((taskList, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer py-2 px-4 rounded-md mb-1 ${
                                activeTaskList.current === index
                                    ? "bg-blue-200"
                                    : "hover:bg-gray-100"
                            }`}
                            onClick={() => {
                                activeTaskList.current = index;
                                console.log("clicked");
                                console.log(
                                    taskLists[activeTaskList.current].id
                                );
                                console.log(activeTaskList);
                            }}
                        >
                            {editedTaskListName.taskListIndex === index ? (
                                <input
                                    type="text"
                                    value={editedTaskListName.name}
                                    onChange={(e) =>
                                        setEditedTaskListName({
                                            ...editedTaskListName,
                                            name: e.target.value,
                                        })
                                    }
                                    onBlur={() => {
                                        handleEditTaskListName(
                                            index,
                                            editedTaskListName.name
                                        );
                                        Inertia.post(`/tasklist/edit`, {
                                            id: taskList.id,
                                            updated_name:
                                                editedTaskListName.name,
                                        });
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleEditTaskListName(
                                                index,
                                                editedTaskListName.name
                                            );
                                            Inertia.post(`/tasklist/edit`, {
                                                id: taskList.id,
                                                updated_name:
                                                    editedTaskListName.name,
                                            });
                                        } else if (e.key === "Escape") {
                                            setEditedTaskListName({
                                                taskListIndex: null,
                                                name: "",
                                            });
                                        }
                                    }}
                                    className="border rounded-md px-2 py-1 w-full"
                                    autoFocus
                                />
                            ) : (
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setEditedTaskListName({
                                            taskListIndex: index,
                                            name: taskList.name,
                                        });
                                    }}
                                >
                                    {taskList.name}
                                </span>
                            )}
                            <button
                                className="text-red-600 ml-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteTaskList(index);
                                    Inertia.post(`/tasklist/delete`, {
                                        id: taskList.id,
                                    });
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Enter a new task list"
                        value={newTaskListName}
                        onChange={(e) => setNewTaskListName(e.target.value)}
                        className="border border-gray-300 rounded-md px-2 py-1 w-full"
                    />
                    <button
                        className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2"
                        onClick={handleAddTaskList}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className="w-full md:flex-1 p-4">
                {activeTaskList.current !== null ? (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            {taskLists[activeTaskList.current].name}
                            <button
                                className="text-red-600 ml-2"
                                onClick={() => {
                                    handleDeleteTaskList(
                                        activeTaskList.current
                                    );
                                    Inertia.post(`/tasklist/delete`, {
                                        id: tasklist.id,
                                    });
                                }}
                            >
                                Delete List
                            </button>
                        </h2>
                        <ul>
                            {taskLists[activeTaskList.current]["tasks"].map(
                                (task, taskIndex) => (
                                    <li
                                        key={taskIndex}
                                        className="mb-2 flex items-center"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => {
                                                handleToggleTask(
                                                    activeTaskList.current,
                                                    taskIndex
                                                );
                                                Inertia.post("/task/edit", {
                                                    task_id: task.id,
                                                    updated_completed:
                                                        task.completed,
                                                });
                                            }}
                                            className="mr-2"
                                        />
                                        {editedTask.taskListIndex ===
                                            activeTaskList.current &&
                                        editedTask.taskIndex === taskIndex ? (
                                            <input
                                                type="text"
                                                value={editedTask.name}
                                                onChange={(e) =>
                                                    setEditedTask({
                                                        ...editedTask,
                                                        name: e.target.value,
                                                    })
                                                }
                                                onBlur={() => {
                                                    handleEditTask(
                                                        activeTaskList.current,
                                                        taskIndex,
                                                        editedTask.name
                                                    );
                                                    Inertia.post("/task/edit", {
                                                        task_id: task.id,
                                                        updated_name:
                                                            editedTask.name,
                                                    });
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") {
                                                        handleEditTask(
                                                            activeTaskList.current,
                                                            taskIndex,
                                                            editedTask.name
                                                        );
                                                        Inertia.post(
                                                            "/task/edit",
                                                            {
                                                                task_id:
                                                                    task.id,
                                                                updated_name:
                                                                    editedTask.name,
                                                            }
                                                        );
                                                    } else if (
                                                        e.key === "Escape"
                                                    ) {
                                                        setEditedTask({
                                                            taskListIndex: null,
                                                            taskIndex: null,
                                                            name: "",
                                                        });
                                                    }
                                                }}
                                                className="border rounded-md px-2 py-1 w-full"
                                                autoFocus
                                            />
                                        ) : (
                                            <span
                                                className={
                                                    task.completed
                                                        ? "line-through cursor-pointer"
                                                        : "cursor-pointer"
                                                }
                                                onClick={() => {
                                                    if (!task.completed) {
                                                        setEditedTask({
                                                            taskListIndex:
                                                                activeTaskList.current,
                                                            taskIndex:
                                                                taskIndex,
                                                            name: task.name,
                                                        });
                                                    }
                                                }}
                                            >
                                                {task.name}
                                            </span>
                                        )}
                                        <button
                                            className="text-red-600 ml-2"
                                            onClick={() => {
                                                handleDeleteTask(
                                                    activeTaskList.current,
                                                    taskIndex
                                                );
                                                Inertia.post(`/task/delete`, {
                                                    task_id: task.id,
                                                });
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </li>
                                )
                            )}
                        </ul>
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Enter a new task"
                                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleAddTask(
                                            activeTaskList.current,
                                            e.target.value,
                                            taskLists[activeTaskList.current].id
                                        );
                                        e.target.value = "";
                                    }
                                }}
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Tasklists;
