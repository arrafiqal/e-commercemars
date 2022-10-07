import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import CardProduk from "../../src/components/CardProduk"

let products = [
    {
        "id": 1,
        "title": "Netflix Private UHD 4K",
        "price": 50000,
        "description": "lorem ipsum",
        "category": "NETFLIX",
        "image": "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
      },
      {
        "id": 2,
        "title": "Netflix Private UHD 4K 1",
        "price": 40000,
        "description": "lorem ipsum",
        "category": "NETFLIX",
        "image": "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
      },
      {
        "id": 3,
        "title": "Netflix Private UHD 4K 2",
        "price": 20000,
        "description": "lorem ipsum",
        "category": "NETFLIX",
        "image": "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
      },
      {
        "id": 4,
        "title": "Netflix Private UHD 4K34",
        "price": 60000,
        "description": "lorem ipsum",
        "category": "NETFLIX",
        "image": "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
      },
      {
        "id": 5,
        "title": "Netflix Private UHD 4K 9",
        "price": 10000,
        "description": "lorem ipsum",
        "category": "NETFLIX",
        "image": "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
      },
]

const ProdukPage = () => {
    const [data, setData] = useState([])

    const getProduk = () => {
        axios.get('/api/products').then((res) => {
            console.log(res)
            setData(res.data.result)
        }).catch((err) => {
            setData([])
            console.log(err.response)
        })
    }

    useEffect(() => {
        // getProduk()

        setData(products)
    }, [])

    return (
        <div className="product-wrapper">
            <Link href="/" passHref>
                <a className="btn-back">kembali</a>
            </Link>
            <div className="card-wrapper">
                {data.map((product, index) => (
                    <CardProduk 
                        key={index} 
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProdukPage