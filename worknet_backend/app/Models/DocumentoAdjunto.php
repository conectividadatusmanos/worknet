<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DocumentoAdjunto extends Model
{
    protected $table = 'documentos_adjuntos';
    protected $fillable = ['usuario_id', 'tipo_documento_id', 'ruta_archivo', 'fecha_subida', 'fecha_vencimiento', 'estado_verificacion'];
    public $timestamps = false;
}
