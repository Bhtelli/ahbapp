// Navigation and Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation Menu Items
    const menuItems = document.querySelectorAll('.sekmeler div');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            switch(text) {
                case 'ANA SAYFA':
                    window.location.href = 'home.html';
                    break;
                case 'AHBAP DERNEĞİ':
                    window.location.href = 'dernek.html';
                    break;
                case 'AHBAP PLATFORMU':
                    window.location.href = 'platform.html';
                    break;
                case 'HABERLER':
                    window.location.href = 'haberler.html';
                    break;
            }
        });
    });

    // Search Functionality
    const searchIcon = document.querySelector('.fa-magnifying-glass');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            const searchTerm = prompt('Arama yapmak istediğiniz kelimeyi girin:');
            if (searchTerm) {
                // Implement search functionality here
                console.log('Searching for:', searchTerm);
            }
        });
    }

    // Donation Button
    const donationBtns = document.querySelectorAll('.bagıs-yap-btn-1');
    donationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            window.location.href = 'bagis.html';
        });
    });

    // Help Request Button
    const helpBtn = document.querySelector('.yardım-btn');
    if (helpBtn) {
        helpBtn.addEventListener('click', function() {
            window.location.href = 'yardim.html';
        });
    }

    // Social Media Links
    const socialIcons = document.querySelectorAll('.social-logo i');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const platform = this.className.split('fa-')[1].split('-')[0];
            let url = '';
            
            switch(platform) {
                case 'facebook':
                    url = 'https://www.facebook.com/ahbap';
                    break;
                case 'twitter':
                    url = 'https://twitter.com/ahbap';
                    break;
                case 'youtube':
                    url = 'https://www.youtube.com/ahbap';
                    break;
                case 'instagram':
                    url = 'https://www.instagram.com/ahbap';
                    break;
            }
            
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    // Form Submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            console.log('Form submitted');
        });
    });

    // Advert Click Handler
    const advertImage = document.querySelector('.advert-image');
    if (advertImage) {
        advertImage.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'urun.html';
        });
    }
}); 