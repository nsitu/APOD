let apod = document.querySelector('#apod');
let datePicker = document.querySelector('#datePicker');

// https://stackoverflow.com/a/49916376/17929842
datePicker.max = new Date().toISOString().split("T")[0];

datePicker.addEventListener('change', (event)=>{ 
    let theDate = event.target.value;
    axios.get('api/'+theDate).then((response)=>{
        console.log(response.data);        
        
        // reset contents of apod container
        apod.innerHTML = ""; 

        if (response.data.media_type == "image"){
            let img = document.createElement('img');
            img.src = response.data.url;
            apod.appendChild(img);
        }
        else if (response.data.media_type == "video"){
            let iframe = document.createElement('iframe'); 
            iframe.src = response.data.url;
            apod.appendChild(iframe); 
        }

    }).catch((error)=>{
        console.log(error);
    })
})
 
