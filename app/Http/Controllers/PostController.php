<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //assignmentTask 9
    public function index()
    {
        $posts = Post::with('category')->get();
        return view('posts', compact('posts'));
    }

    //assignmentTask 6
    public function gettingNumberOfPosts()
    {


        $category = 1; // Get the category model dynamically
        $post = new Post();
        $postsCount = $post->getPostsCountByCategory($category);

        echo "Total posts in category {$category}: {$postsCount}";
    }

    //assignmentTask 7
    public function delete($id)
    {
        $post = Post::find($id);

        $post->delete();
    }

    //assignmentTask 8
    public function showSoftDeletedPosts()
    {
        $softDeletedPosts = Post::getSoftDeletedPosts();

        return view('soft_deleted', compact('softDeletedPosts'));
    }
}
