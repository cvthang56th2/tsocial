<template>
  <v-layout>
    <div class="left-content col-3">
      <ul>
        <li class="mb-1">
          <a @click.prevent="goTo({ name: 'ProfilePage' })">
            <img src="https://via.placeholder.com/40" alt="">
            name name name
          </a>
        </li>
        <li class="mb-1">
          <a href=""><span>icon</span> nav 1</a>
        </li>
        <li class="mb-1">
          <a href=""><span>icon</span> nav 2</a>
        </li>
      </ul>
      <ul>
        <li class="mb-1">
          <a href="">
            <img src="https://via.placeholder.com/40" alt="">
            group name 1
          </a>
        </li>
        <li class="mb-1">
          <a href="">
            <img src="https://via.placeholder.com/40" alt="">
            group name 2
          </a>
        </li>
      </ul>
    </div>
    <div class="wrap-content col-6">
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
    <div class="right-content col-3">
      <div>new friends</div>
      <div class="d-flex">
        <a href="">
          <img src="https://via.placeholder.com/40" alt="">
        </a>
        <div class="d-flex flex-column">
          <a href="">
            name name name
          </a>
          <span>multial friends</span>
          <div class="d-flex">
            <button class="btn mr-1">confirm</button>
            <button class="btn">cancel</button>
          </div>
        </div>
      </div>
      <div>Sinh nhật <span>aaa</span></div>
      <div class="d-flex">
        online
        <span>icon search</span>
        <span>icon menu</span>
      </div>
      <div>
        <a href="">
          <img src="https://via.placeholder.com/40" alt="">
          name
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://via.placeholder.com/40" alt="">
          name
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://via.placeholder.com/40" alt="">
          name
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://via.placeholder.com/40" alt="">
          name
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://via.placeholder.com/40" alt="">
          name
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://via.placeholder.com/40" alt="">
          name
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://via.placeholder.com/40" alt="">
          name
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://via.placeholder.com/40" alt="">
          name
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://via.placeholder.com/40" alt="">
          name
        </a>
      </div>
    </div>
  </v-layout>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomePage',
  components: {
  }
}
</script>
