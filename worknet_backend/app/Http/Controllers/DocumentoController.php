<?php

namespace App\Http\Controllers;

use App\Models\Documentos; // <-- 1. Importamos en plural
use Illuminate\Http\Request;

class DocumentoController extends Controller
{
    public function index()
    {
        // 2. Usamos el modelo en plural
        $documentos = Documentos::all();
        
        return response()->json($documentos, 200);
    }
}