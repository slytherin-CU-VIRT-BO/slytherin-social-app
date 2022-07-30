import React from 'react';
// import './Dashboard.css';
import PostList from '../PostList/PostList';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../utils/queries';

export default function Dashboard() {
  const { loading, data } = useQuery(GET_POSTS)
  const posts = data?.posts || []
  console.log(data);

  return (
    <>

      <main>
        <div class="dash">
          <div class="stats">
            <div className="">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <PostList
                  posts={posts}
                />
              )}
            </div>
            <div class="overview">
              <div class="panel">
                <div>
                  <div class="icon">
                    <i class="fas fa-user"></i>
                  </div>
                </div>
                <div>
                  <h2>Friend 1</h2>
                  <small>Friends since a date</small>
                </div>
              </div>
              <div class="panel">
                <div>
                  <div class="icon">
                    <i class="fas fa-user"></i>
                  </div>
                </div>
                <div>
                  <h2>Friend 2</h2>
                  <small>Friends since a date</small>
                </div>
              </div>
              <div class="panel">
                <div>
                  <div class="icon">
                    <i class="fas fa-user"></i>
                  </div>
                </div>
                <div>
                  <h2>Friend 3</h2>
                  <small>Friends since a date</small>
                </div>
              </div>
            </div>
            <div class="overview">
              <div class="panel">
                <div>
                  <div class="icon">
                    <i class="fas fa-user"></i>
                  </div>
                </div>
                <div>
                  <h2>Friend </h2>
                  <small>Friends since a date</small>
                </div>
              </div>
              <div class="panel">
                <div>
                  <div class="icon">
                    <i class="fas fa-user"></i>
                  </div>
                </div>
                <div>
                  <h2>Friend 5</h2>
                  <small>Friends since a date</small>
                </div>
              </div>
              <div class="panel">
                <div>
                  <div class="icon">
                    <i class="fas fa-user"></i>
                  </div>
                </div>
                <div>
                  <h2>Friend 6</h2>
                  <small>Friends since a date</small>
                </div>
              </div>
            </div>

          </div>

          <div className="activities">
            <div className="activities-header">
              <h3>Comments</h3>
              <a href="#">See all</a>
            </div>
            <div className="post panel">
              <div className="post-header">
                <div>
                  <h4>User user</h4>
                  <small>commented on your post</small>
                </div>
              </div>
              <div className="post-body">
                <p>Lorem ipsum Lorem ipsum</p>
              </div>
              <button>
                    <i className="fas fa-heart"></i>
                  </button>
              <div>
                <small>1h ago</small>
                <div>
                  <button>
                    <i className="fas fa-share"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="post panel">
              <div className="post-header">
                <div>
                  <h4>User User</h4>
                  <small>commented on your post</small>
                </div>
              </div>
              <div className="post-body">
                <p>Lorem upsum Lorem ipsum</p>
              </div>
              <div>
                <small>2h ago</small>
                <div>
                  <button>
                    <i className="fas fa-heart"></i>
                  </button>
                  <button>
                    <i className="fas fa-share"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="post panel">
              <div className="post-header">
                <div>
                  <h4>User user</h4>
                  <small>commented on your video</small>
                </div>
              </div>
              <div className="post-body">
                <p>"Lorem upsum Lorem ipsum"</p>
              </div>
              <div>
                <small>3h ago</small>
                <div>
                  <button>
                    <i className="fas fa-heart"></i>
                  </button>
                  <button>
                    <i className="fas fa-share"></i>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main></>
  )
}
