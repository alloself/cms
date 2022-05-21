<?php

namespace App\View\Components;

use App\Models\CMS\Menu;
use Illuminate\View\Component;

class Footer extends Component
{
    public $items;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->items = Menu::where('name', 'menu')->with(['items' => function ($query) {
            $query->orderBy('order', 'DESC')->with('attributes', 'children');
        }])->first()->items;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.footer');
    }
}
