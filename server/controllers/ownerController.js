import User from "../models/User.js";
import fs from "fs"
import Car from "../models/Car.js"
import imagekit from "../configs/imageKit.js";
import { log } from "console";
import Booking from "../models/Booking.js";

export const changeRoleToOwner =async (req, res) =>{
    try {
        const{_id} = req.user;
        await User.findByIdAndUpdate(_id, {role: "owner"})
        res.json({success: true, message: "Now you can list cars"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error. message})
        
    }
}

//API lit sto car
export const addCar = async (req,res)=>{
    try {
        const{_id} = req.user;
        let car = JSON.parse(req.body.carData)
        const imageFile = req.file;

        // upload image to image kit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file:fileBuffer,
            fileName: imageFile.originalname,
            folder: '/cars'
        })

        //for url generation
        var optimizedImageURL = imagekit.url({
            path :response.filePath,
            transformation : [{width:'1280'},{quality: 'auto'}, {format:'webp'} ]

        });
        const image = optimizedImageURL;

await Car.create({
    ...car,
    owner: _id,
    image
});

        res.json({success: true, message: "Car Added"})

    } catch (error) {
         console.log(error.message);
        res.json({success: false, message: error. message})
    }
}

// API to List owner Cars
export const getOwnerCars = async (req,res)=>{
    try {
        const {_id} = req.user;
        const cars = await Car.find({owner: _id})
        res.json({success: true, cars}) 
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error. message})
    }

}

// API to Toggle car availability
export const toggleCarAvailability = async (req,res) =>{
    try{
        const {_id} = req.user
        const {carId} = req.body
        const car = await Car.findById(carId)

if(car.owner.toString() !== _id.toString()){
    return res.json({
        success:false,
        message:"unauthorized"
    })
}

        car.isAvaliable = !car.isAvaliable ;
        await car.save()
        res.json({success:true, message: "Availability Toggled"})
    }catch(error){
        console.log(error.message);
        res.json({success:false, message:error.message})
    }
}

// API to update car
export const updateCar = async (req, res) => {
    try {
        const { _id } = req.user;
        const { carId } = req.params;

        const car = await Car.findById(carId);

        if (!car) {
            return res.json({
                success: false,
                message: "Car not found"
            });
        }

        // Pastikan hanya owner yang boleh edit
        if (car.owner.toString() !== _id.toString()) {
            return res.json({
                success: false,
                message: "Unauthorized"
            });
        }

        const {
            brand,
            model,
            year,
            category,
            seating_capacity,
            fuel_type,
            transmission,
            pricePerDay,
            location,
            description,
            isAvaliable
        } = req.body;

        car.brand = brand;
        car.model = model;
        car.year = year;
        car.category = category;
        car.seating_capacity = seating_capacity;
        car.fuel_type = fuel_type;
        car.transmission = transmission;
        car.pricePerDay = pricePerDay;
        car.location = location;
        car.description = description;

        if (typeof isAvaliable === "boolean") {
            car.isAvaliable = isAvaliable;
        }

        await car.save();

        res.json({
            success: true,
            message: "Car updated successfully",
            car
        });

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        });
    }
};



//api to delete a car
export const deleteCar = async (req,res) =>{
    try{
        const {_id} = req.user
        const {carId} = req.body
        const car = await Car.findById(carId)

if(car.owner.toString() !== _id.toString()){
            return res.json({success: false, message: "unauthorized"})
        }

        car.owner = null
        car.isAvaliable = false

        await car.save()

        res.json({success:true, message: "Car removed"})
    }catch(error){
        console.log(error.message);
        res.json({success:false, message:error.message})
    }
}

//api to get dashboard data
export const getDashboardData = async(req,res)=>{
    try {
        const {_id, role} = req.user

        if(role !== 'owner'){
            return res.json({
                success:false,
                message:"unauthorized"
            })
        }

        const cars = await Car.find({owner:_id})

        const bookings = await Booking.find({
            owner:_id
        })
        .populate('car')
        .sort({createdAt:-1})


        const pendingBookings = await Booking.find({
            owner:_id,
            status:"pending"
        })

        const completedBookings = await Booking.find({
            owner:_id,
            status:"confirmed"
        })


        const monthlyRevenue = bookings
        .filter(booking=> booking.status === 'confirmed')
        .reduce((acc,booking)=> acc + booking.price,0)


        const dashboardData = {
            totalCars: cars.length,
            totalBookings: bookings.length,
            pendingBookings: pendingBookings.length,
            completedBookings: completedBookings.length,
            recentBookings: bookings.slice(0,3),
            monthlyRevenue
        }


        res.json({
            success:true,
            dashboardData
        })


    } catch(error){
        console.log(error.message)
        res.json({
            success:false,
            message:error.message
        })
    }
}

export const updateUserImage = async (req,res)=>{
    try {
        const {_id} = req.user
        const imageFile = req.file;

        // upload image to image kit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file:fileBuffer,
            fileName: imageFile.originalname,
            folder: '/users'
        })

        //for url generation
        var optimizedImageURL = imagekit.url({
            path :response.filePath,
            transformation : [{width:'400'},{quality: 'auto'}, {format:'webp'} ]

        });
        const image = optimizedImageURL

        await User.findByIdAndUpdate(_id,{image})
        res.json({success:true, message:"iamge Update"})

    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
    }

}