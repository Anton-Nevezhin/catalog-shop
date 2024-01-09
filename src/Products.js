import Menu from './Menu';

function Products() {

    // const index = 456

    // const art = {
    //   name: 'Стол',
    //   price: 350,
    //   img: 'Число'
    // }

    const products = [
      {
      title: 'Стол',
      price: 150,
      img: 'Номер'
    },
    {
      title: 'Стул',
      price: 250,
      img: 'Номер'
    },
    {
      title: 'Табуретка',
      price: 350,
      img: 'Номер'
    },
    {
      title: 'Диван',
      price: 450,
      img: 'Номер'
    },  {
      title: 'Кровать',
      price: 550,
      img: 'Номер'
    }
  ]
  
    return (
        <div>
            {/* <Menu
            // art = {art}
            index = {index}
            /> */}
            Products
            <Menu
      // tovar = {tovar}
      // int = {int}
      products = {products}
      />
        </div>
)
}

export default Products