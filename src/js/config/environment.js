import prod from './prod';
import dev from './dev';

if (process.ENV == 'production') {
  module.exports = prod;
} else {
  module.exports = dev;
}