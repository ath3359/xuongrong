// JavaScript Document
// Tạo hiệu ứng khi click vào tên sản phẩm
const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.querySelector('.product-link').addEventListener('click', function(event) {
        event.preventDefault(); // Ngừng hành động mặc định của liên kết
        const details = product.querySelector('.product-details');
         
        // Toggle giữa việc hiển thị và ẩn phần chi tiết
        product.classList.toggle('active');
        
        // Đảm bảo các phần chi tiết của sản phẩm khác bị ẩn đi
        products.forEach(p => {
            if (p !== product) {
                p.classList.remove('active');
            }
        });
    });
});
$('#slide').owlCarousel({
loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
dots:true,
	})