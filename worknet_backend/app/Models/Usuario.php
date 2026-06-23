<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'usuarios';
    protected $fillable = [
        'correo',
        'contrasena',
        'fecha_registro',
        'activo',
        
    ];
    public $timestamps = false;
}
