@extends('layouts.app')

@section('content')
    <h2>Customer List</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($customers as $customer)
                <tr>
                    <td>{{ $customer->name }}</td>
                    <td>{{ $customer->email }}</td>
                    <td>{{ $customer->contact_number }}</td>
                    <td>
                        <a href="{{ route('customers.show', $customer) }}">View</a>
                        <a href="{{ route('customers.edit', $customer) }}">Edit</a>
                        <form action="{{ route('customers.destroy', $customer) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <a href="{{ route('customers.create') }}">Add New Customer</a>
@endsection
