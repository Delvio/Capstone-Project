<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;


class TaskList extends Model
{
    protected $fillable = ['name'];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
