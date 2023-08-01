@extends('layouts.app')

@section('content')
    <h2>Customer Details</h2>
    <p><strong>Name:</strong> {{ $customer->name }}</p>
    <p><strong>Email:</strong> {{ $customer->email }}</p>
    <p><strong>Contact Number:</strong> {{ $customer->contact_number }}</p>
    <!-- Add other relevant fields here -->
    <a href="{{ route('customers.index') }}">Back to Customer List</a>
@endsection
