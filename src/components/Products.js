import "./products.css";
import { Prodduct } from "./Prodduct";

const products = [
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707",
    productName: "Website-desgin-landing.....",
    productId: 1,
    createdBy: "Masud Rana",
    likeCount: "100k",
    watchCount: "400k",
    type: "Pro",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/4949363/avatars/mini/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777",
    productName: "Website-desgin-landing....",
    productId: 2,
    createdBy: "Payal jangra",
    likeCount: "50k",
    watchCount: "500k",
    type: "Team",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/2970030/file/original-b405f07b44b99610820219e22202c3a4.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707",
    productName: "Web site-desgin-landing....",
    productId: 3,
    createdBy: "Halo Lab",
    likeCount: "200k",
    watchCount: "300k",
    type: "Pro",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/4269144/file/original-7b9f29d001af4011ce5bf1fd53d7eab6.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/174531/avatars/mini/15aa8b82e7c45563c3300038f5e18c5b.jpg?1575308145",
    productName: "Start free trail",
    productId: 4,
    createdBy: "Squarespace",
    likeCount: "50k",
    watchCount: "500k",
    type: "Team",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/3940650/file/original-836c89ad010c82e56f5a6856bd7e876c.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707",
    productName: "Product A",
    productId: 5,
    createdBy: "Masud Rana",
    likeCount: "100k",
    watchCount: "400k",
    type: "Pro",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/4090380/file/still-6567cb45e34dfe67b6856f6a00e8ebb5.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/4949363/avatars/mini/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777",
    productName: "Product A",
    productId: 6,
    createdBy: "Payal jangra",
    likeCount: "50k",
    watchCount: "500k",
    type: "Team",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/users/6047818/screenshots/17785662/media/c38b67a583a7c12a89ce65e4e60cb01a.png?resize=400x300&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/174531/avatars/mini/15aa8b82e7c45563c3300038f5e18c5b.jpg?1575308145",
    productName: "Start free trail",
    productId: 7,
    createdBy: "Squarespace",
    likeCount: "100k",
    watchCount: "400k",
    type: "Pro",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/4509611/file/original-1d161051a059d65fb57c5923bb6c2b69.png?resize=400x300&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/4949363/avatars/mini/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777",
    productName: "Product A",
    productId: 8,
    createdBy: "Payal jangra",
    likeCount: "50k",
    watchCount: "500k",
    type: "Team",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/3060990/file/original-347ae4e77ffe583e7288e8dfb5e1f47e.png?resize=400x300&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707",
    productName: "Product A",
    productId: 9,
    createdBy: "Masud Rana",
    likeCount: "100k",
    watchCount: "400k",
    type: "Pro",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/2591279/file/original-c064890641088cf6d36f92774364bcb1.png?resize=400x300&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/25514/avatars/mini/070810be04e642201206c8fbdffcbf8a.png?1455536235",
    productName: "Clearbit website",
    productId: 10,
    createdBy: "Ramotion",
    likeCount: "50k",
    watchCount: "500k",
    type: "Team",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707",
    productName: "Portfolio design",
    productId: 11,
    createdBy: "Masud Rana",
    likeCount: "100k",
    watchCount: "400k",
    type: "Pro",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/5842867/file/original-4371b0187d8355ba676b8e4503bcd52f.png?resize=400x300&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422",
    productName: "Web site:landing....",
    productId: 12,
    createdBy: "Halo lab",
    likeCount: "50k",
    watchCount: "500k",
    type: "Team",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/4487621/file/original-42385dcdd7ed611a7f8ab4118249e571.png?resize=400x300&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/25514/avatars/mini/070810be04e642201206c8fbdffcbf8a.png?1455536235",
    productName: "Clearbit website",
    productId: 13,
    createdBy: "Ramotion",
    likeCount: "200k",
    watchCount: "400k",
    type: "Pro",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/174531/avatars/mini/15aa8b82e7c45563c3300038f5e18c5b.jpg?1575308145",
    productName: "Start free trail",
    productId: 14,
    createdBy: "Squarespace",
    likeCount: "50k",
    watchCount: "300k",
    type: "Team",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/4392147/file/original-88e898b1950bfb3c9cfa816663be1675.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707",
    productName: "Product A",
    productId: 15,
    createdBy: "Masud Rana",
    likeCount: "100k",
    watchCount: "400k",
    type: "Pro",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/4949363/avatars/mini/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777",
    productName: "Web site design....",
    productId: 16,
    createdBy: "Payal jangra",
    likeCount: "50k",
    watchCount: "500k",
    type: "Team",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/8359896/file/original-4fedf656a4efde4bf73c0c997240f2ba.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707",
    productName: "Product A",
    productId: 17,
    createdBy: "Masud Rana",
    likeCount: "100k",
    watchCount: "400k",
    type: "Pro",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/3786670/file/original-5eac308136bbe2c51ddf4ef823bed429.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/4949363/avatars/mini/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777",
    productName: "Website home-page",
    productId: 18,
    createdBy: "Payal jangra",
    likeCount: "50k",
    watchCount: "500k",
    type: "Team",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/3758462/file/still-7dd86d13203650f2abc96355b8191ebe.png?resize=450x338&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707",
    productName: "Website design",
    productId: 19,
    createdBy: "Masud Rana",
    likeCount: "100k",
    watchCount: "400k",
    type: "Pro",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/users/6234/screenshots/17396277/media/8119a1bd3b5784b7acc868fa09df1c38.png?resize=400x300&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/25514/avatars/mini/070810be04e642201206c8fbdffcbf8a.png?1455536235",
    productName: "Clearbit website",
    productId: 20,
    createdBy: "Ramotion",
    likeCount: "50k",
    watchCount: "500k",
    type: "Team",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/4856254/file/original-63a34410a5b32deec10927905aa1d0e1.png?resize=400x300&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707",
    productName: "Website design.....",
    productId: 21,
    createdBy: "Masud Rana",
    likeCount: "100k",
    watchCount: "400k",
    type: "Pro",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/2616018/file/original-bafccdbda845b083696d07f77bc724ee.png?resize=400x300&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/174531/avatars/mini/15aa8b82e7c45563c3300038f5e18c5b.jpg?1575308145",
    productName: "Atopa website",
    productId: 22,
    createdBy: "Squarespace",
    likeCount: "50k",
    watchCount: "500k",
    type: "Team",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/2591279/file/original-c064890641088cf6d36f92774364bcb1.png?resize=400x300&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707",
    productName: "NXN Website design",
    productId: 23,
    createdBy: "Masud Rana",
    likeCount: "100k",
    watchCount: "400k",
    type: "Pro",
  },
  {
    productUrl:
      "https://cdn.dribbble.com/userupload/5238840/file/original-b63d8cfce57bdd3d838688991825cc83.png?resize=400x300&vertical=center",
    userIcon:
      "https://cdn.dribbble.com/users/25514/avatars/mini/070810be04e642201206c8fbdffcbf8a.png?1455536235",
    productName: "Clearbit website...",
    productId: 24,
    createdBy: "Ramotion",
    likeCount: "50k",
    watchCount: "500k",
    type: "Team",
  },
];

export function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Prodduct product={product} />
      ))}
    </div>
  );
}
