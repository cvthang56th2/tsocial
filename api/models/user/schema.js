module.exports = {
  email: { 
    type: String, 
    required: '{PATH} is required!', 
    index: { unique: true } 
  },
  password: { 
    type: String,
    default: null
  },
  active: { 
    type: Boolean, 
    default: false 
  }
}