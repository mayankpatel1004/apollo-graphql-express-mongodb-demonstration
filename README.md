# apollo-graphql-express-mongodb-demonstration
apollo-graphql-express-mongodb-demonstration

```bash
#mutation{
  # createPost(post: {
  #  title: "This is Second post"
  #  description: "This is the second description"
  # }) {
  #   id
  #   title
  #   description
  # }

  # updatePost(id:"615ea7698a6fa4ac5867c98c", post: {
  #   title: "First Post Title updated",
  # }) {
  #   id
  #   title
  #   description
  # }

  # deletePost(id:"615ea8f000b6657ad4dc5e15")
#}


query {

getAllPosts {
    id
    title
    description
  }

  getPost(id: "615eaf73a37ae0f128978652") {
    title
    description
  }
}

```
