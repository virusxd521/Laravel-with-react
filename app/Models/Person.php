<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    // One person can have many aliases
    public function alias()
    {
        return $this->hasMany(Alias::class);
    }
    
    // Many people can have the same status
    public function status()
    {
            return $this->belongsTo(Status::class);
    }

    // person has only one image
    public function image()
    {
        return $this->belongsTo(Image::class);
    }

    public function selecting($user_search)
    {

        // return $this->all();
        return $this::select('*')->where('name', 'LIKE', '%'.$user_search.'%')->get();
    }


}
