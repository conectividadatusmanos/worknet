<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OfertaEmpleo extends Model
{
    protected $table = 'ofertas_empleo';
    protected $fillable = [
        'empresa_id',
        'profesion_requerida_id',
        'titulo_oferta',
        'descripcion_oferta',
        'salario_ofrecido',
        'tipo_contrato',
        'barrio_zona',
        'estado',
    ];
    public $timestamps = false;
}
