---
layout: post  
title: Car Management API Overview  
description: Overview of the API for Managing User Cars  
type: issues  
comments: True  
---

#### SCRIPT TAG FOR CAR MANAGEMENT API ENDPOINTS

```javascript
<script type="module">
  import { createCar, getUserCars, updateCar, deleteCar } from "{{site.baseurl}}/assets/js/api/cars.js";

  const submitButton = document.getElementById('submit-btn');
  const carForm = document.getElementById('car-form');
  const pythonURI = 'http://localhost:5000'; // Define the pythonURI variable

  // Create a new car post
  async function submitCar() {
    const carData = {
      make: document.getElementById('make').value,
      model: document.getElementById('model').value,
      engine_type: document.getElementById('engine_type').value,
      year: document.getElementById('year').value,
      trim: document.getElementById('trim').value,
      color: document.getElementById('color').value,
      vin: document.getElementById('vin').value,
    };

    const carResponse = await createCar(carData);
    if (carResponse) {
      alert("Car added successfully!");
      window.location.href = '{{site.baseurl}}/userCars';
    }
  }

  submitButton.addEventListener('click', submitCar);
</script>
```

#### CREATE CAR FUNCTION

```javascript
export async function createCar(carData) {
  const carOptions = {
    method: "POST", // *POST
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("authToken")  // Add token for authentication
    },
    body: JSON.stringify(carData),
  };

  const endpoint = pythonURI + "/api/userCars";
  try {
    const response = await fetch(endpoint, carOptions);
    if (!response.ok) {
      throw new Error(`Failed to create car: ${response.status}`);
    }
    const car = await response.json();
    return car;
  } catch (error) {
    console.error("Error creating car:", error.message);
    return null;
  }
}
```

#### _CRUD API HANDLER (Server-Side)

```python
class _CRUD(Resource):
    @token_required()
    def post(self):
        try:
            # Obtain the current user from the token required setting in the global context
            current_user = g.current_user
            # Obtain the request data sent by the RESTful client API
            data = request.get_json()
            print("Request data:", data)  # Add logging
            if not all(key in data for key in ("make", "model", "engine_type", "year")):
                return Response("{'message': 'Missing required fields'}", 400)
            # Create a new car entry
            post = UserCars(current_user.id, data["make"], data["model"], data["year"], data["engine_type"], 
                            data["trim"], data["color"], data["vin"])
            post.create()
            return jsonify(post.read())
        except Exception as e:
            print("Error in post method:", str(e))  # Add error logging
            return Response("{'message': 'Internal server error'}", 500)

    @token_required()
    def get(self):
        current_user = g.current_user

        user_cars = UserCars.query.filter_by(_uid=current_user.id).all()
        if not user_cars:
            return jsonify({"message": "No cars found for the current user"}), 404

        cars = [car.read() for car in user_cars]
        return jsonify(cars)

    @token_required()
    def put(self):
        current_user = g.current_user
        data = request.get_json()
        car = UserCars.query.get(data['id'])
        
        if not car:
            return Response("{'message': 'Car not found'}", 404)

        car._make = data["make"]
        car._model = data["model"]
        car._engine_type = data["engine_type"]
        car._year = data["year"]
        car._trim = data["trim"]
        car._color = data["color"]
        car._vin = data["vin"]
        car.update()

        return jsonify(car.read())

    @token_required()
    def delete(self):
        current_user = g.current_user
        data = request.get_json()
        car = UserCars.query.get(data['id'])
        
        if not car:
            return Response("{'message': 'Car not found'}", 404)

        car.delete()
        return jsonify({"message": "Car deleted"})
```

#### API Documentation

### POST /api/userCars (JSON)

```python
{
  "make": STRING,
  "model": STRING,
  "engine_type": STRING,
  "year": INTEGER,
  "trim": STRING,
  "color": STRING,
  "vin": STRING
}
```

### GET /api/userCars (JSON)

```python
[
  {
    "id": ID,
    "make": STRING,
    "model": STRING,
    "engine_type": STRING,
    "year": INTEGER,
    "trim": STRING,
    "color": STRING,
    "vin": STRING,
    "user": {
      "id": ID,
      "name": STRING,
      "email": STRING,
    }
  }
]
```

### PUT /api/userCars (JSON)

```python
{
  "id": ID,
  "make": STRING,
  "model": STRING,
  "engine_type": STRING,
  "year": INTEGER,
  "trim": STRING,
  "color": STRING,
  "vin": STRING
}
```

### DELETE /api/userCars (JSON)

```python
{
  "id": ID
}
```

#### USER CARS MODEL (Database)

```python
class UserCars(db.Model):
    __tablename__ = 'userCars'
    id = db.Column(db.Integer, primary_key=True)
    _make = db.Column(db.String(255), nullable=False)
    _model = db.Column(db.String(255), nullable=False)
    _engine_type = db.Column(db.String(255), nullable=False)
    _year = db.Column(db.Integer, nullable=False)
    _trim = db.Column(db.String(255), nullable=True)
    _color = db.Column(db.String(255), nullable=True)
    _vin = db.Column(db.String(255), nullable=True)
    _uid = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def __init__(self, uid, make, model, year, engine_type, trim=None, color=None, vin=None):
        self._uid = uid
        self._make = make
        self._model = model
        self._year = year
        self._engine_type = engine_type
        self._trim = trim
        self._color = color
        self._vin = vin

    def create(self):
        db.session.add(self)
        db.session.commit()

    def read(self):
        user = User.query.get(self._uid)
        return {
            "id": self.id,
            "make": self._make,
            "model": self._model,
            "engine_type": self._engine_type,
            "year": self._year,
            "trim": self._trim,
            "color": self._color,
            "vin": self._vin,
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email
            }
        }

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
```

### How the Car Management System Works

This API allows users to create, read, update, and delete information about their cars. The process works as follows:
- **POST**: A user can submit a new car, providing details like the make, model, engine type, and year.
- **GET**: The user can fetch a list of their cars.
- **PUT**: Users can update details about a car they own (like color, model, etc.).
- **DELETE**: Users can delete a car from their account.

The `UserCars` model is responsible for storing car-related data in the database, while the `_CRUD` class provides the API endpoints that handle the requests.
``````