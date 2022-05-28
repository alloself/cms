@extends('layouts.site')
@section('content')
<div class="main-section">
    @foreach ($blocks as $block)
    <x-block :block="$block"></x-block>
    @endforeach
</div>
@endsection
