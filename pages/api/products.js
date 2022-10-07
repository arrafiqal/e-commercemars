export default function handler(req, res) {
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
  
    res.status(200).json({
      code: 200,
      status: "OK",
      result: products,
    })
  }
  