let btnSL=document.querySelectorAll(".tblSL")
let btnSB=document.querySelectorAll(".tblSB")
let cek=document.querySelectorAll(".ck")
// console.log(btnSL)

for(let i=0; i<btnSL.length; i++){
	btnSL[i].addEventListener("click",function(){
		//untuk memunculkan selanjutnya
		let bg=".KS"+(i+1);
		let bgcoba=document.querySelector(bg)
		bgcoba.classList.toggle("hilang")

		//untuk menghilangkan yang sedang aktif
		let tg=".KS"+i;
		let tgcoba=document.querySelector(tg)
		tgcoba.classList.toggle("hilang")
	})
}

for (let i=0; i<btnSB.length; i++){
	btnSB[i].addEventListener("click",function(){
		//untuk memunculkan sebelumnya
		let bg=".KS"+(i-1);
		let bgcoba=document.querySelector(bg)
		bgcoba.classList.toggle("hilang")

		//untuk menghilangkan yang sedang aktif
		let tg=".KS"+i;
		let tgcoba=document.querySelector(tg)
		tgcoba.classList.toggle("hilang")
	})
}

for (let i=0; i<cek.length; i++){
	cek[i].addEventListener("click",function(){
		let jwb="jawaban"+i
		//untuk Kegiatan Siswa 1.1.1
		if (i==0) {
			let ans=document.getElementById(jwb).value
			//untuk mencek jawaban pengguna
			if(ans==65.000 || ans=="65000"){
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:green;'>Jawaban Benar</p>"
			}
			else{
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:red;'>Jawaban Salah</p>"	
			}
		}

		//untuk Kegiatan Siswa 1.1.2
		if (i==1) {
			let ans=document.getElementById(jwb).value
			//untuk mencek jawaban pengguna
			if(ans==8){
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:green;'>Jawaban Benar</p>"
			}
			else{
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:red;'>Jawaban Salah</p>"	
			}
				}

		//untuk Kegiatan Siswa 1.1.3
		if (i==2) {
			let ans=document.getElementById(jwb).value
			//untuk mencek jawaban pengguna
			if(ans==9.000 || ans=="9000"){
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:green;'>Jawaban Benar</p>"
			}
			else{
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:red;'>Jawaban Salah</p>"	
			}
		}

		//untuk Kegiatan Siswa 1.1.4
		if (i==3) {
			let ans=document.getElementById(jwb).value
			//untuk mencek jawaban pengguna
			if(ans==6){
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:green;'>Jawaban Benar</p>"
			}
			else{
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:red;'>Jawaban Salah</p>"	
			}
		}

		//untuk Kegiatan Siswa 1.1.5
		if (i==4) {
			let ans=document.getElementById(jwb).value
			//untuk mencek jawaban pengguna
			if(ans==201.000 || ans=="201000"){
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:green;'>Jawaban Benar</p>"
			}
			else{
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:red;'>Jawaban Salah</p>"	
			}
		}
	})
}
