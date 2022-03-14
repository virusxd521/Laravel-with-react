<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    
    
    // One person can have one image
    public function person(){
        return $this->hasOne(person::class);
    }

}
