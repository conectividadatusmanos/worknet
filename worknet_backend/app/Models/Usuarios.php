<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Usuarios extends Model {
    protected $table = 'usuarios';
    protected $fillable = ['nombre', 'email', 'password'];
    public $timestamps = false;
}