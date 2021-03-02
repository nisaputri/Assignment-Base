async function windowActions() {
    console.log("Window Loaded");

    const search = document.querySelector('#search');
    const form = document.querySelector('.searchForm');

    const request = await fetch('/api');
    const data = await request.json();


    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submitted query is', search.value);
        console.log('data quantity (should be 1000)', data.length)
        const display = data.filter((record) => {
            const val = search.value;
            const zip = record.zip;
            return zip.includes(val)
        });
        console.log('filtered data,', display)
    })





}

window.onload = windowActions;