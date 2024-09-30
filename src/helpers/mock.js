import productJson from './product.json';
import productImagesJson from './product_images.json';
import blogJson from './blog.json';
/**

*/
function generateMockProductData(count, tag) {
  const products = productJson;
  const filtered = products.filter((item) => item.tags.includes(tag));
  return filtered.slice(0, count);
}

function generateMockBlogData(count) {
  return blogJson.slice(0, count);
}

function fetchProductImages(productId) {
  const products = productImagesJson;

  const filtered = products.filter((item) => item.productId === productId);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    return null;
  }
}

export { generateMockProductData, generateMockBlogData, fetchProductImages };
