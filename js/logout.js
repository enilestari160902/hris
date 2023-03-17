// Pastikan elemen dengan id "logoutButton" ditemukan pada halaman HTML
let logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
	logoutButton.addEventListener("click", function () {
		localStorage.removeItem("token");
		window.location.href = "login.html";
		alert("Logout berhasil");
	});
} else {
	console.log("Logout button not found.");
}