<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PerfilCandidato  extends Model
{
    protected $table = 'perfiles_candidatos';
    protected $fillable = [
        'usuario_id',
        'nombres_completos',
        'edad',
        'telefono',
        'direcccion',
        'ciudad',
        'profesion_id',
        'descripcion_experiencia',
    ];
    public $timestamps = false;
}
