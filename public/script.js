async function onLoadPage() {
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json();
    const user_input = document.querySelector('input[type = 'text']');
    user_input.addEventListener('input', (e) => {
        
    })
}

window.onload = onLoadPage;