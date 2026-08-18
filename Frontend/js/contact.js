const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  try{
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });
    const data = await response.json();
    
    if(response.ok && data.success) {
      alert("Message sent successfully!");
      contactForm.reset();
    } else {
      alert(data.message || "Please enter valid details.");
    }
  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }
});