<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\PromotionalEmail;

class PromotionalEmailController extends Controller
{
    public function create()
    {
        return view('promotional_email.create');
    }

    public function send(Request $request)
    {
        $request->validate([
            'subject' => 'required|string',
            'content' => 'required|string',
        ]);

        $subject = $request->input('subject');
        $content = $request->input('content');

        // Sending the email to all customers in the database
        $customers = \App\Models\Customer::all();
        foreach ($customers as $customer) {
            Mail::to($customer->email)->send(new PromotionalEmail($subject, $content));
        }

        return redirect()->route('promotional-email.create')->with('success', 'Promotional email sent successfully.');
    }
}
