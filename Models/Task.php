<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['name', 'completed'];

    public function taskList()
    {
        return $this->belongsTo(TaskList::class);
    }
}
