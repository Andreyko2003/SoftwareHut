import { createDeliveryClient } from '@kontent-ai/delivery-sdk'


export default function getPosts() {
  const deliveryClient = createDeliveryClient({
      projectId: 'f3d33e00-84dd-00c4-ae15-8b406518d035'
  });
  var posts = []
  const response = deliveryClient
    .items('untitled_content_type')
    .toPromise()
    .then(res =>  res.data.items.map((item) => {
      posts.push(item);
    }));
  return posts;
}
