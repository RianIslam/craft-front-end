<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // Define the table associated with the model
    protected $table = 'products';
    
    // Define the fillable attributes of the model
    protected $fillable = ['name', 'price', 'description'];
    
    // Define any additional methods or relationships here
}
