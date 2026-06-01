<?php
namespace App\Http\Controllers;
use App\Models\Documento;
use Illuminate\Http\Request;

class DocumentoController extends Controller {
    public function index() {
        $documentos = Documento::all();
        return response()->json($documentos, 200);
    }
}