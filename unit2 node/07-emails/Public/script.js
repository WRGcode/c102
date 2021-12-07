const url = '/api/v1/products'
const fileFromDOM = document.querySelector('.file-form')


const resetInput = document.querySelector('#reset')


resetInput.addEventListener("onclick", async (e) => {
    try {
        await axios.get(`/reset`)
    } catch (err) {
        console.error(err);
    }
})


