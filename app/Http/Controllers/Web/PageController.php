<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\CMS\Page;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent as Agent;

class PageController extends Controller
{
    public function cms()
    {
        return view('pages.cms');
    }
    public function site(Request $request)
    {
        $path = array_key_exists('path', $request->route()->parameters) ? $request->route()->parameters['path'] : '/';


        $page = Page::wherePath($path)->with(
            'template',
            'blocks.attributes',
            'blocks.files',
            'blocks.blocks',
            'blocks.images',
            'blocks.pivot.template',
            'blocks.blocks.blockable.template',
            'blocks.blocks.images',
            'blocks.blocks.files',
            'blocks.blocks.attributes',
            'attributes',
            'blocks.blocks.blocks',
            'blocks.blocks.blocks.files',
            'blocks.blocks.blocks.attributes',
            'blocks.blocks.blocks.images',
        )->first();

        if ($page) {
            return view($page->template ? 'pages.' . $page->template->name : 'pages.page', [
                'page' => $page,
                'blocks' => $page->blocks->map(function ($item, $key) {
                    $item->order = $item->pivot->order;
                    $item->template = $item->pivot->template;
                    if (count($item->blocks)) {
                        $item->blocks = $item->blocks->map(function ($i, $key) {
                            $i->order = $i->blockable->order;
                            $i->template = $i->blockable->template;

                            return $i;
                        })->sortByDesc('order');
                    }
                    return $item;
                })->sortByDesc('order')
            ]);
        } else {
            return view('pages.404');
        }
    }
}
