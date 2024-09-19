let formText = document.querySelector("#from");
let toText = document.querySelector("#to");
let translateBtn = document.querySelector(".translate");
let toSelect = document.querySelector("#toSelect");
let fromSelect = document.querySelector("#fromSelect");
let moreTran = document.querySelector(".moreTran");

translateBtn.addEventListener("click", async () => {

  let API_URL = `https://api.mymemory.translated.net/get?q=${formText.value}!&langpair=${fromSelect.value}|${toSelect.value}`;
  let res = fetch(API_URL).then(res => res.json()).then(data => {
    console.log(data);
    toText.value = data.responseData.translatedText;

    
    data.matches.map((el,index)=>{
      console.log("EL : ",el)
      let h3 = document.createElement("h3");
      h3.innerText = el.translation;
      moreTran.appendChild(h3);
      moreTran.style.display = "block";
      moreTran.style.marginTop = "10px";
    })

  });

})