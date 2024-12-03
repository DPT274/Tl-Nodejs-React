import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Thông tin liên hệ */}
        <div className="footer-item">
          <h3>Thông tin liên hệ</h3>
          <p><strong>Địa chỉ:</strong> 1278 Tỉnh lộ 10, Quận Bình Tân, Thành phố Hồ Chí Minh</p>
          <p><strong>Email:</strong> dotai9093@gmail.com</p>
          <p><strong>Điện thoại:</strong> <a href="tel:+84388725638">+84 388725638</a></p>
        </div>
        
        {/* Kết nối với chúng tôi */}
        <div className="footer-item">
          <h3>Kết nối với chúng tôi</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        {/* Bản đồ */}
        <div className="footer-item">
          <h3>Bản đồ</h3>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.98243442346467!2d106.59345194949304!3d10.756130138925645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c5209c896dd%3A0x22567bdbe2bef6cd!2zVGnhu4dtIFPhu61hIFhlIEhvw6BuZyBNaW5o!5e0!3m2!1svi!2s!4v1725520655559!5m2!1svi!2s"
          width="445" height="325" style={{ border: 0 }} allowFullScreen="" loading="lazy"
           title="Bản đồ khu vực">
</iframe>

        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        &copy; 2023 Website Bán Đồ Chơi Xe Máy. Tất cả các quyền được bảo lưu.
      </p>
    </footer>
  );
};

export default Footer;
