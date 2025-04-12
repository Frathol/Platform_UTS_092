document.getElementById("nextToHobi").addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const jumlah = parseInt(document.getElementById("jmlHobi").value);
  
    if (!firstName || !lastName || !email || isNaN(jumlah) || jumlah <= 0) {
      alert("Semua data harus diisi dengan benar!");
      alert("Jangan sampai ada kesalahan penulisan atau ada data yang lupa diisi!");
      return;
    }
  
    
    document.getElementById("step1").classList.add("bg-light", "text-muted");
    document.querySelectorAll("#step1 , #step1 button").forEach(el => el.disabled = true);
  
    
    const step2 = document.getElementById("step2");
    step2.innerHTML = "<h4>Masukkan " + jumlah + " Hobi</h4><hr>";
    for (let i = 1; i <= jumlah; i++) {
      const label = document.createElement("label");
      label.className = "form-label";
      label.textContent = "Hobi " + i;
      const input = document.createElement("input");
      input.type = "text";
      input.className = "form-control mb-2";
      input.id = "hobi" + i;
      step2.appendChild(label);
      step2.appendChild(input);
    }
  
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-primary mt-2";
    button.textContent = "OK";
    button.addEventListener("click", function () {
      const hobiList = [];
      for (let i = 1; i <= jumlah; i++) {
        const val = document.getElementById("hobi" + i).value.trim();
        if (!val) {
          alert("Semua hobi harus diisi!");
          return;
        }
        hobiList.push(val);
      }
  
      
      step2.classList.add("bg-light", "text-muted");
      step2.querySelectorAll("input, button").forEach(el => el.disabled = true);
  
      
      const step3 = document.getElementById("step3");
      step3.classList.remove("d-none");
      step3.innerHTML = "<h4>Pilih Hobi yang Disukai</h4><hr>";
      hobiList.forEach(hobi => {
        const div = document.createElement("div");
        div.className = "form-check";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input";
        checkbox.name = "hobiFavorit";
        checkbox.value = hobi;
        const label = document.createElement("label");
        label.className = "form-check-label";
        label.textContent = hobi;
        div.appendChild(checkbox);
        div.appendChild(label);
        step3.appendChild(div);
      });
  
      const finalBtn = document.createElement("button");
      finalBtn.className = "btn btn-success mt-2";
      finalBtn.textContent = "OK";
      finalBtn.addEventListener("click", function () {
        const selected = Array.from(document.querySelectorAll("input[name='hobiFavorit']:checked"))
                              .map(cb => cb.value);
        if (selected.length === 0) {
          alert("Pilih minimal satu hobi yang disukai!");
          return;
        }
  
        
        step3.classList.add("bg-light", "text-muted");
        step3.querySelectorAll("input, button").forEach(el => el.disabled = true);
  
        
        const result = document.getElementById("result");
        result.innerHTML = `Hallo, nama saya <b>${firstName} ${lastName}</b>, dengan email <b>${email}</b>, saya mempunyai sejumlah <b>${jumlah}</b> pilihan hobi yaitu <b>${hobiList.join(", ")}</b>, dan saya menyukai <b>${selected.join(", ")}</b>.`;
      });
      step3.appendChild(finalBtn);
    });
  
    step2.appendChild(button);
    step2.classList.remove("d-none");
  });
  