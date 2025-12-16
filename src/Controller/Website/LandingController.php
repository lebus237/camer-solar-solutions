<?php

declare(strict_types=1);

namespace App\Controller\Website;

use Sulu\Content\UserInterface\Controller\Website\ContentController;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class LandingController extends ContentController {}
