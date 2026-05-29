<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Usuario extends Model
{
    // Definimos la tabla si se llama diferente al plural del modelo
    protected $table = 'usuarios';

    // Campos que permitimos que se llenen desde el formulario de React
    protected $fillable = [
        'usuario', 'clave', 'nombre', 'apellido', 
        'telefono', 'correo_electronico', 'direccion', 
        'ciudad', 'fecha_nacimiento'
    ];

    // Relación: Un usuario TIENE MUCHOS documentos
    public function documentos(): HasMany
    {
        return $this->hasMany(Documento::class, 'usuario_id');
    }
}