<?php

declare(strict_types=1);

namespace App\Controller\Website;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class LandingController extends AbstractController
{
    #[Route(path: [
        'fr' => '/',
        'en' => '/en',
    ], name: 'home_page')]
    public function index(): Response
    {
        return $this->render(
            'landing/pages/homepage.html.twig',
            [
                'fullName' => 'Lebus 237',
            ],
        );
    }

    #[Route(path: [
        'fr' => '/services',
        'en' => '/en/services',
    ], name: 'services_page')]
    public function services(): Response
    {
        return $this->render('landing/pages/services_page.html.twig');
    }

    #[Route(path: [
        'fr' => '/a-propos',
        'en' => '/en/about-us',
    ], name: 'about_us_page')]
    public function about_us(): Response
    {
        return $this->render('landing/pages/about_us.html.twig');
    }
}
