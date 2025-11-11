<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;

    protected $table = 'discounts';
    public $timestamps = false;

    protected $fillable = [
        'code',
        'percentage',
        'start_date',
        'end_date',
        'is_active',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
