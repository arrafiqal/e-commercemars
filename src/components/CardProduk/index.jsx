import Image from "next/image";

const CardProduk = (props) => {

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
        }).format(number);
    }

    return (
    <div class="card">

        <div class="imgBox">
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png" alt="produk preview" class="mouse" />
        </div>
    
        <div class="contentBox">
            <h3>{props.title}</h3>
            <h2 class="price">{rupiah(props.price)}</h2>
            <a
              target="_blank"
              href={"https://wa.me/6281287264653/" + "?text=" + encodeURIComponent("Hallo saya ingin beli produk ini " + props.title + " dengan harga " + rupiah(props.price))}
              rel="noopener noreferrer"
              class="buy"
              >
              <span>Buy Now</span>
            </a>
        </div>
    
    </div>
    )
}

export default CardProduk