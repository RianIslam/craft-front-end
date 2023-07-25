<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $user = Auth::user();
        $todos = $user->todos;
        return response()->json($todos);
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        $todo = new Todo();
        $todo->task = $request->input('task');
        $todo->completed = false;

        $user->todos()->save($todo);

        return response()->json(['message' => 'Todo created successfully'], 201);
    }

    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $todo = Todo::where('user_id', $user->id)->findOrFail($id);
        $todo->task = $request->input('task');
        $todo->completed = $request->input('completed', false);
        $todo->save();

        return response()->json(['message' => 'Todo updated successfully'], 200);
    }

    public function destroy($id)
    {
        $user = Auth::user();
        $todo = Todo::where('user_id', $user->id)->findOrFail($id);
        $todo->delete();

        return response()->json(['message' => 'Todo deleted successfully'], 200);
    }
}
