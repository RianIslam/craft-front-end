@component('mail::message')
# Promotional Email

{!! $content !!}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
