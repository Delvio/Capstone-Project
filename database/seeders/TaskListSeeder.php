<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TaskList;
use App\Models\User;

class TaskListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Get all users
        $users = User::all();

        // Create task lists for each user
        foreach ($users as $user) {
            $user->taskLists()->createMany([
                ['name' => 'Personal Tasks'],
                ['name' => 'Work Tasks'],
            ]);
        }
    }
}
