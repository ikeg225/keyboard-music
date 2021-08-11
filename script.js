document.onkeypress = (e) => {
    try {
      let theKey = document.getElementById(e.code);
      document.querySelector("audio[class='" + e.code +"']").play();
      theKey.classList.add('playing');
      setTimeout(() => {
        theKey.classList.remove('playing');
      }, 300);
    } catch {
      console.log("wrong key")
    }
};