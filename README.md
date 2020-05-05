# Node API 2 Guided Project Starter Code

Guided project starter code for **Node API 2** module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover how to use `Express Routers` to break up the application to make it more maintainable.

## Prerequisites

- a REST client like [insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.

Please follow along as the instructor builds the API step by step.

### NOTES

## REST

- [ ] Guidelines, not a standard 

## LEVELS

    - 0 - No REST.
    - 1 - Resources.
    - 2 - HTTP Methods/Verbs
    - 3 - Hypermedia (links).


### API BUILD

|    Action                 |    Endpoint       | Method | REST STYLE URI       | NOTES                     |
| :------------------------ | :---------------- | :----- | :------------------  |:------------------------- |
| See List of Hubs          | /hubsList         | GET    | /hubs                |                           |
| See Details for a hub     | /hubdetails       | GET    | /hubs/:id            |                           |
| Add a hub                 | /newhub           | POST   | /hubs                |                           |
| Update a hub              | /modifyhub        | PUT    | /hubs/:id            |                           |
| Remove a hub              | /erasehub         | DELETE | /hubs/:id            |                           |
| See List of Tracks        |                   | GET    | /tracks              |                           |
| See List of Units         |                   | GET    | /units               |                           |
| See Units for a Track     | /trackunits       | GET    | /tracks/:id/units    | sub routes                |
| See Units for a Track     | /trackunits       | GET    | /units?track=1       | query string for filtering|
| See Sprints for a Unit    |                   | GET    | /units/:id/sprints   |                           |
| See Modules for a Sprint  |                   | GET    | /sprints/:id/modules |                           |


- Does the Resource make sense by itself

- Emojis as a reaction to a slack message
`/tracks/:id/uits/:id`   <--

### Query String Parameters

https://www.google.com
/search
`?` --> marks the beginning of the query string
`source=hp` --> key/value pair
`&` --> seperates key/value pairs
ei=QaWxXvH3Ec_isAWc_oMg&q=query+string+parameters&oq=query+string+para&gs_lcp=CgZwc3ktYWIQARgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoFCAAQgwE6BAgAEAo6BwgAEEYQ-QFQhQFYmhNgvSNoAHAAeAKAAZ8DiAHWHZIBCTAuNi43LjIuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab