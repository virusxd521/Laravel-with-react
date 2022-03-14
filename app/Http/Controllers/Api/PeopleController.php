<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;


class PeopleController extends Controller
{
    //
    public function index(Request $request)
    {   
        $person = new Person;
        $data = $person->selecting($request['searching']);
        $json_data = json_encode($data);
        // dd($json_data);
        return $json_data;
        // return view('testing.testReact', compact('json_data'));
    }   
}

