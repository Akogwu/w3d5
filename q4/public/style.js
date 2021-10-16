window.onload = (function(){
    const getLink = ()=>{
    let link = "";
    const date = new Date();
    const hour = date.getHours();
        if (hour >= 6 && hour <= 18){
            return link = "day.css";
        } 
        return link = 'night';
    }

    document.getElementsByTagName('head')[0].append('<link rel="stylesheet" href="'+getLink+'.css"/>');
});


