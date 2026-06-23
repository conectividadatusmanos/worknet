<?php
namespace App\Http\Controllers;
use App\Models\TipoDocumento;
use Illuminate\Http\Request;

class TipoDocumentoController extends Controller
{
    public function index() {
        $TipoDocumento = TipoDocumento::all();
        return response()->json($TipoDocumento, 200);
    }
}
