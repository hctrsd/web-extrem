import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "aventuras-web.firebaseapp.com",
    projectId: "aventuras-web",
    storageBucket: "aventuras-web.appspot.com",
    messagingSenderId: "224412802051",
    appId: "1:224412802051:web:a607c3d7ea525a74b6c236",
    measurementId: "G-1HZ9EQYHB9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const datos = Object.fromEntries(formData.entries());

    try {
        document.getElementById("mensaje-container").innerHTML = `
            <div class="mensaje exito">¡Gracias por inscribirte! Te contactaremos pronto.</div>
        `;
        e.target.reset();
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("mensaje-container").innerHTML = `
            <div class="mensaje error">Error al procesar la inscripción. Por favor, intenta nuevamente.</div>
        `;
    }
});
