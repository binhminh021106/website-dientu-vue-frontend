<template>
  <div class="about-page roboto-font bg-white min-vh-100">
    
    <!-- Banner & Breadcrumb -->
    <section class="page-banner position-relative d-flex align-items-center justify-content-center">
      <div class="position-absolute w-100 h-100 overlay"></div>
      <div class="container position-relative z-1 text-center text-white mt-4">
        <h2 class="fw-bold mb-3 fs-1 text-shadow">Giới thiệu</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-white text-decoration-none hover-text-brand">Trang chủ</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white-50" aria-current="page">Giới thiệu</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="container py-5 my-md-3">
      <div class="row justify-content-center">
        <div class="col-lg-10 content-text">
          <p>
            Với mong muốn mang đến cho khách hàng những sản phẩm thiết bị công nghệ chính hãng từ các thương hiệu sản xuất hàng đầu thế giới. Chúng tôi luôn lắng nghe và đưa ra cho khách hàng những lời khuyên, lựa chọn phù hợp nhất. Cùng với đó là quy trình mua hàng, giao hàng nhanh chóng, thuận tiện cho khách hàng.
          </p>
          <p>
            Luôn đúng giờ và đúng hẹn - đó là cam kết mà <span class="fw-bold text-dark">TechZone</span> muốn dành đến cho khách hàng. Cùng với đó là cam kết về chất lượng sản phẩm, chất lượng phục vụ vì chúng tôi hiểu rằng khách hàng chính là sự sống còn của công ty.
          </p>
          <p>
            Với đội ngũ tư vấn viên giàu kinh nghiệm, am hiểu công nghệ sẽ đưa ra cho khách hàng những lời khuyên hợp lý nhất trong việc tìm kiếm và lựa chọn những dòng sản phẩm như Laptop, Điện thoại, Thiết bị nhà thông minh phù hợp với nhu cầu.
          </p>
          <p>
            Một trong những thế mạnh của <span class="fw-bold text-dark">TechZone</span> đó là cung cấp đa dạng thiết bị số. Đây được biết đến là thương hiệu tin cậy của người Việt, với quá trình hình thành và phát triển để tạo ra những trải nghiệm mua sắm tuyệt vời, đáp ứng nhu cầu khắt khe của người dùng công nghệ.
          </p>
          <p>
            Với những sản phẩm được nhập khẩu chính ngạch, việc hợp tác trực tiếp với các hãng lớn mang đến cho sản phẩm sự đảm bảo tuyệt đối. Chế độ bảo hành dài hạn và chính sách hậu mãi chu đáo còn được đánh giá là ưu điểm vượt trội, bảo vệ tối đa cho quyền lợi của người dùng.
          </p>
          <p>
            Còn đối với những sản phẩm phụ kiện đều được cấu tạo với thành phần chất lượng cao, thiết kế hiện đại mang đến sự tiện dụng, bền bỉ và phong cách cho sản phẩm.
          </p>
          <p>
            Ngoài ra, những sản phẩm đến từ <span class="fw-bold text-dark">TechZone</span> luôn có mức giá thành khá đa dạng, phù hợp với thu nhập của người Việt. Chính vì thế, sức nóng của thương hiệu này qua từng năm chưa bao giờ có dấu hiệu giảm sút.
          </p>
          <p>
            Lựa chọn thiết bị công nghệ tại <span class="fw-bold text-dark">TechZone</span> chính là bạn đã tìm đến một địa chỉ mua hàng chính hãng tin cậy. Với hình thức vận chuyển linh hoạt và đa dạng cùng với đó là chi phí được tối ưu nhất cho khách hàng. Chúng tôi tin rằng, bạn sẽ không bao giờ thất vọng khi tìm đến và mua hàng tại <span class="fw-bold text-dark">TechZone</span>.
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.roboto-font {
  font-family: 'Roboto', sans-serif;
}

/* Banner Styling */
.page-banner {
  height: 280px;
  /* Sử dụng hình ảnh không gian làm việc công nghệ từ Unsplash */
  background: url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
  position: relative;
}
.overlay {
  /* Lớp phủ đen mờ để làm nổi bật chữ trắng */
  background-color: rgba(0, 0, 0, 0.6); 
}
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Hover Utilities */
.hover-text-brand:hover {
  color: #d84727 !important;
  transition: color 0.2s ease;
}

/* Text Content Styling */
.content-text p {
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #333333; /* Màu chữ dễ đọc giống ảnh mẫu */
  text-align: justify; /* Căn đều 2 bên tạo khối văn bản vuông vức */
}

/* Nổi bật tên thương hiệu trong đoạn văn */
.content-text span.fw-bold {
  color: #111827 !important;
}
</style>