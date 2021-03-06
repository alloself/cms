<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = ['ticket_id', 'creator_id', 'content'];

    public function creator()
    {
        return $this->belongsTo(User::class);
    }

}
