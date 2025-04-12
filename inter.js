document.getElementById("OK").addEventListener("click", function() {
    let nama = document.getElementById("username").value;
    let jumlah = parseInt(document.getElementById("jPilihan").value);
    let container = document.getElementById("pilihanContainer");
    
    
    if (!nama || isNaN(jumlah) || jumlah <= 0) {
        alert("Masukkan nama dan jumlah pilihan yang benar!");
        return;
    }
    
    document.getElementById("OK").classList.add("hidden");
    let formPilihan = document.createElement("form");
            formPilihan.id = "formPilihan";
            formPilihan.appendChild(document.createElement("hr"));
            formPilihan.appendChild(document.createElement("br"));
            
            for (let i = 1; i <= jumlah; i++) {
                let label = document.createElement("label");
                label.textContent = "Pilihan " + i + " :";
                let input = document.createElement("input");
                input.type = "text";
                input.id = "pilihan" + i;
                formPilihan.appendChild(label);
                formPilihan.appendChild(input);
                
                formPilihan.appendChild(document.createElement("br"));
            }
            
            let submitButton = document.createElement("button");
            submitButton.textContent = "OK";
            submitButton.type = "button";
            submitButton.id = "submitPilihan";
            submitButton.addEventListener("click", function() {
                let pilihanTerisi = [];
                for (let i = 1; i <= jumlah; i++) {
                    let nilai = document.getElementById("pilihan" + i).value;
                    if (!nilai) {
                        alert("Semua pilihan harus diisi!");
                        return;
                    }
                    pilihanTerisi.push(nilai);
                }
                submitButton.classList.add("hidden");
                formPilihan.appendChild(document.createElement("br"));
                formPilihan.appendChild(document.createElement("hr"));
                let pilihanTampilan = document.createElement("div");
                let labelPilihan = document.createElement("p");
                labelPilihan.textContent = "Pilihan :";
                pilihanTampilan.appendChild(labelPilihan);
                let select = document.createElement("select");
                pilihanTerisi.forEach((text) => {
                    let option = document.createElement("option");
                    option.value = text;
                    option.textContent = text;
                    select.appendChild(option);
                });
                pilihanTampilan.appendChild(select);
                pilihanTampilan.appendChild(document.createElement("br"));
                
                pilihanTerisi.forEach((text) => {
                    let inputRadio = document.createElement("input");
                    inputRadio.type = "radio";
                    inputRadio.name = "pilihanFinal";
                    inputRadio.value = text;
                    let label = document.createElement("label");
                    label.textContent = text;
                    pilihanTampilan.appendChild(inputRadio);
                    pilihanTampilan.appendChild(label);
                    pilihanTampilan.appendChild(document.createElement("br"));
                });

                let finalSubmit = document.createElement("button");
                finalSubmit.textContent = "OK";
                finalSubmit.type = "button";
                finalSubmit.addEventListener("click", function() {
                    let selected = document.querySelector('input[name="pilihanFinal"]:checked');
                    let selectedDropdown = select.value;
                    if (!selected) {
                        alert("Pilih salah satu opsi!");
                        return;
                    }
                    let last = document.getElementById("pilihanContainer").textContent = `Hallo, nama saya ${nama}, saya mempunyai sejumlah ${jumlah} pilihan yaitu ${pilihanTerisi.join(", ")}, dan saya memilih ${selected.value} (${selectedDropdown})`;
                    container.appendChild(last);
                });
                
                pilihanTampilan.appendChild(finalSubmit);
                container.appendChild(pilihanTampilan);
               
            });
            
            formPilihan.appendChild(submitButton);
            container.appendChild(formPilihan);
});