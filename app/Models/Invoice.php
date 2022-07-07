<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = ['business_name', 'code', 'created_at', 'customer_email', 'customer_name', 'hosted_url', 'cid', 'amount', 'currency', 'memo', 'resource', 'status', 'updated_at'];
}
