document.addEventListener('DOMContentLoaded', ()=>{
    const targetElement = document.getElementById('navbar-container');
    if (targetElement){
        fetch('C:/Users/avalm/master-repo/nav_bar.html')
            .then(response =>{
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html =>{
                targetElement.innerHTML = html;
            })
            .catch(error =>{
                console.error('Error fetching HTML:', error);
                targetElement.innerHTML= '<p>Error loading content.</p>';
            });
    }
});