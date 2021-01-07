@component('mail::message')
# Hello, we've noticed that you forgot your password.

Change your password <a href="http:localhost:3000/reset/{{ $token }}">here</a>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
