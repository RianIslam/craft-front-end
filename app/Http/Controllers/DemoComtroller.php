<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DemoComtroller extends Controller
{
    function DemoAction1(Request $request): string{
        return "DemoComtrollerAction";
    }
    function DemoAction2(Request $request): string{
        return "DemoAction2";
    }
}
