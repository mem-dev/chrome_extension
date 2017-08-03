import prod from './prod';
import dev from './dev';

// module.exports = prod;
if (process.ENV == 'production') {
  module.exports = prod;
} else {
  module.exports = dev;
}