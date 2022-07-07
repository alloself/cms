<?php

namespace App\Http\Controllers\Api\Account;

use App\Http\Controllers\Controller;
use App\Models\Invoice;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use App\Models\Transaction;
use Illuminate\Support\Facades\Log;

class CoinbaseController extends Controller
{
    public function createInvoice(Request $request)
    {
        $user = Auth::user();
        $response = Http::withHeaders([
            'X-CC-Api-Key' => env('COINBASE_API_KEY'),
            'X-CC-Version' => '2018-03-22'
        ])->post('https://api.commerce.coinbase.com/invoices', [
            'business_name' => 'UNION test',
            'customer_email' => $user->email,
            'customer_name' => $user->first_name,
            'local_price' => [
                'amount' => $request->payment,
                'currency' => 'USD'
            ],
            "memo" => "Taxes and Accounting Services"

        ]);

        Log::alert(json_encode($response));


        $data = array_merge($response['data'], [
            'cid' => $response['data']['id'],
            'amount' => $response['data']['local_price']['amount'],
            'currency' => $response['data']['local_price']['currency'],
        ]);
        Invoice::create($data);
        return $data['hosted_url'];
    }

    public function paidedInvoice(Request $request)
    {
        $invoice = Invoice::where('cid', $request['event']['data']['id'])->first();

        if ($invoice && (($invoice->amount === $request['event']['data']['local_price']['amount']) && ($invoice->currency === $request['event']['data']['local_price']['currency']))) {
            $invoice->status = $request['event']['data']['status'];
            $invoice->save();

            $user = User::where('email', $request['event']['data']['customer_email'])->with('ancestors.briefcase')->first();
            $user->balance =  $user->balance + $request['event']['data']['local_price']['amount'];

            $user->save();

            Transaction::create([
                'type' => 'refill',
                'user_id' => $user->id,
                'amount' => $request['event']['data']['local_price']['amount']

            ]);

            foreach ($user->ancestors as $key => $ancestor) {
                $ancestor->referall_amount = $ancestor->referall_amount + $request['event']['data']['local_price']['amount'];
                $ancestor->checkStatus();

                $persentages = str_split($ancestor->briefcase->ref_percentage);
                if (array_key_exists($key, $persentages)) {
                    $ancestor->balance = $ancestor->balance * (floatval($persentages[$key]) / 100);
                }

                $ancestor->save();
            }
        }
        return;
    }
}
