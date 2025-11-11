<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $table = 'addresses';
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'full_name',
        'phone',
        'address_line',
        'city',
        'district',
        'ward',
        'is_default',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
