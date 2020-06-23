# deno-rest-api
A simple rest API made with Deno

## run the app
`deno run --allow-env --allow-net app.ts`

## routes

| Route                | Description              |
| -------------------- | ------------------------ |
| GET /books           | return all the books     |
| GET /books/{isbn}    | return a book            |
| POST /books          | add a book               |
| PUT /books/{isbn}    | update a book            |
| DELETE /books/{isbn} | delete a book            |

