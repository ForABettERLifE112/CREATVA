document.addEventListener('DOMContentLoaded', function() {
    // Portfolio Filter
    const portfolioFilters = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            portfolioFilters.forEach(f => {
                f.classList.remove('active');
                f.classList.remove('bg-primary');
                f.classList.remove('text-white');
                f.classList.add('bg-gray-200');
                f.classList.add('text-gray-700');
            });
            
            // Add active class to clicked filter
            this.classList.add('active');
            this.classList.add('bg-primary');
            this.classList.add('text-white');
            this.classList.remove('bg-gray-200');
            this.classList.remove('text-gray-700');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Show/hide items based on filter
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                }
                 else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    
    // Pricing Toggle
    const pricingToggles = document.querySelectorAll('.pricing-toggle');
    const prices = document.querySelectorAll('.price');
    const periods = document.querySelectorAll('.period');
    
    pricingToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Remove active class from all toggles
            pricingToggles.forEach(t => {
                t.classList.remove('active');
                t.classList.remove('bg-primary');
                t.classList.remove('text-white');
            });
            
            // Add active class to clicked toggle
            this.classList.add('active');
            this.classList.add('bg-primary');
            this.classList.add('text-white');
            
            // const period = this.getAttribute('data-period');
            
            // Update prices and periods
            // prices.forEach(price => {
            //     price.textContent = price.getAttribute(`data-${period}`);
            // });
            
            // periods.forEach(p => {
            //     p.textContent = period === 'monthly' ? 'شهرياً' : 'سنوياً';
            // });
        });
    });
    
    // Before/After Slider
    const slider = document.getElementById('slider');
    const beforeImage = document.querySelector('.before');
    const beforeAfterRange = document.getElementById('before-after-range');
    
    if (slider && beforeImage && beforeAfterRange) {
        let isDown = false;
        
        slider.addEventListener('mousedown', () => {
            isDown = true;
        });
        
        window.addEventListener('mouseup', () => {
            isDown = false;
        });
        
        window.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            const container = slider.parentElement;
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percent = (x / rect.width) * 100;
            
            if (percent >= 0 && percent <= 100) {
                beforeImage.style.width = `${percent}%`;
                slider.style.left = `${percent}%`;
                beforeAfterRange.value = percent;
            }
        });
        
        beforeAfterRange.addEventListener('input', () => {
            const percent = beforeAfterRange.value;
            beforeImage.style.width = `${percent}%`;
            slider.style.left = `${percent}%`;
        });
    }
    
    // Color Grading Controls
    const colorImage = document.getElementById('color-image');
    const contrastRange = document.getElementById('contrast-range');
    const brightnessRange = document.getElementById('brightness-range');
    const saturationRange = document.getElementById('saturation-range');
    const hueRange = document.getElementById('hue-range');
    const resetColorBtn = document.getElementById('reset-color');
    
    function updateColorFilters() {
        const contrast = contrastRange.value;
        const brightness = brightnessRange.value;
        const saturation = saturationRange.value;
        const hue = hueRange.value;
        
        colorImage.style.filter = `contrast(${contrast}%) brightness(${brightness}%) saturate(${saturation}%) hue-rotate(${hue}deg)`;
    }
    
    if (contrastRange && brightnessRange && saturationRange && hueRange && resetColorBtn) {
        contrastRange.addEventListener('input', updateColorFilters);
        brightnessRange.addEventListener('input', updateColorFilters);
        saturationRange.addEventListener('input', updateColorFilters);
        hueRange.addEventListener('input', updateColorFilters);
        
        resetColorBtn.addEventListener('click', () => {
            contrastRange.value = 100;
            brightnessRange.value = 100;
            saturationRange.value = 100;
            hueRange.value = 0;
            updateColorFilters();
        });
    }
});


const photos = ["#none2" ,"#none3" ,"#none4", "#none5","#none1","#none6"];
const videos = ["#vid1" , "#vid2", "#vid3" , "#vid4", "#vid5" , "#vid2"];
const moshan = ["#mo1" , "#mo2","#mo1" , "#mo2","#mo1" , "#mo2" ,"#pr1","#pr2","#pr3"]
// function photo_show(){
//     for (let i =0 ; i< photos.length ; i++ ){
//         let t = document.querySelector(photos[i]);
//         t.style.display='block'
//         let c = document.querySelector(videos[i]);
//         c.style.display='none'
//         let m = document.querySelector(moshan[i]);
//         m.style.display='none'
        
      
//     }
// }

// function videoo_show(){
//     for (let i =0 ; i< photos.length ; i++ ){
//         let t = document.querySelector(photos[i]);
//         t.style.display='none'
//         let c = document.querySelector(videos[i]);
//         c.style.display='block'
//         let m = document.querySelector(moshan[i]);
//         m.style.display='none'
        
      
//     }
// }
function mo_show(){
    for (let i =0 ; i< photos.length ; i++ ){
        let t = document.querySelector(photos[i]);
        t.style.display='block'
        let c = document.querySelector(videos[i]);
        c.style.display='block'
        let m = document.querySelector(moshan[i]);
        m.style.display='block'
        
      
    }
}
