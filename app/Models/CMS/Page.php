<?php

namespace App\Models\CMS;

use App\Models\Attribute;
use App\Models\File;
use App\Models\Language;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;
use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\Services\SlugService;

class Page extends Model
{
    use HasFactory, Sluggable, NodeTrait {
        NodeTrait::replicate as replicateNode;
        Sluggable::replicate as replicateSlug;
    }

    protected $fillable = ['title', 'description', 'keywords', 'slug', 'parent_id', 'index', 'path', 'language_id', 'template_id', 'subtitle', 'language_id'];

    protected $casts = [
        'index' => 'boolean',
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title',
                'onUpdate' => true
            ]
        ];
    }

    public function generatePath()
    {
        if (!$this->index) {
            if ($this->isRoot()) {
                $this->path = $this->slug;
            } else {
                if ($this->parent->path == '/') {
                    $this->path = $this->slug;
                } else {
                    $this->path = $this->parent->path . '/' . $this->slug;
                }
            }
        } else {

            $this->path = '/';
        }

        return $this;
    }

    public static function generateSitemap()
    {
        $pages = Page::get()->toTree();

        $sitemap = Sitemap::create();


        $pages->each(function (Page $item) use ($sitemap) {
            $sitemap->add(Url::create($item->path));
            if (count($item->children)) {
                $item->generateSitemapTree($sitemap);
            }
        });


        $sitemap->writeToFile(public_path('sitemap.xml'));
    }

    public function generateSitemapTree($sitemap)
    {
        $this->children->each(function (Page $item) use ($sitemap) {
            $sitemap->add(Url::create($item->path));
            if (count($item->children)) {
                $item->generateSitemapTree($sitemap);
            }
        });
    }

    public function replicate(array $except = null)
    {
        $instance = $this->replicateNode($except);
        (new SlugService())->slug($instance, true);

        return $instance;
    }


    public function files()
    {
        return $this->morphToMany(File::class, 'fileable')->wherePivot('type', 'file');
    }

    public function images()
    {
        return $this->morphToMany(File::class, 'fileable')->wherePivot('type', 'image')->withPivot('value');
    }


    public function blocks()
    {
        return $this->morphToMany(Block::class, 'blockable')->withPivot('order', 'template_id')->using(Blockable::class);
    }

    public function template()
    {
        return $this->belongsTo(Template::class);
    }

    public function attributes()
    {
        return $this->morphToMany(Attribute::class, 'attributeable')->withPivot('value');
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}
