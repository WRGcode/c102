const url = '/api/v1/products'
const fileFromDOM = document.querySelector('.file-form')

const nameInput = document.querySelector('#name')
const PriceInput = document.querySelector('#price')
const imageInput = document.querySelector('#image')
const fileForm = document.querySelector(".file-form")

const container = document.querySelector('.container')
let imageValue;

fileForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const nameValue = nameInput.value
    const priceValue = nameInput.value
    console.log('testing ');
    try {
        const product = { name: nameValue, price: priceValue, image: imageValue }

        await axios.post(url, product)

        fetchProducts()

    } catch (err) {
        console.log(err);
    }
})


imageInput.addEventListener("change", async (e) => {
    const imageFile = e.target.files[0];
    const formData = new FormData()
    formData.append('image', imageFile)

    console.log(formData.keys());
    try {
        const {
            data: {
                image: {
                    src
                }
            }
        } = await axios.post(`${url}/uploads`, formData, {
            headers: {
                "content-Type": "multipart/form-data"
            }
        })
        imageValue = src
    } catch (err) {
        imageValue = null
        console.log(err);
    }
})

async function fetchProducts() {
    try {
        const {
            data: { products }
        } = await axios.get(url)
        const tempProducts = products.map(each => {
            return `<article class="product">
            <img src="${each.image}" alt="${each.name}" class="img" />
            <footer>
            <p>${each.name}</p>
            <span>${each.price}</span>
            </footer>
            </article>`;
        })
            .join("")
        container.innerHTML = tempProducts
    } catch (error) {
        console.log(error);
    }
}

fetchProducts()