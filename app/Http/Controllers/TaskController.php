<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TaskList;
use App\Models\Task;

class TaskController extends Controller
{
    public function store(Request $request)
    {

        // Retrieve the task list associated with the provided taskListId
        $taskList = TaskList::where('id', $request->input("tasklist_id"))
            ->first();


        $task = new Task([
            'name' => $request->input('name'),
            'completed' => false, // You can set the default value here
        ]);

        $taskList->tasks()->save($task);
    }


    public function update(Request $request)
    {
        $task = Task::find($request->input("task_id"));
        if (null != $request->input('updated_name')) {
            $task->name = $request->input('updated_name');
        }

        if (null != $request->input("updated_completed")) {
            $task->completed = !$task->completed;
        }
        $task->save();
    }

    public function destroy(Request $request)
    {
        $task = Task::where("id", $request->input("task_id"))->first();
        $task->delete();
    }
}
