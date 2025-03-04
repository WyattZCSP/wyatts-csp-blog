---
layout: post  
title: Final Blog 5 things that I worked on
description: Overview of what I did over the last Trimester  
type: issues  
comments: true  
---

## Summary of 12 weeks
Over the past 12 weeks,I worked on our LegendaryMotorsport project which included an API, a login feature, and a UI to display information. Our project was focused around sharing the love for cars, titled “Legendary Motorsport”. As a team, we collaborated and produced a website with a running backend similar to Instagram that allows users to share about cars.

## 1. Help Style the Home Page
I contributed to styling the home page to ensure it was visually appealing and user-friendly. This involved working with CSS and HTML to create a design that fits our overall theme. I styled these buttons so that they would display an image while also allowing the user to get to the Dream Car, Gas Car, or Electric Car page.

```js
<!-- Featured Cars Section -->
 <section id="featured-cars" class="py-20 bg-gray-100">
        <h2 class="text-7xl font-bold text-center text-red-600 mb-10 fade-in">Featured Cars</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <a href="{{site.baseurl}}/gas" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
                    <img src="images/resized-enshot20240607080120png.png" alt="Gas Car" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-3xl font-bold mb-2">Gas Car</h3>
                        <p class="text-xl text-gray-700">The timeless classic fueled by gasoline, offering reliability and power.</p>
                    </div>
                </a>
                <a href="{{site.baseurl}}/electric" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
                    <img src="https://blog.vipautoaccessories.com/wp-content/uploads/2024/08/2024_Super-Chrome-Red-Gloss-Wrap_0Hero2.jpg" alt="Electric Car" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-3xl font-bold mb-2">Electric Car</h3>
                        <p class="text-xl text-gray-700">Maximum efficiency and eco-friendliness, quick acceleration and futuristic design.</p>
                    </div>
                </a>
                <a href="{{site.baseurl}}/dream-car" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
                    <img src="images/964355023c8621887c37e1fcc3c1dc3aa9-koeniggsegg-one1.2x.h473.w710.png" alt="Dream Car" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-3xl font-bold mb-2">Dream Car</h3>
                        <p class="text-xl text-gray-700">A hypercar designed for the ultimate driving experience.</p>
                    </div>
                </a>
            </div>
    </section>
```

## 2. Create Frontend for Car Info
I created the frontend page where users can input information about their car, submit the information and have the car that they created display in the "Garage" page which I also made. The following code creates a car information form using HTML and JavaScript. The form includes fields for make, model, year, trim, color, VIN, and engine type, each with corresponding labels and input elements styled with Tailwind CSS classes. I also included a submit button which allows the user to create a car, after the user clicks the button it triggers a JavaScript function to gather the input values and call the createUserCar function from the api. This function is intended to handle the creation of a user car object with the provided details.

```js

<div class="bg-gray-100 min-h-screen flex items-center justify-center w-full">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 class="text-2xl font-bold mb-4 text-center">Car Information Form</h1>
        <div>
            <label for="make" class="block text-sm font-medium text-gray-700">Make</label>
            <input type="text" id="make" name="make" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
        <div>
            <label for="model" class="block text-sm font-medium text-gray-700">Model</label>
            <input type="text" id="model" name="model" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
        <div>
            <label for="year" class="block text-sm font-medium text-gray-700">Year</label>
            <input type="number" id="year" name="year" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
        <div>
            <label for="trim" class="block text-sm font-medium text-gray-700">Trim</label>
            <input type="text" id="trim" name="trim" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
        <div>
            <label for="color" class="block text-sm font-medium text-gray-700">Color</label>
            <input type="text" id="color" name="color" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
        <div>
            <label for="vin" class="block text-sm font-medium text-gray-700">VIN</label>
            <input type="text" id="vin" name="vin" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
                <div>
            <label for="engine_type" class="block text-sm font-medium text-gray-700">Engine Type</label>
            <input type="text" id="engine_type" name="engine_type" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
                     <div class="text-center">
            <button id="submitBtn" class="w-full py-2 px-4 bg-red-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
        </div>
    </div>
</div>

<script type="module">
    import { createUserCar } from "{{site.baseurl}}/assets/js/api/userCar.js"

    const submitBtn = document.getElementById("submitBtn")
    const submit = () => {
        console.log("hi")
        const make = document.getElementById('make').value;
        const model = document.getElementById('model').value;
        const year = document.getElementById('year').value;
        const trim = document.getElementById('trim').value;
        const color = document.getElementById('color').value;
        const vin = document.getElementById('vin').value;
        const engineType = document.getElementById('engine_type').value;

        createUserCar(make, model, year, engineType, trim, color, vin)
    }

    document.addEventListener("DOMContentLoaded", () => {
        submitBtn.addEventListener("click", submit)
    })
    
</script>
```

## 3. Create Frontend for Garage
I developed the frontend components for the garage feature. This included designing and implementing the user interface where users can view their garage and delete cars that they have previously made. In this code, I created a section to display featured cars and a table to list user cars. The featured cars section includes two cards with images, titles, and descriptions, each linking to different pages for adding car information or using a VIN to add a car. I used Tailwind CSS classes for styling and responsiveness. In the table section, I displayed a list of cars with details such as make, model, year, trim, engine type, and color. I used JavaScript to filll the table once users submit information about their car by fetching user cars from my UserCar API. Each row includes a delete button that, when clicked, calls a function to delete the car by its ID and reloads the page once the car is successfully deleted. This ensures that the car list is always up-to-date and provides a user-friendly interface for managing cars.


```js
<section id="featured-cars" class="pb-20 bg-gray-100 flex items-center justify-center">
    <div class="w-full grid grid-cols-2 gap-4">
        <!-- Car info card -->
        <a href="{{site.baseurl}}/car-info" class="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:shadow-inner">
            <img src="https://ymimg1.b8cdn.com/uploads/article/3588/pictures/2683140/Koenigsegg_Agera_RS_Naraya__5_.jpg" alt="Car Information Form" class="w-full h-3/4 object-cover">
            <div class="p-6">
                <h3 class="text-3xl font-bold mb-2">Car Information Form</h3>
                <p class="text-xl text-gray-700">Add your dream car to the garage!</p>
            </div>
        </a>
        <!-- Car info card -->
        <a href="{{site.baseurl}}/vinStore" class="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:shadow-inner">
            <img src="https://www.shutterstock.com/image-vector/add-new-car-icon-600nw-2086317895.jpg" alt="Add Car" class="w-full h-3/4 object-cover">
            <div class="p-6">
                <h3 class="text-3xl font-bold mb-2">Add your Car</h3>
                <p class="text-xl text-gray-700">Use your car's VIN to add your car!</p>
            </div>
        </a>
    </div>
</section>
<body class="bg-gray-100 py-8 px-4">

<div class="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
    <h1 class="text-3xl font-semibold text-center mb-6">My Cars</h1>

    <table class="min-w-full table-auto text-left text-sm">
        <thead>
            <tr class="bg-gray-200 text-gray-700">
                <th class="py-2 px-4 font-medium">Make</th>
                <th class="py-2 px-4 font-medium">Model</th>
                <th class="py-2 px-4 font-medium">Year</th>
                <th class="py-2 px-4 font-medium">Trim</th>
                <th class="py-2 px-4 font-medium">Engine Type</th>
                <th class="py-2 px-4 font-medium">Color</th>
            </tr>
        </thead>
        <tbody id="carTable">
            <!-- Loop through your array of cars and display each car's data -->
            <tr class="border-t border-b hover:bg-gray-50">
                <td class="py-3 px-4">Bugatti</td>
                <td class="py-3 px-4">Veyron</td>
                <td class="py-3 px-4">2008</td>
                <td class="py-3 px-4">Grand Sport</td>
                <td class="py-3 px-4">W16</td>
                <td class="py-3 px-4">White</td>
            </tr>
            <tr class="border-t border-b hover:bg-gray-50">
                <td class="py-3 px-4">Pagani</td>
                <td class="py-3 px-4">Zonda</td>
                <td class="py-3 px-4">2008</td>
                <td class="py-3 px-4">F Clubsport</td>
                <td class="py-3 px-4">Amg 5.2L v12</td>
                <td class="py-3 px-4">Black</td>
            </tr>
            <tr class="border-t border-b hover:bg-gray-50">
                <td class="py-3 px-4">Ford</td>
                <td class="py-3 px-4">GT</td>
                <td class="py-3 px-4">1967</td>
                <td class="py-3 px-4">Mk1</td>
                <td class="py-3 px-4">V8</td>
                <td class="py-3 px-4">Gulf Blue</td>
            </tr>
        </tbody>
    </table>
</div>

<script type="module">
    import { getUserCars, deleteCarById } from "{{site.baseurl}}/assets/js/api/userCar.js"

    const tableBody = document.getElementById("carTable")

     tableBody.innerHTML = '';

     const cars = await getUserCars()

    // Loop through each car and create a new row
    cars.forEach(car => {
        const row = document.createElement('tr');
        row.className = "border-t border-b hover:bg-gray-50";

        // Create and append each cell with car data
        const makeCell = document.createElement('td');
        makeCell.className = "py-3 px-4";
        makeCell.textContent = car.make;
        row.appendChild(makeCell);

        const modelCell = document.createElement('td');
        modelCell.className = "py-3 px-4";
        modelCell.textContent = car.model;
        row.appendChild(modelCell);

        const yearCell = document.createElement('td');
        yearCell.className = "py-3 px-4";
        yearCell.textContent = car.year;
        row.appendChild(yearCell);

        const trimCell = document.createElement('td');
        trimCell.className = "py-3 px-4";
        trimCell.textContent = car.trim;
        row.appendChild(trimCell);

        const engine_typeCell = document.createElement('td');
        engine_typeCell.className = "py-3 px-4";
        engine_typeCell.textContent = car.engine_type;
        row.appendChild(engine_typeCell);

        const colorCell = document.createElement('td');
        colorCell.className = "py-3 px-4";
        colorCell.textContent = car.color;
        row.appendChild(colorCell); 

        const deleteCell = document.createElement('td');
        deleteCell.className = "py-3 px-4";
        // Set a specific width for the delete cell (for example, 50px)
        deleteCell.style.width = "50px";
        row.appendChild(deleteCell);

        // Create the delete button
        const deleteBtn = document.createElement('input');
        deleteBtn.type = "image";
        deleteBtn.src = "{{site.baseurl}}/images/bin.png";

        deleteBtn.addEventListener('click', () => {
            const deleted = deleteCarById(car.id)
            if (deleted) {
                 window.location.reload()
            } 
        })

        // Set a more reasonable size for the button (for example, 24px by 24px)
        deleteBtn.style.width = "24px";
        deleteBtn.style.height = "24px";

        deleteCell.appendChild(deleteBtn);

        // Append the row to the table body
        tableBody.appendChild(row);
    });

    // Call the function to add rows when the page loads
    // window.onload = addCarRows;

</script>
```

## 4. Create Backend for Create Car Function to Make, Store, and Delete Cars
I implemented the backend functionality for creating, storing, and deleting car entries. This involved setting up API endpoints and ensuring that car data is correctly handled and stored in the database. 

Model: 

```js
class UserCars(db.Model):
    
    __tablename__ = 'userCars'
    id = db.Column(db.Integer, primary_key=True)
    _uid = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    _make = db.Column(db.String(255), nullable=False) 
    _model = db.Column(db.String(255), nullable=False) 
    _year = db.Column(db.String(255), nullable=False) 
    _trim = db.Column(db.String(255), nullable=True) 
    _engine_type = db.Column(db.String(255), nullable=False) 
    _color = db.Column(db.String(255), nullable=True) 
    _vin = db.Column(db.String(255), nullable=True) 
    

    def __init__(self, uid, make, model, year, engine_type, trim="", color="", vin=""):
        # if make not in ['audi', 'apollo', 'bentley', 'bmw', 'bugatti', 'dodge', 'ferrari', 'ford', 'honda', 'hyundai', 'jaguar', 'kia', 'koenigsegg', 'lamborghini', 'lancia', 'mclaren', 'mercedes', 'nissan', 'pagani', 'porsche', 'ram', 'scion', 'tesla', 'toyota', 'volkswagen']:
        #     return {"message": "Bad Make!!"}, 404
        self._uid = uid
        self._make = make
        self._color = color
        self._engine_type = engine_type
        self._model = model
        self._year = year
        self._trim = trim
        self._vin = vin


    def __repr__(self):
        """
        The __repr__ method is a special method used to represent the object in a string format.
        Called by the repr(post) built-in function, where post is an instance of the Post class.
        
        Returns:
            str: A text representation of how to create the object.
        """
        return f"Post(id={self.id}, uid={self._uid}, make={self._make}, model={self._model}, trim={self._trim}, color={self._color}, engine_type={self._engine_type}, year={self._year}, vin={self._vin})"

    def create(self):
        """
        The create method adds the object to the database and commits the transaction.
        
        Uses:
            The db ORM methods to add and commit the transaction.
        
        Raises:
            Exception: An error occurred when adding the object to the database.
        """
        try:
            db.session.add(self)
            db.session.commit()
        except Exception as error:
            db.session.rollback()
            raise error
        
    def read(self):
        """
        The read method retrieves the object data from the object's attributes and returns it as a dictionary.
        
        Uses:
            The Group.query and User.query methods to retrieve the group and user objects.
        
        Returns:
            dict: A dictionary containing the post data, including user and group names.
        """
        user = User.query.get(self._uid)
        data = {
            "id": self.id,
            "uid": user.id if user else None,
            "make": self._make,
            "model": self._model,
            "year": self._year,
            "trim": self._trim,
            "color": self._color,
            "engine_type": self._engine_type,
            "vin": self._vin,
        }
        return data
    
    def update(self):
        """
        The update method commits the transaction to the database.
        
        Uses:
            The db ORM method to commit the transaction.
        
        Raises:
            Exception: An error occurred when updating the object in the database.
        """
        try:
            db.session.commit()
        except Exception as error:
            db.session.rollback()
            raise error
        
    def delete(self):
        """
        The delete method removes the object from the database and commits the transaction.
        
        Uses:
            The db ORM methods to delete and commit the transaction.
        
        Raises:
            Exception: An error occurred when deleting the object from the database.
        """    
        try:
            db.session.delete(self)
            db.session.commit()
        except Exception as error:
            db.session.rollback()
            raise error 
```

In this code, I created a UserCars class that represents a user's car in a database using SQLAlchemy. The class is mapped to the userCars table with various columns such as id, _uid, _make, _model, _year, _trim, _engine_type, _color, and _vin. I defined an __init__ method to initialize these attributes when a new UserCars object is created. The __repr__ method provides a string representation of the object for debugging purposes. I also implemented several methods to interact with the database: create to add and commit a new car record, read to retrieve and return the car's data as a dictionary, update to commit changes to an existing record, and delete to remove a record from the database. Each of these methods uses SQLAlchemy's session management to handle transactions and includes error handling to manage exceptions and roll back transactions if necessary.

API:

```js

"""
This Blueprint object is used to define APIs for the Post model.
- Blueprint is used to modularize application files.
- This Blueprint is registered to the Flask app in main.py.
"""
userCars_api = Blueprint('userCars_api', __name__, url_prefix='/api')

"""
The Api object is connected to the Blueprint object to define the API endpoints.
- The API object is used to add resources to the API.
- The objects added are mapped to code that contains the actions for the API.
- For more information, refer to the API docs: https://flask-restful.readthedocs.io/en/latest/api.html
"""
api = Api(userCars_api)

class CarPostAPI:
    """
    Define the API CRUD endpoints for the Post model.
    There are four operations that correspond to common HTTP methods:
    - post: create a new post
    - get: read posts
    - put: update a post
    - delete: delete a post
    """
    class _CRUD(Resource):
        @token_required()
        def post(self):
            # Obtain the current user from the token required setting in the global context
            current_user = g.current_user
            # Obtain the request data sent by the RESTful client API
            data = request.get_json()

            if "make" not in data or "model" not in data or  "engine_type" not in data or "year" not in data:
                return Response("{'message': 'Missing required fields'}", 400)

            # Create a new post object using the data from the request
            post = UserCars(current_user.id, data["make"], data["model"], data["year"], data["engine_type"], data["trim"], data["color"], data["vin"]) 
            # Save the post object using the Object Relational Mapper (ORM) method defined in the model
            post.create()

            # for base64_image in data['image_base64_table']:
            #     print(base64_image)
            #     carPostImage_base64_upload(base64_image, post.id, )

            # Return response to the client in JSON format, converting Python dictionaries to JSON format
            return jsonify(post.read())
        @token_required()
        def get(self):
            # """
            # Retrieve all cars associated with the authenticated user.

            # Returns:
            #     JSON response with a list of car dictionaries.
            # """
            current_user = g.current_user

            return jsonify([car.read() for car in UserCars.query.filter_by(_uid=current_user.id).all()])

        @token_required()
        def put(self):
            # Obtain the current user
            current_user = g.current_user
            # Obtain the request data
            data = request.get_json()
            # Find the current post from the database table(s)
            car = UserCars.query.get(data['id'])
            # Update the car
            car._make = data["make"]
            car._color = data["color"]
            car._engine_type = data["engine_type"]
            car._model = data["model"]
            car._year = data["year"]
            car._trim = data["trim"]
            car._vin = data["vin"]
            # Save the car
            car.update()
            # Return response
            return jsonify(car.read())

        @token_required()
        def delete(self):
            # Obtain the current user
            current_user = g.current_user
            # Obtain the request data
            data = request.get_json()
            # Find the current car from the database table(s)
            car = UserCars.query.get(data['id'])

            if car is None:
                return Response("{'message': 'Car not found'}", 404)

            if car._uid != current_user.id:
                return Response("{'message': 'Unauthorized'}", 401)
            # Delete the car using the ORM method defined in the model
            if car:
                car.delete()
            # Return response
                return jsonify({"message": "Car deleted"})
            else:
                return Response("{'message': 'Car not found'}", 404)

    """
    Map the _CRUD class to the API endpoints for /post.
    - The API resource class inherits from flask_restful.Resource.
    - The _CRUD class defines the HTTP methods for the API.
    """
    api.add_resource(_CRUD, '/userCars')
```

To create this API, I started by defining a `Blueprint` object named `userCars_api`. I then connected an api object to this blueprint to define the API endpoints. I created a class `CarPostAPI` with an inner class `_CRUD` that inherits from `Resource` to handle CRUD operations for the `UserCars` model. Each method in `_CRUD` also has `@token_required()` to ensure that only authenticated users can access these endpoints. The `post` method allows users to create a new car entry by sending a JSON payload with required fields. The `get` method retrieves all cars associated with the authenticated user. The `put` method updates an existing car entry based on the provided data, and the `delete` method removes a car entry if it belongs to the authenticated user. Finally, I mapped the `_CRUD` class to the `/userCars` endpoint using `api.add_resource`. This setup ensures that users can perform create, read, update, and delete operations on their car entries securely.

## 5. Connect Posts and Comments so that a User Can Comment on a Post
I worked on connecting posts and comments, allowing users to comment on posts. This feature enhances user interaction and engagement on our platform. In this code, I created a feature that allows users to comment on posts, enhancing user interaction and engagement on our platform. The loadComments function is responsible for loading and displaying comments for a specific post. When a user clicks the "Show Comments" button, the function toggles the visibility of the comments section. If the comments section is visible, it fetches the comments for the post using getCommentsByPostId and creates HTML elements to display each comment, including the user's profile picture and comment content. Additionally, it fetches the current user's profile using getUserProfile and creates an input field and a "Post Comment" button for the user to submit a new comment. When the "Post Comment" button is clicked, the postComment function is called to submit the comment to the server, and the comments are reloaded to include the new comment. The orderPostByDate function sorts posts by their posting date to ensure they are displayed in chronological order. This cohesive approach ensures that users can seamlessly interact with posts by viewing and adding comments.

```js
const loadComments =  async (postId, postElement, loadShowingComments) => {
  const commentsSection = document.getElementById(`comments-section-${postId}`);
  if (!loadShowingComments) {
    commentsSection.classList.toggle("hidden");
  }
  if (!commentsSection.classList.contains("hidden")) {
    postElement.querySelector(`#show-comments-btn-${postId}`).innerHTML = "Hide Comments"
    const comments = await getCommentsByPostId(postId)
    console.log(comments)
    commentsSection.innerHTML = "";
    comments.map(comment => {
      const profilePicture = pythonURI + "/uploads/" + comment.user.uid + "/" + comment.user.pfp

      const commentElement = document.createElement("div")

      commentElement.className = "flex items-center space-x-4"
      commentElement.innerHTML = `
        <img src="${profilePicture}" alt="Profile Picture" class="w-10 h-10 rounded-full">
        <div>
          <p class="font-semibold">${comment.user.name}</p>
          <p class="text-gray-700">${comment.content}</p>
        </div>
      `
      commentsSection.appendChild(commentElement)
    // add commentElement to the comments section element
    })

    const currUser = await getUserProfile()

    if(!currUser) {
      return
    }

    console.log(currUser)
    const profilePicture = pythonURI + "/uploads/" + currUser.uid + "/" + currUser.pfp
    const makeCommentElement = document.createElement("div")
    makeCommentElement.className = "flex items-center space-x-4"
    makeCommentElement.innerHTML = `
    <div class="flex items-center space-x-4">
      <img src="${profilePicture}" alt="Profile Picture" class="w-10 h-10 rounded-full">
      <div>
        <p class="font-semibold">${currUser.name}</p>
        <input type="text" class="make-comment-content text-gray-700 bg-white" placeholder="Write a comment..."></input>
      </div>
          <button class="submit-comment-btn bg-red-500 text-white px-2 py-1 rounded text-sm">Post Comment</button>  
      </div>     
    `
    const submitCommentBtn = makeCommentElement.querySelector('.submit-comment-btn')
    const commentContent = makeCommentElement.querySelector('.make-comment-content')

    submitCommentBtn.addEventListener('click', () => {
        postComment({
          content: commentContent.value,
          post_id: postId
        }).then((comment) => {
          if (comment.success) {
            loadComments(postId, postElement, true)
          }
        })
    })

    //make the button work with the api and it is done also update comments when u post one
    commentsSection.appendChild(makeCommentElement)
    return
  }
  postElement.querySelector(`#show-comments-btn-${postId}`).innerHTML = "Show Comments"
}

function orderPostByDate(posts) {
  const sortedPosts = posts

  sortedPosts.sort((post1, post2) => {
    const dateTime1 = new Date(post1["date_posted"])
    const dateTime2 = new Date(post2["date_posted"])

    return dateTime1.getTime()-dateTime2.getTime()
  })
  return sortedPosts
}

</script>

```

