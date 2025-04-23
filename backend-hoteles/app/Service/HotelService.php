<?php

namespace App\Services;

use App\Repositories\HotelRepositoryInterface;

class HotelService
{
    protected $hotelRepository;

    public function __construct(HotelRepositoryInterface $hotelRepository)
    {
        $this->hotelRepository = $hotelRepository;
    }

    public function getAllHotels()
    {
        return $this->hotelRepository->getAll();
    }

    public function getHotelById($id)
    {
        return $this->hotelRepository->findById($id);
    }

    public function createHotel($data)
    {
        return $this->hotelRepository->create($data);
    }

    public function updateHotel($id, $data)
    {
        return $this->hotelRepository->update($id, $data);
    }

    public function deleteHotel($id)
    {
        return $this->hotelRepository->delete($id);
    }
}
