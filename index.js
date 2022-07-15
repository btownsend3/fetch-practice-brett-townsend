const colorContainer = document.getElementById('container-color')
const emojiContainer = document.getElementById('emojis-list')

async function getColors() {
    try {
        const res = await fetch('https://www.example.com/colors')
        return res.json()
    } catch (err) {
        console.log(err)
        return null
    }
}

async function getEmojis() {
    try {
        const res = await fetch('https://www.example.com/emojis')
        return res.json()
    } catch (err) {
        console.log(err)
        return null
    }
}

async function render() {
    const colors = await getColors()
    const emojis = await getEmojis()
    if (!colors || !emojis) {
        colorContainer.html = "Could not load resources"
    }
    let colorContent = ''
    colors.forEach(color => {
        colorContent += `
        <div class="color" style="background-color:${color.value}">
            <p class="${color.name}">${color.name}</p>
        </div>`
    })
    colorContainer.innerHTML = colorContent

    let emojiContent = ''
    for (const [key, value] of Object.entries(emojis)) {
        emojiContent += `<img class="emojis" src="${value}" />`
    }
    emojiContainer.innerHTML = emojiContent
}

render()
