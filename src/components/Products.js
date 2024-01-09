import { useState } from 'react';
import './products.css';
import Plus from './Plus';

// Получам данные из localStorage
let masString = localStorage.getItem('zzz')
let productsList = JSON.parse(masString)

let nextId = productsList[productsList.length-1].id + 1;

// Если localStorage пустой, задаем начальные значения
if (productsList === null) {

nextId = 3;

productsList = [
    { id: 0, name: 'Marta Colvin Andrade', price: 123, img: 'images/image-5.png' },
    { id: 1, name: 'Lamidi Olonade Fakeye', price: 456, img: 'images/image-6.png' },
    { id: 2, name: 'Louise Nevelson', price: 789, img: 'images/image-1.png' },
]
}

// Задаем список картинок
var options = [
    {label: 'Выберите картинку', value: ''},
    {label: 'Стул цветной', value: 'images/image-1.png'},
    {label: 'Горшки', value: 'images/image-2.png'},
    {label: 'Ваза', value: 'images/image-3.png'},
    {label: 'Лампа', value: 'images/image-4.png'},
    {label: 'Стул черно-белый', value: 'images/image-5.png'},
    {label: 'Табуретка', value: 'images/image-6.png'},
    {label: 'Стулья', value: 'images/image-7.png'},
    {label: 'Ваза', value: 'images/image-8.png'},
    {label: 'Люстра', value: 'images/image-9.png'}
]

console.log(options)

// Задаем значение useState для каждого поля товара
function Products() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const [products, setProducts] = useState(productsList);

// Сохраняем результат ввода или удаления товара в localStorage
    masString = JSON.stringify(products)
    localStorage.setItem('zzz', masString)

    console.log('setState: ', products)

// Задаем значение useState для модального окна
    const [modalActive, setModalActive] = useState(false)

// Список товаров
    return (
        <div className = 'shop'>
            <div className = 'shop-content'>
                <div className = 'shop-products'>                 
                        {products.map((product) => (
                            <div className = 'shop-product' key={product.id}>
                                <div className = 'shop-image'><img src = {product.img} alt = 'Картинка' />
                                </div>
                                <div className = 'product-footer'>
                                    <div className = 'shop-text'>
                                        <div className = 'shop-title'>{product.name}</div>
                                        <div className = 'shop-price'>£{product.price}</div>
                                    </div>    

{/* Кнопка удаления товара                                     */}
                                    <button className="product-button"
                                        onClick={() => {
                                            setProducts(
                                                products.filter(
                                                    (a) =>
                                                        a.id !==
                                                        product.id
                                                )
                                            );
                                        }}
                                    >
                                        
                                    </button>
                                    
                                </div>
                            </div>
                        ))}                   
                </div>

{/* Кнопка открывания модального окна добавления товара */}
                <button className='shop-button' onClick={() => setModalActive(true)}>Добавить товар</button>
            </div>

{/* Модальное окно добавления товара */}
            <Plus active={modalActive} setActive={setModalActive}>

            <div className='plus-content'>

                <input className = 'products-input' placeholder="Название товара"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input className = 'products-input' placeholder="Цена, £"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <select 
                    className = 'products-input select-width'
                    options={options}
                    value={img}
                    onChange={(e) => setImg(e.target.value)}>

                    {options.map((image) => (
                        <option value = {image.value}>{image.label}</option>
                    ))}

                </select>
                <div  className='shop-buttons'>
{/* Кнопка сохранения товара и закрытия модального окна */}
                <button className='shop-button'
                    onClick={() => {

// Проверка заполненности всех полей                    
                        if (name && price && img ) {
                        setProducts([
                            ...products,
                            { id: nextId++, name: name, price: price, img: img },
                        ]);
                    }
                        console.log('local: ', productsList)

                        setModalActive(false)
                    }}
                >
                    Добавить
                </button>

{/* Кнопка закрытия модельного окна без сохранения товара */}
                <button className='shop-button' onClick={() => {
                setModalActive(false)               
                return 
                }}>
                    Отмена
                </button>
                </div>
            </div>
            </Plus> 
        </div>

    );
}

export default Products