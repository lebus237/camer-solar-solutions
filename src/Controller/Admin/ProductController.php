<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProductController extends AbstractController
{
    #[Route('/products', name: 'products_page')]
    public function index(): Response
    {
        return $this->render(
            'pages/landing/homepage.html.twig',
            [
                'fullName' => 'Lebus 237',
            ],
        );
    }
}
