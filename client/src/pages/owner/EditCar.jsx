import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import Title from "../../components/owner/Title";

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { axios, currency } = useAppContext();

  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    category: "",
    seating_capacity: "",
    fuel_type: "",
    transmission: "",
    pricePerDay: "",
    location: "",
    description: "",
  });

  const fetchCar = async () => {
    try {
      const { data } = await axios.get("/api/owner/cars");

      if (data.success) {
        const selectedCar = data.cars.find((c) => c._id === id);

        if (selectedCar) {
          setCar(selectedCar);
        } else {
          toast.error("Car not found");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateCar = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `/api/owner/update-car/${id}`,
        car
      );

      if (data.success) {
        toast.success(data.message);
        navigate("/owner/manage-cars");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Edit Car"
        subTitle="Update your car information"
      />

      <form
        onSubmit={updateCar}
        className="max-w-2xl mt-6 space-y-5"
      >
        <div>
          <label>Brand</label>
          <input
            className="w-full border rounded p-2"
            value={car.brand}
            onChange={(e) =>
              setCar({ ...car, brand: e.target.value })
            }
          />
        </div>

        <div>
          <label>Model</label>
          <input
            className="w-full border rounded p-2"
            value={car.model}
            onChange={(e) =>
              setCar({ ...car, model: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Year</label>
            <input
              type="number"
              className="w-full border rounded p-2"
              value={car.year}
              onChange={(e) =>
                setCar({ ...car, year: e.target.value })
              }
            />
          </div>

          <div>
            <label>Price ({currency})</label>
            <input
              type="number"
              className="w-full border rounded p-2"
              value={car.pricePerDay}
              onChange={(e) =>
                setCar({
                  ...car,
                  pricePerDay: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div>
          <label>Location</label>
          <input
            className="w-full border rounded p-2"
            value={car.location}
            onChange={(e) =>
              setCar({
                ...car,
                location: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            rows={5}
            className="w-full border rounded p-2"
            value={car.description}
            onChange={(e) =>
              setCar({
                ...car,
                description: e.target.value,
              })
            }
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-primary text-white px-5 py-2 rounded"
          >
            Update Car
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-200 px-5 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCar;