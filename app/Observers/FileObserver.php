<?php

namespace App\Observers;

use App\Models\File;
use Illuminate\Support\Facades\Storage;

class FileObserver
{
    /**
     * Handle the file "created" event.
     *
     * @param  \App\Models\file  $file
     * @return void
     */
    public function created(File $file)
    {
        //
    }

    /**
     * Handle the file "updated" event.
     *
     * @param  \App\Models\file  $file
     * @return void
     */
    public function updated(File $file)
    {
        //
    }

    /**
     * Handle the file "deleted" event.
     *
     * @param  \App\Models\file  $file
     * @return void
     */
    public function deleted(File $file)
    {
        Storage::delete($file->path);
    }

    /**
     * Handle the file "restored" event.
     *
     * @param  \App\Models\file  $file
     * @return void
     */
    public function restored(File $file)
    {
        //
    }

    /**
     * Handle the file "force deleted" event.
     *
     * @param  \App\Models\file  $file
     * @return void
     */
    public function forceDeleted(File $file)
    {
        //
    }
}
