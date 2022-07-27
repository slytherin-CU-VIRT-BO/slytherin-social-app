import React from 'react'

export default function Post() {
  return (
    <div class="card">
    <h5 class="card-header">{user.name}</h5>
    <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.text}</p>
        <a href="#" class="btn btn-primary">Like</a>
    </div>
    </div>
  )
}
