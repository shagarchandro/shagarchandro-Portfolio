    // <!-- ================== Data entry google sheets strat javascript ======================= -->     
const scriptURL = "https://script.google.com/macros/s/AKfycbyUnxVPYT9NMeAG9mPIQiUjtXEEmveWPNRJy3lX6MFP9A5Sn8m_nXHhwpNHcMBpHDb0/exec";

const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(() => {
    successMsg.style.display = "block";
    form.reset();

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  })
  .catch(err => {
    console.error(err);
    alert("Failed ❌");
  });
});

    // <!-- ================== Data entry google sheets End javascript ======================= -->
    
//    <!-- ================= mobile menu toggle javascript start ================= -->
  
    const menu = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navbar ul');

    menu.onclick = () => {
        nav.classList.toggle('active');
    };

//    <!-- ================= mobile menu toggle javascript start ================= -->


/* ===== SECTION ANIMATION ===== */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add("show");
        }
    });
});

/* ===== NAVBAR SCROLL EFFECT ===== */
window.addEventListener("scroll", () => {
    document.querySelector(".navbar").classList.toggle(
        "scrolled",
        window.scrollY > 50
    );
});


const toggle = document.getElementById("menuToggle");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
});

// <!-- ================= EmailJS javascript start ================= -->


  // 🔥emailJs Public key API
  emailjs.init("pm8ue-Y_Uy3x16TP7");   /* Replace with your EmailJS public key */

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const serviceID = "service_0mrr1z9";
  const adminTemplate = "template_bgedihr";
  const userTemplate = "template_tw84x9j";

  // 1️⃣ Admin email
  const adminMail = emailjs.sendForm(serviceID, adminTemplate, this);

  // 2️⃣ User auto reply email
  const userMail = emailjs.sendForm(serviceID, userTemplate, this);

  Promise.all([adminMail, userMail])
    .then(() => {
      successMsg.innerHTML = "✅ Message sent successfully! Thanks for connecting with us —";
      successMsg.style.display = "block";

      form.reset();

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 3000);
    })
    .catch((err) => {
      console.log("Error:", err);
      alert("Email failed ❌");
    });
});

// <!-- ================= EmailJS javascript End ================= -->



// <!-- Footeer Email and contact link up auto eamil responsive start -->
// <!-- EMAIL 1 -->

document.addEventListener("DOMContentLoaded", function () {

    const email = "mbs200361@gmail.com";

    // দুইটা link select করবে
    const email1 = document.getElementById("emailLinks");
    const email2 = document.getElementById("emailLink");

    // Mobile check
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // function
    function setupLink(link){

        if(isMobile){
            link.href = `mailto:${email}`;
        }else{
            link.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
            link.target = "_blank";
        }

    }

    // দুইটাতেই apply
    setupLink(email1);
    setupLink(email2);

});

// <!-- Footeer Email and contact link up auto eamil responsive end -->





/* ================= DOWNLOAD button dawonloding ANIMATION Start ================= */

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {

    downloadBtn.classList.add("downloading");

    const text = downloadBtn.querySelector(".btn-text");

    text.innerText = "Preparing CV...";

    setTimeout(() => {
        text.innerText = "Downloading...";
    }, 1000);
    
    setTimeout(() => {
        text.innerText = "Completed ✓";
    }, 3000);

    setTimeout(() => {
        downloadBtn.classList.remove("downloading");
        text.innerText = "Download CV";
      }, 5000);
      
    });
    /* ================= DOWNLOAD button dawonloding ANIMATION ENd ================= */

    