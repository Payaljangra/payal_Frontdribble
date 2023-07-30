import './prodduct.css'
import {AiFillHeart,AiOutlineHeart,AiTwotoneEye} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'
export function Prodduct({product}) {
    return <div className="product">
        <div className="product_image">
            <img src={product.productUrl}/>
            <div className="product_actions">
                <span>{product.productName}</span>
                <div className="product_actions__icons">
                    <BsBookmark className="product_actions__icon"/>
                    <AiOutlineHeart className="product_actions__icon"/>
                </div>
            </div>
        </div>
        <div className="product_footer">
            <div className="user_info">
                <img src={product.userIcon}/>
                <span className="product__user-name">{product.createdBy}</span>
                <span className="product_type">{product.type}</span>
            </div>
            <div className="product_analy">
                <figure>
                    <AiFillHeart className="analy_icon"/>
                    <span>{product.likeCount}</span>
                </figure>
                <figure>
                    <AiTwotoneEye className="analy_icon"/>
                    <span>{product.likeCount}</span>
                </figure>
            </div>
        </div>
    </div>
}