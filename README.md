# How to setup

1. Git clone https://github.com/Fasalin/ibt-project.git
2. cd backend
3. npm install
4. cd ../ibt-project
5. npm install
6. npm run serve
7. Open new terminal (get to the backend folder)
8. npm run start (open browser on localhost 8080)
9. If backend does not run - IP should be added to mongo whitelist.

Now you have both frontend and backend servers running.

# Documentation
1. API
h1. Simple Inventory API This is a simple API

*Version:* 1.0.0

----

{toc:printable=true|style=square|minLevel=2|maxLevel=3|type=list|outline=false|include=.*}

h2. Endpoints

    h3. buyCar
    {status:colour=Yellow|title=patch|subtle=false}
    {code}
    patch /buy
    {code}
    *Summary:* Buy a car
    *Description:* Buys a car 


    h4. Parameters







    h4. Responses
        *Status Code:* 200
        *Message:*     search results matching criteria
        {code:title=Response Type}
array[cars]
        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "search results matching criteria",
  "schema" : {
    "type" : "array",
    "items" : {
      "$ref" : "#/definitions/cars"
    }
  }
}
        {code}
        *Status Code:* 400
        *Message:*     bad input parameter
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "bad input parameter"
}
        {code}
    ----

    h3. createCar
    {status:colour=Yellow|title=post|subtle=false}
    {code}
    post /create
    {code}
    *Summary:* creates a car object
    *Description:* Creates a car object 


    h4. Parameters







    h4. Responses
        *Status Code:* 200
        *Message:*     search results matching criteria
        {code:title=Response Type}
array[cars]
        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "search results matching criteria",
  "schema" : {
    "type" : "array",
    "items" : {
      "$ref" : "#/definitions/cars"
    }
  }
}
        {code}
        *Status Code:* 400
        *Message:*     bad input parameter
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "bad input parameter"
}
        {code}
    ----

    h3. createReview
    {status:colour=Yellow|title=post|subtle=false}
    {code}
    post /create-review
    {code}
    *Summary:* creates a review object
    *Description:* Creates a review object 


    h4. Parameters







    h4. Responses
        *Status Code:* 200
        *Message:*     search results matching criteria
        {code:title=Response Type}
array[reviews]
        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "search results matching criteria",
  "schema" : {
    "type" : "array",
    "items" : {
      "$ref" : "#/definitions/reviews"
    }
  }
}
        {code}
        *Status Code:* 400
        *Message:*     bad input parameter
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "bad input parameter"
}
        {code}
    ----

    h3. deleteCar
    {status:colour=Yellow|title=delete|subtle=false}
    {code}
    delete /delete-car
    {code}
    *Summary:* Delete a car object
    *Description:* Delete a car 


    h4. Parameters







    h4. Responses
        *Status Code:* 200
        *Message:*     search results matching criteria
        {code:title=Response Type}
array[cars]
        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "search results matching criteria",
  "schema" : {
    "type" : "array",
    "items" : {
      "$ref" : "#/definitions/cars"
    }
  }
}
        {code}
        *Status Code:* 400
        *Message:*     bad input parameter
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "bad input parameter"
}
        {code}
    ----

    h3. searchBoughtCars
    {status:colour=Yellow|title=get|subtle=false}
    {code}
    get /get-bought-cars
    {code}
    *Summary:* gets all bought cars
    *Description:* Get all bought cars 


    h4. Parameters







    h4. Responses
        *Status Code:* 200
        *Message:*     search results matching criteria
        {code:title=Response Type}
array[cars]
        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "search results matching criteria",
  "schema" : {
    "type" : "array",
    "items" : {
      "$ref" : "#/definitions/cars"
    }
  }
}
        {code}
        *Status Code:* 400
        *Message:*     bad input parameter
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "bad input parameter"
}
        {code}
    ----

    h3. searchCars
    {status:colour=Yellow|title=get|subtle=false}
    {code}
    get /
    {code}
    *Summary:* searches cars
    *Description:* Get all available car objects 


    h4. Parameters







    h4. Responses
        *Status Code:* 200
        *Message:*     search results matching criteria
        {code:title=Response Type}
array[cars]
        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "search results matching criteria",
  "schema" : {
    "type" : "array",
    "items" : {
      "$ref" : "#/definitions/cars"
    }
  }
}
        {code}
        *Status Code:* 400
        *Message:*     bad input parameter
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "bad input parameter"
}
        {code}
    ----

    h3. searchReviews
    {status:colour=Yellow|title=get|subtle=false}
    {code}
    get /get-reviews
    {code}
    *Summary:* gets all reviews
    *Description:* Get all review objects 


    h4. Parameters







    h4. Responses
        *Status Code:* 200
        *Message:*     search results matching criteria
        {code:title=Response Type}
array[reviews]
        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "search results matching criteria",
  "schema" : {
    "type" : "array",
    "items" : {
      "$ref" : "#/definitions/reviews"
    }
  }
}
        {code}
        *Status Code:* 400
        *Message:*     bad input parameter
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "bad input parameter"
}
        {code}
    ----

h2. Models

        h3. Cars
        ||Field Name||Required||Type||Description||
         |id | |UUID | |
 |carName | |String | |
 |longDesc | |String | |
 |price | |String | |
 |img | |String | |
 |buyerAddress | |String | |
 |buyerName | |String | |
        h3. Reviews
        ||Field Name||Required||Type||Description||
         |username | |String | |
 |text | |String | |
 |stars | |Integer | |
 |carName | |String | |
