const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  userName: { type: 'String' },
  password: { type: 'String' },
  email: { type: 'String' },
  phoneNumber: { type: 'String' },
  address: { type: 'String' },
  googleId: { type: 'String' },
  facebookId: { type: 'String' },
  signupDate: { type: 'Date', default: Date.now },
});

mongoose.model('users', User);
