<template>
  <v-layout justify-center>
    <div class="col-8">
      <v-layout class="mb-2">
        <img src="https://via.placeholder.com/2000x500" alt="" width="100%" >
      </v-layout>
      <div>
        <div class="d-flex">
          <a href="">
            <img src="https://via.placeholder.com/100" alt="">
          </a>
          <div>
            <div>
              <a @click.prevent="goTo({ name: 'ProfilePage' })">
                name
              </a>
            </div>
            <div>
              (alias name)
            </div>
          </div>
          <span>icon menu</span>
        </div>
      </div>
      <div class="mb-3">
        <div class="d-flex">
          <div class="mr-2">info</div>
          <div class="mr-2">friends</div>
          <div class="mr-2">groups</div>
        </div>
      </div>
      <div class="d-flex">
        <div class="col-5">
          <div>Intro</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi qui omnis vero accusamus culpa tempore nesciunt accusantium nisi asperiores velit ipsam cum, quisquam exercitationem numquam quod provident expedita illo sed.
          </div>
          <div>
            top art
          </div>
          <div>
            <div class="d-flex">
              <div class="col-4 pa-1">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
              </div>
              <div class="col-4 pa-1">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
              </div>
              <div class="col-4 pa-1">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
              </div>
            </div>
            <div class="d-flex">
              <div class="col-4 pa-1">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
              </div>
              <div class="col-4 pa-1">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
              </div>
              <div class="col-4 pa-1">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
              </div>
            </div>
          </div>
          <div>
            friends
          </div>
          <div class="d-flex">
            <div class="col-4 pa-1">
              <a href="profile.html">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
                name
              </a>
            </div>
            <div class="col-4 pa-1">
              <a href="profile.html">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
                name
              </a>
            </div>
            <div class="col-4 pa-1">
              <a href="profile.html">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
                name
              </a>
            </div>
          </div>
          <div class="d-flex">
            <div class="col-4 pa-1">
              <a href="profile.html">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
                name
              </a>
            </div>
            <div class="col-4 pa-1">
              <a href="profile.html">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
                name
              </a>
            </div>
            <div class="col-4 pa-1">
              <a href="profile.html">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
                name
              </a>
            </div>
          </div>
          <div class="d-flex">
            <div class="col-4 pa-1">
              <a href="profile.html">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
                name
              </a>
            </div>
            <div class="col-4 pa-1">
              <a href="profile.html">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
                name
              </a>
            </div>
            <div class="col-4 pa-1">
              <a href="profile.html">
                <img src="https://via.placeholder.com/100" alt="" class="img-fluid">
                name
              </a>
            </div>
          </div>
        </div>
        <div class="col-7">
          <form class="mb-3 wrap-posting">
            <img src="https://via.placeholder.com/40" alt="" class="">
            <input type="text">
            <button>Post</button>
          </form>
          <div>
            <div class="post-item">
              <div class="d-flex">
                <a href="">
                  <img src="https://via.placeholder.com/40" alt="">
                </a>
                <div>
                  <div>
                    <a @click.prevent="goTo({ name: 'ProfilePage' })">
                      name
                    </a>
                  </div>
                  <div>
                    1m ago
                  </div>
                </div>
                <span>icon menu</span>
              </div>
              <div>
                message
              </div>
              <div class="d-flex">
                <button class="btn col-4 mr-1">like</button>
                <button class="btn col-4 mr-1">comment</button>
                <button class="btn col-4">share</button>
              </div>
              <div>
                <div class="d-flex">
                  <a href="">
                    <img src="https://via.placeholder.com/40" alt="">
                  </a>
                  <div>
                    <div>
                      <a href="">
                        name
                      </a>
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in laborum non, minus dolore quisquam aliquid iure aliquam nobis, consequatur nulla. Labore veniam eveniet odit fugit dolorum asperiores voluptatibus consequuntur!
                    </div>
                  </div>
                  <span>icon menu</span>
                </div>
                <div class="d-flex">
                  <a href="">
                    <img src="https://via.placeholder.com/40" alt="">
                  </a>
                  <div>
                    <div>
                      <a href="">
                        name
                      </a>
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in laborum non, minus dolore quisquam aliquid iure aliquam nobis, consequatur nulla. Labore veniam eveniet odit fugit dolorum asperiores voluptatibus consequuntur!
                    </div>
                  </div>
                  <span>icon menu</span>
                </div>
              </div>
              <div><a href="">Xem thêm bình luận</a></div>
              <div class="d-flex">
                <a href="">
                  <img src="https://via.placeholder.com/40" alt="">
                </a>
                <input type="text" class="comment...">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-layout>
</template>
