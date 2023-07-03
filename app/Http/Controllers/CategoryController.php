<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //assignmentTask 11
    public function index($id)
    {

        $category = Category::find($id); // Get the category model dynamically
        $latestPost = $category->getLatestPost();

        if ($latestPost) {
            echo "Latest post in category {$category->name}: {$latestPost->title}";
        } else {
            echo "No posts found in category {$category->name}";
        }
    }

    //assignmentTask 12
    public function latestPostForEachCategory()
    {
        $categories = Category::get();
        //dd($categories);
        return view('latestcategory', compact('categories'));
    }

    //assignmentTask 10
    public function getPosts($id)
    {
        $category = Category::find($id);

        $posts = $category->posts()->get();

        return view('getposts', compact('category', 'posts'));
    }
}
