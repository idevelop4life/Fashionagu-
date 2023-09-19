@props(['status'])

@if ($status)
    <div {{ $attributes->merge(['class' => 'font-medium text-sm text-green-600']) }}>
        {{ $status }}
    </div>
@endif

{{-- @props(['status'])

@if ($status)
    <ul {{ $attributes->merge(['class' => 'text-sm text-red-600 space-y-1']) }}>
        @foreach ((array) $status as $message)
            <li>{{ $message }}</li>
        @endforeach
    </ul>
@endif --}}
