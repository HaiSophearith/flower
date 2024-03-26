onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 100);
  };
  if (screen.width < 600) { 

    document.write('<link href="style.css" type="text/css" rel="stylesheet"/>');
    
    } else { 
    
    document.write('<link href="style.css" type="text/css" rel="stylesheet"/>');
    
    } 