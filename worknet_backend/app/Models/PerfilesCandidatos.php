<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Perfilescandidatos extends Model {
    protected $table = 'perfiles_candidatos';
    protected $fillable = [
    'usuario_id', 
    'primer_nombre', 
    'primer_apellido', 
    'telefono', 
    'direccion', 
    'ciudad', 
    'fecha_nacimiento',
    'profesion_id', // Opcional en el primer paso si lo pides después
    'descripcion_experiencia'
];
    public $timestamps = false;
}