<?php

namespace App\Http\Controllers;
use App\Models\OfertaEmpleo;
use Illuminate\Http\Request;

class OfertaEmpleoController extends Controller
{
    public function index() {
        // Usamos el modelo correcto
        $OfertaEmpleo = OfertaEmpleo::all();
        return response()->json($OfertaEmpleo, 200);
    }
}
