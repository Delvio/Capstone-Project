<?php

namespace App\Http\Controllers;

use App\Models\TaskList;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TaskListController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $taskLists = $user->taskLists()->with('tasks')->get();
        return Inertia::render('Dashboard', ["taskLists" => $taskLists]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        if ($request->input("name") != "") {
            $user->taskLists()->create([
                'name' => $request->input('name'),
            ]);
        }
    }

    public function update(Request $request)
    {
        $taskList = TaskList::find($request->input("id"));
        if ($request->input("updated_name") != "") {
            $taskList->name = $request->input('updated_name');
            $taskList->save();
        }
    }

    public function destroy(Request $request)
    {
        $taskList = TaskList::find($request->input("id"));
        $taskList->delete();
    }
}
