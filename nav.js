document.addEventListener("DOMContentLoaded", function () {
    const navLinks = [
        { title: "Home", url: "index.html" },
        { title: "Services", url: "services.html" },
        { title: "About Us", url: "aboutus.html" },
        { title: "Contact", url: "contactus.html" },
    ];

    const navContainer = document.getElementById("dynamicNav");

    navLinks.forEach((link) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.textContent = link.title;
        anchor.href = link.url;
        navContainer.appendChild(listItem).appendChild(anchor);
    });

    const currentYear = new Date().getFullYear();
    const footerContainer = document.getElementById("dynamicFooter");
    const footerContent = document.createElement("p");
    footerContent.textContent = `${currentYear} BookMyService. All rights reserved.`;
    footerContainer.appendChild(footerContent);
});
