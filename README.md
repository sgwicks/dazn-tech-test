# DAZN Tech Test

API online at: https://dazn-tech-test.herokuapp.com/

Built using npm with packages:
  - express.js v.4.17
  - knex.js v.0.21
  - pg v.8.3

Test suite: 
  - jest v.26.2
  - supertest v.4.0

## Building at Home

The production version of this solution is ready for a push to Heroku through git.

A file in the root directory, `user.js` is .gitignore'd, and you will have to set this up for yourself. It simply exports an object in the form:

``` javascript
{ user: 'username', password: 'password' }
```

These are required details for psql on Linux. If using on MacOS (where my understanding is that these aren't required) then this can be exported as an empty object, or alternatively you can remove the reference to them from `knexfile.js`.

## How It Works

The API uses standard HTTP requests to an SQL database to keep track of how many streams a user has requested and to serve them a relevant stream key if their current streams are logged at less than 3.

A GET request to `/api/streams/:user_id/:stream_id` will first check `user_id` against the `users` table of the database for current `stream_count` value.

If > 2, the response will be a 403.

If < 3 then the database will increment `stream_count` by +1 before returning a stream key.

A PATCH request to `/users/:user_id` will decrement `stream_count` by -1. This request is assumed to be made whenever a user closes a stream they're currently watching.

## Faults & Improvements

Due to the limits of my knowledge and ability, this solution is definitely not elegant or reasonable on a larger scale.

This solution requires too many HTTP requests, likely to quickly overload a server or database when scaled up.

The solution is also not very good at reacting in real time. If delays occur in requests, it's easy to imagine a situation where requests are allowed or denied based on data that looks correct in the database but hasn't yet been properly updated due to requests waiting to be resolved.

Before settling on this solution I had started looking into websockets as a potential real-time tracker of streams. Unfortunately, since I have no real experience with it, I determined it would have been unreasonable to attempt to learn it and build a solution in a reasonable time frame. I'm certain that with those skills, I could have found a much more appropriate solution, however.