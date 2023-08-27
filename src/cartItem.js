import React from "react";

class CartItem extends React.Component {
    render() {
        return (
            < div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            < div className="right-block">
                <div style={{fontSize:20}}>Phone</div>
                    <div style={{ color:'#777' }}>Rs 999</div>
                    <div style={{ fontSize: 15, color: '#777' }}>QTY. 1</div>
                <div className="cart-action-items">
                    {/*button*/}</div>
            </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background:'#ccc'
    }
}
export default CartItem;