---
layout: post  
title: Sprint 4 Blog
description: Overview of the API for Managing User Cars  
type: issues  
comments: true  
---

### Question 1: 

The first program code segment must be a student-developed
procedure that:
□ Defines the procedure’s name and return type (if necessary)
□ Contains and uses one or more parameters that have an effect on
the functionality of the procedure
□ Implements an algorithm that includes sequencing, selection, and
iteration

#### CREATE CAR FUNCTION

```javascript
export async function createUserCar(make, model, year, engine_type, trim, color, vin) {
    const postOptions = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "X-Origin": "client", // New custom header to identify source
        },
        body: JSON.stringify({
            make: make,
            model: model,
            year: year,
            engine_type: engine_type,
            trim: trim,
            color: color,
            vin: vin
        }),
    };

    const endpoint = pythonURI + '/api/userCars';

    try {
        const response = await fetch(endpoint, postOptions);
        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`);
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error.message);
        return null;
    }
}
```

This is my create car function, it sends a post request to the server to make a new car. The createUserCar function is an asynchronous JavaScript function that sends a POST request to a backend server to create a new car entry. It takes the car details (make, model, year, engine_type, trim, color, vin) as parameters, constructs a request with these details in the body, and sends it to the /api/userCars endpoint. If the request is successful, it returns the response data; otherwise, it logs an error and returns null.

### Question 2:

The second program code segment must show where your
student-developed procedure is being called in your program.

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
submitButton and carForm are references to HTML elements with IDs submit-btn and car-form, respectively.
pythonURI is a constant that holds the URL of a local Python server. The event listener "listens" for when the submitButton is clicked, and when the submitButton is clicked, the event listener allows for the submitCar function to be executed.

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

The CRUD API handler is a Python class which defines the server-side API endpoints for CRUD car entries. The dictionary defines all of the necessary car variables and updates an existinng car with new data, returing the updated details in JSON.

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
This section provides the JSON structure for the API endpoints.

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
This JSON schema outlines the data structure for a car entry, including the car details and associated user info. It acts like a chest with columns for different items in Minecraft.

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

This is the userCars model which explains the function of the API, and it includes all the CRUD operations.

### How the Car Management System Works

This API allows users to create, read, update, and delete information about their cars. The process works as follows:
- **POST**: A user can submit a new car, providing details like the make, model, engine type, and year.
- **GET**: The user can fetch a list of their cars.
- **PUT**: Users can update details about a car they own (like color, model, etc.).
- **DELETE**: Users can delete a car from their account.

The `UserCars` model is responsible for storing car-related data in the database, while the `_CRUD` class provides the API endpoints that handle the requests.
``````