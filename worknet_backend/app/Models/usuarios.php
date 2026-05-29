<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    // Le decimos a Laravel el nombre exacto de tu tabla en MySQL
    protected $table = 'usuarios';

    // Definimos qué columnas se pueden llenar/guardar (ajústalas según tus columnas reales)
    protected $fillable = ['apellido', 'ciudad', 'clave', 'correo', 'direccion', 'fecha_nacimiento', 'fecha_registro', 'nombre', 'telefono']; 
    
    // Si tu tabla NO tiene las columnas 'created_at' y 'updated_at', pon esto en false:
    public $timestamps = false; 
}