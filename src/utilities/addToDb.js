const getStoreBook = () => {
    const storeBookSTR = localStorage.getItem("readList");
    if (storeBookSTR) {
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;
    } else {
        return [];
    }
}

const addToStoreDb = (id) => {
    const storeBookData = getStoreBook();
    if (storeBookData.includes(id)) {
        alert('Already added!')
    } else {
        storeBookData.push(id);
        localStorage.setItem("readList", JSON.stringify(storeBookData))
        alert('Added to read list!');

    }

}

export { addToStoreDb };