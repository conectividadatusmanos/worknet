<?php

namespace App\Http\Controllers;
use App\Models\DocumentoAdjunto;
use Illuminate\Http\Request;

class DocumentoAdjuntoController extends Controller
{
    public function index() {
        // Usamos el modelo correcto
        $DocumentosAdjuntos = DocumentoAdjunto::all();
        return response()->json($DocumentosAdjuntos, 200);
    }
}
