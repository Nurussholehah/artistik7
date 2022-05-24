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
		//untuk Kegiatan Siswa 3.1.1
		let jwb1= "jawaban6"
		if (i==0) {
			let ans=document.getElementById(jwb).value
			let ans1 = document.getElementById(jwb1).value
			//untuk mencek jawaban pengguna
			if(ans=="26.250" && ans1=="131.250"){
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:green;'>Jawaban Benar</p>"
			}
			else{
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:red;'>Jawaban Salah</p>"	
			}
		}

		//untuk Kegiatan Siswa 3.1.2
		let jwb2= "jawaban7"
		if (i==1) {
			let ans=document.getElementById(jwb).value
			let ans2 = document.getElementById(jwb2).value
			//untuk mencek jawaban pengguna
			if(ans=="38%" && ans2=="70.680"){
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:green;'>Jawaban Benar</p>"
			}
			else{
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:red;'>Jawaban Salah</p>"	
			}
				}

		//untuk Kegiatan Siswa 3.1.3
		let jwb3="jawaban8"
		if (i==2) {
			let ans=document.getElementById(jwb).value
			let ans2=document.getElementById(jwb3).value
			//untuk mencek jawaban pengguna
			if(ans=="85.000" && ans2=="10%"){
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:green;'>Jawaban Benar</p>"
			}
			else{
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:red;'>Jawaban Salah</p>"	
			}
		}

		//untuk Kegiatan Siswa 3.1.4
		let jwb4="jawaban9"
		if (i==3) {
			let ans=document.getElementById(jwb).value
			let ans2=document.getElementById(jwb4).value
			//untuk mencek jawaban pengguna
			if(ans=="5%" && ans2=="57.000"){
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:green;'>Jawaban Benar</p>"
			}
			else{
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:red;'>Jawaban Salah</p>"	
			}
		}

		//untuk Kegiatan Siswa 3.1.5
		let jwb5="jawaban10"
		if (i==4) {
			let ans=document.getElementById(jwb).value
			let ans2=document.getElementById(jwb5).value
			//untuk mencek jawaban pengguna
			if(ans=="108.300" && ans2=="176.700"){
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:green;'>Jawaban Benar</p>"
			}
			else{
				let ket=document.querySelector(".keterangan"+i)
				ket.innerHTML="<p style='color:red;'>Jawaban Salah</p>"	
			}
		}

		//untuk Kegiatan Siswa 3.1.6
		let jwb6="jawaban11"
		if (i==5) {
			let ans=document.getElementById(jwb).value
			let ans2=document.getElementById(jwb6).value
			//untuk mencek jawaban pengguna
			if(ans=="48.000" && ans2=="2%"){
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
