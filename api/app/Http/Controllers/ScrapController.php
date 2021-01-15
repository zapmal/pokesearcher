<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Goutte\Client as GoutteClient;
use GuzzleHttp\Client as GuzzleClient;

class ScrapController extends Controller
{
    public function scrapTrainers()
    {
        $goutteClient = new GoutteClient();
        $guzzleClient = new GuzzleClient(['timeout' => 60]);
        $goutteClient->setClient($guzzleClient);

        $crawler = $goutteClient->request('GET', 'https://play.pokemonshowdown.com/sprites/trainers');

        return $crawler->filter('figure')->each(function ($node) {
            return $trainers[] = $node->text();
        });
    }
}
