import "./products.css";
import {Prodduct} from "./Prodduct";

const products = [{
    productUrl: 'https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
    productName: "Product A", productId: 1,
    createdBy: 'Masud Rana',
    likeCount: '100k',
    watchCount: '400k',
    type: 'Pro'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422',
    productName: "Product A", productId: 2,
    createdBy: 'Payal jangra',
    likeCount: '50k',
    watchCount: '500k',
    type: 'Team'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
    productName: "Product A",
    productId: 3,
    createdBy: 'Masud Rana',
    likeCount: '100k',
    watchCount: '400k',
    type: 'Pro'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422',
    productName: "Product A",
    productId: 4,
    createdBy: 'Payal jangra',
    likeCount: '50k',
    watchCount: '500k',
    type: 'Team'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
    productName: "Product A", productId: 5,
    createdBy: 'Masud Rana',
    likeCount: '100k',
    watchCount: '400k',
    type: 'Pro'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422',
    productName: "Product A", productId: 6,
    createdBy: 'Payal jangra',
    likeCount: '50k',
    watchCount: '500k',
    type: 'Team'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
    productName: "Product A", productId: 7,
    createdBy: 'Masud Rana',
    likeCount: '100k',
    watchCount: '400k',
    type: 'Pro'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422',
    productName: "Product A", productId: 8,
    createdBy: 'Payal jangra',
    likeCount: '50k',
    watchCount: '500k',
    type: 'Team'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
    productName: "Product A", productId: 9,
    createdBy: 'Masud Rana',
    likeCount: '100k',
    watchCount: '400k',
    type: 'Pro'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422',
    productName: "Product A", productId: 10,
    createdBy: 'Payal jangra',
    likeCount: '50k',
    watchCount: '500k',
    type: 'Team'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
    productName: "Product A", productId: 11,
    createdBy: 'Masud Rana',
    likeCount: '100k',
    watchCount: '400k',
    type: 'Pro'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422',
    productName: "Product A", productId: 12,
    createdBy: 'Payal jangra',
    likeCount: '50k',
    watchCount: '500k',
    type: 'Team'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
    productName: "Product A", productId: 13,
    createdBy: 'Masud Rana',
    likeCount: '100k',
    watchCount: '400k',
    type: 'Pro'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422',
    productName: "Product A", productId: 14,
    createdBy: 'Payal jangra',
    likeCount: '50k',
    watchCount: '500k',
    type: 'Team'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
    productName: "Product A", productId: 15,
    createdBy: 'Masud Rana',
    likeCount: '100k',
    watchCount: '400k',
    type: 'Pro'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422',
    productName: "Product A", productId: 16,
    createdBy: 'Payal jangra',
    likeCount: '50k',
    watchCount: '500k',
    type: 'Team'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
    productName: "Product A", productId: 17,
    createdBy: 'Masud Rana',
    likeCount: '100k',
    watchCount: '400k',
    type: 'Pro'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422',
    productName: "Product A", productId: 18,
    createdBy: 'Payal jangra',
    likeCount: '50k',
    watchCount: '500k',
    type: 'Team'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
    productName: "Product A", productId: 19,
    createdBy: 'Masud Rana',
    likeCount: '100k',
    watchCount: '400k',
    type: 'Pro'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422',
    productName: "Product A", productId: 20,
    createdBy: 'Payal jangra',
    likeCount: '50k',
    watchCount: '500k',
    type: 'Team'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
    productName: "Product A", productId: 21,
    createdBy: 'Masud Rana',
    likeCount: '100k',
    watchCount: '400k',
    type: 'Pro'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422',
    productName: "Product A", productId: 22,
    createdBy: 'Payal jangra',
    likeCount: '50k',
    watchCount: '500k',
    type: 'Team'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3364647/file/original-498d3736f3d31c52a8bffcea983a0e4e.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
    productName: "Product A", productId: 23,
    createdBy: 'Masud Rana',
    likeCount: '100k',
    watchCount: '400k',
    type: 'Pro'
}, {
    productUrl: 'https://cdn.dribbble.com/userupload/3005355/file/original-4a381ab16a0281e662055710e875ffa6.png?resize=450x338&vertical=center',
    userIcon: 'https://cdn.dribbble.com/users/466659/avatars/mini/ce34610b1ea88c449a0b22a9145b082c.png?1656416422',
    productName: "Product A", productId: 24,
    createdBy: 'Payal jangra',
    likeCount: '50k',
    watchCount: '500k',
    type: 'Team'
}]

export function Products() {

    return <div className="products">
        {products.map(product => <Prodduct product={product}/>)}
    </div>;
}
