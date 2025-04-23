<?php

namespace App\Repositories;

use App\Models\Hotel;
use App\Repositories\Interfaces\HotelRepositoryInterface;

class HotelRepository implements HotelRepositoryInterface
{
    public function getAll()
    {
        return Hotel::all();
    }

    public function findById($id)
    {
        return Hotel::find($id);
    }

    public function create(array $data)
    {
        return Hotel::create($data);
    }

    public function update($id, array $data)
    {
        $hotel = Hotel::find($id);
        if ($hotel) {
            $hotel->update($data);
            return $hotel;
        }
        return null;
    }

    public function delete($id)
    {
        $hotel = Hotel::find($id);
        if ($hotel) {
            $hotel->delete();
            return true;
        }
        return false;
    }
}
