@extends('layouts.app')

@section('content')
    <h2>Send Promotional Email</h2>
    @if ($errors->any())
        <div>
            <strong>Whoops! Something went wrong!</strong>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="{{ route('promotional-email.send') }}" method="POST">
        @csrf
        <div>
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" value="{{ old('subject') }}" required>
        </div>
        <div>
            <label for="content">Content:</label>
            <textarea id="content" name="content" required>{{ old('content') }}</textarea>
        </div>
        <button type="submit">Send</button>
    </form>
    <a href="{{ route('customers.index') }}">Back to Customer List</a>
@endsection
