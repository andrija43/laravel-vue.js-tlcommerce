@extends('core::base.layouts.master')
@section('title')
    {{ translate('Edit Slider') }}
@endsection
@section('main_content')
    <div class="row">
        <div class="col-lg-7 mx-auto">
            <div class="form-element py-30 mb-30">
                <h4 class="font-20 mb-30">{{ translate('Edit Slider') }}</h4>
                <form action="{{ route('theme.tlcommerce.sliders.update') }}" method="POST">
                    @csrf
                    <div class="form-row mb-20">
                        <div class="col-sm-4">
                            <label class="font-14 bold black">{{ translate('Title') }} </label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text" name="title" class="theme-input-style deal_title"
                                value="{{ $slider_details->title }}" placeholder="{{ translate('Type title') }}">
                            <input type="hidden" name="id" class="theme-input-style deal_title"
                                value="{{ $slider_details->id }}">
                            @if ($errors->has('title'))
                                <div class="invalid-input">{{ $errors->first('title') }}</div>
                            @endif
                        </div>
                    </div>
                    <div class="form-row mb-20">
                        <div class="col-sm-4">
                            <label class="font-14 bold black">{{ translate('Url') }} </label>
                        </div>
                        <div class="col-sm-8">
                            <input type="text" name="url" class="theme-input-style"
                                value="{{ $slider_details->url }}" placeholder="{{ translate('Type url') }}">
                            @if ($errors->has('url'))
                                <div class="invalid-input">{{ $errors->first('url') }}</div>
                            @endif
                        </div>
                    </div>
                    <div class="form-row mb-20">
                        <div class="col-sm-4">
                            <label class="font-14 bold black mb-0">{{ translate('Desktop Image') }}</label>
                            <p>1110x450</p>
                        </div>
                        <div class="col-sm-8">
                            @include('core::base.includes.media.media_input', [
                                'input' => 'desktop',
                                'data' => $slider_details->desktop,
                            ])
                            @if ($errors->has('desktop'))
                                <div class="invalid-input">{{ $errors->first('desktop') }}</div>
                            @endif
                        </div>
                    </div>
                    <div class="form-row mb-20">
                        <div class="col-sm-4">
                            <label class="font-14 bold black mb-0">{{ translate('Mobile Image') }}</label>
                            <p>510x300</p>
                        </div>
                        <div class="col-sm-8">
                            @include('core::base.includes.media.media_input', [
                                'input' => 'mobile',
                                'data' => $slider_details->mobile,
                            ])
                            @if ($errors->has('mobile'))
                                <div class="invalid-input">{{ $errors->first('mobile') }}</div>
                            @endif
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-12 text-right">
                            <button type="submit" class="btn long">{{ translate('Save Changes') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    @include('core::base.media.partial.media_modal')
@endsection
@section('custom_scripts')
    <script>
        /**
         * 
         * Media Library
         * */
        initDropzone()
        $(document).ready(function() {
            is_for_browse_file = true
            filtermedia()

        });
    </script>
@endsection
